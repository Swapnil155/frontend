import React from 'react'
import BookkingTourCard from '../../cards/BookkingTourCard'

export default function BookingFormTabs() {
  return (
    <div>
      <section className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
            <div class="col-sm-12 product-tabs">
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#tab1" data-toggle="tab">Men Clothings</a></li>
                    <li class=""><a href="#tab2" data-toggle="tab">Men Accessories</a></li>
                    <li class=""><a href="#tab3" data-toggle="tab">Women Clothings</a></li>
                    <li class=""><a href="#tab4" data-toggle="tab">Women Accessories</a></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="tab1">
                        <h1>Some Content Here for men clothings</h1>
                    </div>
                    <div class="tab-pane" id="tab2">
                        <h1>Some Content Here for men accessories</h1>
                    </div>
                    <div class="tab-pane" id="tab3">
                        <h1>Some Content Here for women clothings</h1>
                    </div>
                    <div class="tab-pane" id="tab4">
                        <h1>Some Content Here for women accessories</h1>
                    </div>
                </div>
                <div class="tab-control">
                    <a class="previous-button" role="button"><i class="fa fa-angle-left fa-3x fa-fw"></i></a>
                    <a class="next-button" role="button"><i class="fa fa-angle-right fa-3x fa-fw"></i></a>
                </div>
            </div>
            </div>
            <div className="col-lg-5 ps-xl-5">
            <BookkingTourCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
