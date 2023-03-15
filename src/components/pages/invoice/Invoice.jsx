import React from "react";
import BreadCrumb from "../../layout/BreadCrumb";
import {FaRegFilePdf,FaPrint} from 'react-icons/fa'

const Invoice = () => {
  return (
    <section className="hero-header py-6">
      <div className="container">
        <div className="row mb-4 d-print-none">
          <div className="col-lg-6">
            {/* Breadcrumbs */}
            <BreadCrumb />
          </div>
          <div className="col-lg-6 text-lg-end">
            <button className="btn btn-primary me-2">
              <FaRegFilePdf className="me-2" /> Download PDF
            </button>
            <button className="btn" onClick={()=>window.print()}>
              <FaPrint className=" me-2" /> Print
            </button>
          </div>
        </div>
        <div className="card border-0 shadow shadow-print-0">
          <div className="card-header bg-gray-100 p-5 border-0 px-print-0">
            <div className="row">
              <div className="col-6 d-flex align-items-center">
                <img
                  src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/logo.svg"
                  alt="Directory"
                />
              </div>
              <div className="col-6 text-end">
                <h3 className="mb-0">Invoice 202009001</h3>
                <p className="mb-0">Issued on Sep 01, 2020</p>
              </div>
            </div>
          </div>
          <div className="card-body p-5 p-print-0">
            <div className="row mb-4">
              <div className="col-sm-6 pe-lg-3">
                <h2 className="h6 text-uppercase mb-4">Supplier</h2>
                <h6 className="mb-1">Directory, Inc.</h6>
                <p className="text-muted">
                  13/25 New Avenue
                  <br />
                  New Heaven
                  <br />
                  45Y 73J
                  <br />
                  England
                  <br />
                  <strong>Great Britain</strong>
                </p>
              </div>
              <div className="col-sm-6 ps-lg-4">
                <h2 className="h6 text-uppercase mb-4">Customer</h2>
                <h6 className="mb-1">James Brown</h6>
                <p className="text-muted">
                  13/25 New Avenue
                  <br />
                  New Heaven
                  <br />
                  45Y 73J
                  <br />
                  England
                  <br />
                  <strong>Great Britain</strong>
                </p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-6 pe-lg-3 text-sm">
                <div className="row">
                  <div className="col-6 text-uppercase text-muted">
                    Bank account
                  </div>
                  <div className="col-6 text-end">hello@bootstrapious.com</div>
                </div>
                <div className="row">
                  <div className="col-6 text-uppercase text-muted">
                    Reference
                  </div>
                  <div className="col-6 text-end">202009001</div>
                </div>
                <div className="row">
                  <div className="col-6 text-uppercase text-muted">
                    Payment method
                  </div>
                  <div className="col-6 text-end">Bank transfer</div>
                </div>
              </div>
              <div className="col-md-6 ps-lg-4 text-sm">
                <div className="row">
                  <div className="col-6 text-uppercase text-muted">
                    Issued on
                  </div>
                  <div className="col-6 text-end">Sep 01, 2020</div>
                </div>
                <div className="row">
                  <div className="col-6 text-uppercase text-muted">Due on</div>
                  <div className="col-6 text-end">Sep 01, 2020</div>
                </div>
              </div>
            </div>
            <div className="table-responsive text-sm mb-5">
              <table className="table table-striped">
                <thead className="bg-gray-200">
                  <tr className="border-0">
                    <th className="center">#</th>
                    <th>Item</th>
                    <th>Description</th>
                    <th className="text-end">Price</th>
                    <th className="center">Qty</th>
                    <th className="text-end">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td className="fw-bold">Room Rental Services</td>
                    <td>August</td>
                    <td className="text-end">$958.00</td>
                    <td className="text-center">1</td>
                    <td className="text-end">$958.00</td>
                  </tr>
                  <tr>
                    <td className="text-center">2</td>
                    <td className="fw-bold">Premium Listing</td>
                    <td>London</td>
                    <td className="text-end">$100.00</td>
                    <td className="text-center">1</td>
                    <td className="text-end">$100.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-sm-7 col-lg-5 col-xl-4 ms-auto">
                <table className="table">
                  <tbody>
                    <tr className="text-sm">
                      <td className="fw-bold">Subtotal</td>
                      <td className="text-end">$1,058</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="fw-bold">VAT (21%)</td>
                      <td className="text-end">$222.18</td>
                    </tr>
                    <tr>
                      <td className="text-uppercase fw-bold">Total</td>
                      <td className="text-end fw-bold">$1,280.18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card-footer bg-gray-100 p-5 px-print-0 border-0 text-end text-sm">
            <p className="mb-0">Thank you for you business. Directory, Inc.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invoice;
