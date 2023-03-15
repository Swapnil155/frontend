import React from 'react'

const Dashboard = () => {
  return (
    <div>
       <section className='mx-2'> 
       <div className="container">
         <div className="row">
           <div className="col-sm-3">
             <div className="card shadow">
               <div className="p-2">hello</div>
             </div>
           </div>
           <div className="col-sm-3">
             <div className="card shadow">
               <div className="p-2">hello</div>
             </div>
           </div>
           <div className="col-sm-3">
             <div className="card shadow">
               <div className="p-2">hello</div>
             </div>
           </div>
           <div className="col-sm-3">
             <div className="card shadow">
               <div className="p-2">hello</div>
             </div>
           </div>
         </div>
       </div>
       </section>

       <section className='py-5 container'>
        <div className="row">
          <div className="col-md-6">
            <div className="card my-2 p-2 py-6">hello</div>
            <div className="card my-2 p-2 py-6">hello</div>
            <div className="card my-2 p-2 py-6">hello</div>
            <div className="card my-2 p-2 py-6">hello</div>
          </div>
          <div className="col-md-4">
            <div className="sticky-top py-2">
              sticky top
            </div>
          </div>
        </div>
       </section>
    </div>
  )
}

export default Dashboard