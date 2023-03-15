import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiFilter2Line } from "react-icons/ri";
import PriceRange from "./components/PriceRange";
import DateRange from "./components/DateRange";
import Moderate from "./components/Moderate";
import Specility from "./components/Specility";
import DepartureCity from "./components/DepartureCity";
import { data } from "../../../asset/MOCK_DATA";
import DateRange_1 from "./components/DateRange_1";


const initialState = {
    priceRange: "",
    dateRange: {start: '', end: ''},
    modarateChecked: [],
    specilityChecked: [],
    depatureCity: [],
}
const initialStateForFilterData = {
  dateRange: [],
  Modarate : [],
    spcCity : [],
    depaCity : []
}
const Filter = () => {
  const [AllData, setAllData] = useState([]);
  const [Modarate, setModarate] = useState([]);
  // const [filterSelectedValue, setFilterSelectedValue] = useState({
  //   priceRange: "",
  //   dateRange: "",
  //   modarateChecked: [],
  //   specilityChecked: [],
  //   depatureCity: [],
  // });
  const [filterSelectedValue, setFilterSelectedValue] = useState(initialState);
  const [isClear, SetIsClear] = useState(false)

  const [filterdata, seFilterdata] = useState(initialStateForFilterData)

  useEffect(() => {
    setAllData(data)
    SetIsClear(false)
  }, [data,isClear]);


  const handlerFilter = (filters, categories) => {

    const newFilters = { ...filterSelectedValue };

    newFilters[categories] = filters;

    setFilterSelectedValue(newFilters)

    const AData = {...filterdata}

    if(categories === 'specilityChecked'){

      const c = [...new Set(filters.map((i)=>AllData.filter((item)=>(item.specility === i))))]
      // console.log('Specility :' + c)
  
      const b = []
      c.forEach(Element=>{
        Element.forEach(el=>{
          b.push(el);
        })
      })
      AData['spcCity'] = b;
      seFilterdata(AData)
    }else
    if(categories === 'modarateChecked'){

      const e = [...new Set(filters.map((i)=>AllData.filter((item)=>(item.Moderate === i))))]
      //  console.log('Modarate :' + e)
  
      const f = []
      e.forEach(Element=>{
        Element.forEach(el=>{
          f.push(el);
        })
      })
      AData['Modarate'] = f;
      seFilterdata(AData)
    }else
    if(categories === 'depatureCity'){

      const e = [...new Set(filters.map((i)=>AllData.filter((item)=>(item.departureCity === i))))]
      //  console.log('Modarate :' + e)
  
      const f = []
      e.forEach(Element=>{
        Element.forEach(el=>{
          f.push(el);
        })
      })
      AData['depaCity'] = f;
      seFilterdata(AData)
    }else
    if(categories === 'dateRange'){
      console.log(filters)
      const allDates = []
      const sDate = [...new Set(AllData.map((item)=>{
        allDates.push(item.startDate)
        allDates.push(item.endDate)
      }))]
      // console.log("start"+sDate)
      // allDates.push(sDate)
      // const eDate = [...new Set(AllData.map((item)=>allDates.push(item.endDate)))]
      // console.log("end"+eDate)
      // allDates.push(eDate)
      
      const xy = [...new Set(allDates.sort())]
      console.log(xy)
      
      
    }else{
      setAllData(...filterdata)
    }
  };
console.log(filterSelectedValue)
const okFilter = () =>{

  const AllFilteratedData = []
  // console.log(filterdata)
  const x = filterdata.Modarate.map(i=>i)
  AllFilteratedData.push(x)
  const y = filterdata.depaCity.map(i=>i)
  AllFilteratedData.push(y)
  const z = filterdata.spcCity.map(i=>i)
  AllFilteratedData.push(z)

  // console.log(AllFilteratedData)
  
  const w = []
  AllFilteratedData.forEach(q=>
    q.forEach((o)=>{
      w.push(o)
    })
  )
  
  console.log([...new Set(w)])
}

const handlerDateRange = (start, end) =>{
  console.log(start, end)
}

const ResetFilter = () =>{
   setFilterSelectedValue({...initialState})
   seFilterdata({...initialStateForFilterData})
   SetIsClear(true)
}
// console.log(isClear)

  return (
    <div className="Filter-Card" style={{ top: 100, textSizeAdjust: '0.1rem' }}>
      <div className="p-4 shadow rounded ">
        <div className="d-flex justify-content-between">
          <p className="text-muted">Filter Your Tour</p>
          <p className="btn btn-primary" onClick={ResetFilter} >Reset</p>
        </div>
        <hr className="my-4" />
        <div className="accordion lh-1" id="accordion1">
          {/* ======= price Renge ======= */}
          <PriceRange />
          {/* ======= End price ====== */}

          {/* ======= Date Renge ====== */}
          <DateRange 
            passClaerFilter={isClear}
            ChangeHandlerDateRange={(start)=>handlerFilter(start, "dateRange")}
          />
          {/* <DateRange_1 /> */}
          {/* ======= End Date Renge ======= */}
        </div>
        {/* ===== More Filter ======= */}
        <div className="collapse" id="collapseExample">
          <div className="accordion" id="accordion1">
            <Moderate
              handlerFilter={filter=>handlerFilter(filter,"modarateChecked")}
              passClaerFilter={isClear}
            />
            <Specility 
              // SpecilityType={specility.map((ietm,i) => ({ _id:i, name: ietm, isChecked: false }))}
              handlerFilter={filter=>handlerFilter(filter,"specilityChecked")}
              passClaerFilter={isClear}
            />
            <DepartureCity
              handlerFilter={filter=>handlerFilter(filter,"depatureCity")}
              passClaerFilter={isClear}
            />
          </div>
        </div>
        {/* ====== end More Filter ====== */}
        {/*  */}

        {/*  */}

        <div className="d-flex justify-content-between my-4">
          <button 
          className="btn btn-primary" 
          type="submit"
          onClick={okFilter}
          >
            <RiFilter2Line className="" /> Filter
          </button>

          <Link
            className="Link text-uppercase letter-spacing-1 fw-600 btn-collapse"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            to=""
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Filter;
