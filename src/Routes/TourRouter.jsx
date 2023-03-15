import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllTour from '../components/pages/allTour/AllTour'
import TourDetails from '../components/pages/tourDetails/TourDetails'
import StateTours from '../components/pages/state/StateTours'

const TourRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AllTour />} />
            <Route path='/State' element={<StateTours />} />
            <Route path='/State/Tour-Details/:slug&:id' element={<TourDetails />} />
        </Routes>
    </div>
  )
}

export default TourRouter