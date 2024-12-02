import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';


const Work1 = () => {

    const location = useLocation();
console.log(location.state[0].img)
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
                            <a class="nav-link" href="/work">
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
            {/* slider */}

            <div class="container" id='workc'>
                <p style={{ textAlign: "justify" }}>
                    A React developer is responsible for the design and implementation of user interfaces (UIs) and UI components using React, a front-end JavaScript library. They develop and maintain UIs for web and mobile apps. They must have high-level expertise using React and a deep understanding of all stages of the software development life cycle.
                </p>

            </div>
            <br />
            <br />
            <div class="container" >
                <div class="row">
                    <div class="col">
                        <img src={location.state[0].img} className='sg' />
                    </div>
                    <div class="col">
                        <img src={location.state[2].img}className='sg' />
                    </div>
                </div>
                <br />   <br />
                <div class="row">
                    <div class="col">
                        <img src={location.state[3].img} className='sg' />
                    </div>
                    <div class="col">
                        <img src={location.state[4].img} className='sg' />
                    </div>
                    <div class="col">
                        <img src={location.state[1].img}className='sg' />
                    </div>
                </div>
            </div>
            <br/><br/>
            <div class="container">
                 <p style={{ textAlign: "justify" }}>
                 They write, test, debug, and implement code to meet user requirements. React developers need to have good communication skills as they work closely with project managers, developers, clients, testers, and web designers to create effective applications. They should have significant experience using JavaScript or Typescript, strong math skills, and a good working knowledge of debugging tools. 
            </p>
            <br/>
            <p style={{ textAlign: "justify" }}>
            A thorough understanding of React and its core principles is required for a React developer. They should also have a deep familiarity with front-end build pipelines and development tools, such as Babel and Webpack. React developers need the ability to understand business requirements and translate them into technical requirements. Exceptional time management skills and solid interpersonal skills are also essential for professionals in this role.
            </p>
            </div><br/><br/>
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

export default Work1
