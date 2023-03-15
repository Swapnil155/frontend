import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../../layout/BreadCrumb'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import PackageService from '../../services/Package.service'
import About from './components/About'
import BookingCard from './components/BookingCard'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Highlist from './components/Highlist'
import HostedBy from './components/HostedBy'
import Icons from './components/Icons'
import Review from './components/Review'
import SimilarTo from './components/SimilarTo'

const TourDetails = () => {
  let {slug,id} = useParams()
  console.log(slug,id)
  const [packageDetails, setPackageDetails] = useState([])

  useEffect(()=>{
    PackageService.getPackageById(id).then((res)=>{
      setPackageDetails(res.data)
      console.log(res.data)
    })
  },[id])
  return (
    <div>
      <Navbar />
        <Header />
        <div className="container py-5">
        {/* <BreadCrumb/> */}
          <div className="row">
            <div className="col-lg-8">
              <Icons data={packageDetails} />
              <About />
              <Gallery />
              <Highlist />
              <HostedBy  data={packageDetails.Tour_author} about={packageDetails.Tour_destails}/>
              <Review />
            </div>
            <div className="col-lg-4 pb-5">
              <BookingCard data={packageDetails}/>
            </div>
          </div>
        </div>
        <div className="py-6 bg-gray-100">
          <SimilarTo />
        </div>
        <Footer />
    </div>
  )
}

export default TourDetails