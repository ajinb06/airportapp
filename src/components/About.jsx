import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <img src="https://ihmnotessite.com/wp-content/uploads/2022/01/top-travel-agencies-.jpg" class="img-fluid" alt="..." />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card">
                                    <h5 class="card-header">About us</h5>
                                    <div class="card-body">
                                        <h5 class="card-title">IN BOOKING AIR TICKETS</h5>
                                        <p class="card-text">Find the best deals on air tickets with our budget-friendly platform! We specialize in offering the lowest fares to destinations around the globe, making travel accessible and affordable for everyone. Our easy-to-use website allows you to compare prices, book flights quickly, and embark on your next adventure without breaking the bank. Whether you're planning a weekend getaway or a long-haul journey, start saving on your airfare with us today!</p>
                                        <a href="/register" class="btn btn-primary">BOOK NOW!!!!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card">
                                    <h5 class="card-header">About us</h5>
                                    <div class="card-body">
                                        <h5 class="card-title">IN TOURISM FIELD</h5>
                                        <p class="card-text">
                                            Explore the world without breaking the bank with our unbeatable tour packages! We offer a diverse selection of affordable travel experiences to destinations across the globe. From all-inclusive beach vacations to adventurous mountain treks, our packages are designed to give you the best value for your money. With easy booking and comprehensive itineraries, planning your dream trip has never been more accessible. Start your adventure today and discover how affordable your next getaway can be!</p>
                                        <a href="tourregister" class="btn btn-primary">For More Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About