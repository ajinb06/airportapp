import React from 'react'
import Navbar from './Navbar'

const TourRegister = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder='Enter a name' />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone number</label>
                                <input type="text" className="form-control" placeholder='Enter phone number' />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Departure</label>
                                <input type="date" name="" id="" class="form-control"></input>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Return date </label>
                                <input type="date" name="" id="" class="form-control"></input>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Destination</label>
                                <input type="text" className="form-control" placeholder='Enter the Destination' />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Budget</label>
                                <select name="" id="" class="form-select">
                                    <option value="Select manufacturer">Select Amount</option>
                                    <option value="1 lakh">1 lakh</option>
                                    <option value="2 lakh">2 lakh</option>
                                    <option value="3 lakh">3 lakh</option>
                                    <option value="4 lakh">4 lakh</option>
                                    <option value="5 lakh">5 lakh</option>
                                    <option value="More than 5 lakh">More than 5 lakh</option>

                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">After filling the above details please subit your response our agents will contact you shortly</label>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourRegister