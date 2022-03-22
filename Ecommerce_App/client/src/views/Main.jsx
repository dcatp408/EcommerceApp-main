import React, { Component } from 'react';

class Main extends Component {

render(){

return (
    <><nav className="navbar">


        
        <div className="navbar-brand2">
        <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>


            <a className="nav-link" href="#">Orders</a>


            <a className="nav-link " href="#">Profile</a>

            <div class="dropdown">
                <button class="dropbtn">Dropdown 
                <i class="fa fa-caret-down"></i>
                </button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div> 


            <a href="/login"><i className="" style={{color: "black", fontSize:"20px"}}></i></a>
        </div>
    </nav>
    <hr></hr>
    <div className="container">
            <div className="row mt-5">

                <div className="col">
                    <div className="card" style={{width: "25rem"}}>
                        <div className="card-body">
                        <input type="search" placeholder="search product" id="search"/>
                        <input type="submit" value="search" id="search-btn"/>
                            <hr></hr>
                    <li><a href="#" style={{textDecoration: "none", color: "black"}}>T-shirts</a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "black"}}>Shoes</a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "black"}}>Cups</a></li>

                        </div>
                    </div>

                </div>


                <div className="card mt-5" style={{width: "50rem"}}>

                <div className="card mt-5" style={{width: "20rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Blackbelt</h5>

                        <p className="card-text">19.99</p>
</div>
</div>
                <div className="card mt-5" style={{width: "20rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Blackbelt</h5>

                        <p className="card-text">19.99</p>
 </div>
</div>



            </div>

            </div>


        </div><div className="page-wrapper"></div
        ><div className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>

                    <div className="socials">
                        <a href="#"><i className="fa fa-spotify" style={{color: "white", fontSize: "20px"}}></i></a>
                        <a href="#"><i className="fa fa-apple" style={{color: "white", fontSize: "20px"}}></i></a>
                        <a href="#"><i className="fa fa-facebook" style={{color: "white", fontSize: "20px"}}></i></a>
                        <a href="#"><i className="fa fa-instagram" style={{color: "white", fontSize: "20px"}}></i></a>
                        <a href="#"><i className="fa fa-twitter" style={{color: "white", fontSize: "20px"}}></i></a>
                        <a href="#"><i className="fa fa-youtube-play" style={{color: "white", fontSize: "20px"}}></i></a>
                    </div>



                </div>
                <div className="footer-section links">
                    <h2>Contact Us</h2>
                    <div className="contacts">
                        <span><i className="fa fa-phone"></i> &nbsp; 408-888-6532</span>
                        <span><i className="fa fa-envelope"></i> &nbsp; kyleyoungins94@gmail.com</span>
                    </div>


                </div>
                <div className="footer-section contact-form">

                    {/* <li><a href="#" style={{textDecoration: "none", color: "white"}}>Food</a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "white"}}>Apparel</a></li> */}
                    <li><a href="#" style={{textDecoration: "none", color: "white"}}>Miscelaneous</a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "white"}}>Need Help?</a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "white"}}>Business</a></li>

                </div>
                <div className="footer-section email-form">
                    <h2>Join our newsletter</h2>
                    <input type="email" placeholder="Enter your email address" id="footer-email"/>
                        <input type="submit" value="Sign Up" id="footer-email-btn"/>
                        </div>

                        <div className="footer-bottom">
                            &copy; EcommerceApp.com | Designed by Kyle Young and Duy Pham
                        </div>
                    </div>
            </div>
            </>
            );
            }
            }


export default Main;