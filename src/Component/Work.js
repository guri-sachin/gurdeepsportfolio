import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';


const Work = () => {
    let imgdata = require('../data.json');
    const navigate = useNavigate();

    console.log(imgdata)
function Omgdata(e){
    var hjid = e.target.value
    console.log(hjid)
    // const getStatedata= countrydata.find(country=>country.country_id===getcountryId).states;
    const getStatedata= imgdata.find(id=>id.img_id===hjid).images;
    console.log(getStatedata[1].img)
    navigate('/WorkOne', { state: getStatedata})
}

    return (

        <div>
            <nav class="navbar navbar-expand-lg fixed-top  w-100" id="l1">
                <a class="navbar-brand" href="/">
                    <img src="g.png" alt="Logo Image" id="logo" />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ backgroundColor: "white" }}
                >
                    <img src="hamburger-menu.webp" id="toggle"></img>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto" id="sg1">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">
                                Home <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">
                                Skill
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">
                                Services
                            </a>
                        </li>{" "}
                        <li class="nav-item">
                            <a class="nav-link" href="/Work">
                                Work
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <br /><br />

                </div>
            </nav>
            {/* card */}
            <div class="main">

                <ul class="cards">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="images/papper.png" /></div>
                            <div class="card_content">
                                <h2 class="card_title">Shopping website Fully responsive web app</h2>
                                <p class="card_text">Shopping web app including all modren functionality responsive userinter face
                                </p>
                                <a >   <button class="btn card_btn" onClick={Omgdata} value={"1"}>Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="images/Screenshot (639).png" /></div>
                            <div class="card_content">
                                <h2 class="card_title">Online Pharma (pms)web dashborad</h2>
                                <p class="card_text">Farma managers system web app dashborad </p>
                                <a  target='__blank'>   <button class="btn card_btn" onClick={Omgdata} value={"2"}>Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="images/Screenshot (647).png" /></div>
                            <div class="card_content">
                                <h2 class="card_title">Online Lash web dashborad</h2>
                                <p class="card_text">App dashboard for buy and sell leashes online with fully customize dashboard for admin  </p>
                                <a target='__blank'>   <button class="btn card_btn" onClick={Omgdata} value={"3"}>Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="images/Screenshot (657).png" /></div>
                            <div class="card_content">
                                <h2 class="card_title">E-commerce website</h2>
                                <p class="card_text">Shopping web app Fully responsive web app for all screen sizes including payment getway</p>
                                <a target='__blank'>   <button class="btn card_btn" onClick={Omgdata} value={"4"}>Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="images/nomad.png" /></div>
                            <div class="card_content">
                                <h2 class="card_title">Social media app dashboard</h2>
                                <p class="card_text">Fully responsive design with customize admin panel including functionality with invoice </p>
                                <a target='__blank'>   <button class="btn card_btn" onClick={Omgdata} value={"5"}>Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="images/moto.png" /></div>
                            <div class="card_content">
                                <h2 class="card_title">Moto help</h2>
                                <p class="card_text">admin dashboard with all customize functionality for admin and good UI interface </p>
                                <a target='__blank'>   <button class="btn card_btn" onClick={Omgdata} value={"6"}>Read More</button></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            {/* footer */}
            <footer class="footer">
                <div class="icons">
                    <a href="#" className="socialicon"><i class="fab fa-facebook"></i></a>
                    <a href="#" className="socialicon"><i class="fab fa-linkedin"></i></a>
                    <a href="#" className="socialicon"><i class="fab fa-instagram"></i></a>
                    <a href="#" className="socialicon"><i class="fab fa-twitter"></i></a>
                    <p class="company-name">
                        ABC &copy; 2021, ALL Rights Reserved

                    </p>
                </div>
                <br />
            </footer>
        </div>
    )
}

export default Work
