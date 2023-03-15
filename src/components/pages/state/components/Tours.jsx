import React, {useState} from "react";
import Pagination from "../../../layout/Pagination";
import Cards from "../../../cards/Cards";
import { useEffect } from "react";
import PackageService from '../../../services/Package.service'

const data = [
    {
      id: 1,
      imag: "/images/State-1.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 2,
      imag: "/images/State-2.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 3,
      imag: "/images/State-3.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 4,
      imag: "/images/State-4.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 5,
      imag: "/images/State-5.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 6,
      imag: "/images/State-6.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 7,
      imag: "/images/State-1.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 8,
      imag: "/images/State-2.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 9,
      imag: "/images/State-3.jpg",
      location: "Mumbai",
      price: 120,
    },
  ];

const Tours = () => {

  const [allPackages, setAllPackages] = useState([])

  useEffect(()=>{
    PackageService.getAllPackages().then((res)=>{
      setAllPackages(res.data.data)
    },(error)=>{
      console.log(error)
    })
  },[])

  console.info(allPackages)

    const [showPerPage, setShowPerPage] = useState(6)
    const [pagination, setPagination] = useState({
        start: 0,
        end : showPerPage,
    })
    
    const oncPaginationChange = (start, end) =>{
        setPagination({start:start,end:end})
    }

  return (
    <section className="py-5">
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
          <div className="me-3">
            <p className="mb-3 mb-md-0">
              <strong>{allPackages.length}</strong> results found
            </p>
          </div>
          <div>
            {/* <label className="form-label me-2" htmlFor="form_sort">
              Sort by
            </label> */}
          </div>
        </div>
        
        <Cards data={allPackages}
            pagination={pagination} />
        

            {/* paagintion */}
            <div className="py-5">
            <Pagination showPerPage={showPerPage}
                oncPaginationChange={oncPaginationChange}
                totalCard={allPackages.length} />
            </div>
            {/* end Pagination */}
      </section>
  );
};

export default Tours;
