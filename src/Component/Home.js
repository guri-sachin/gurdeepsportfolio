import React, { useState,useEffect,useRef } from 'react';
import emailjs from '@emailjs/browser';
import cv from './guricv.pdf';

const Home = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4zxv3ii', 'template_ui45ktc', form.current, 'PfcGQRuSBkwrJZtLE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };



    return (
        <div>
            <div>
            <nav class="navbar navbar-expand-lg fixed-top w-100" id="l1">
                <a class="navbar-brand" href="#">
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
                            <a class="nav-link" href="#skill">
                                Skill
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#service">
                                Services
                            </a>
                        </li>{" "}
                        <li class="nav-item">
                            <a class="nav-link" href="/Work">
                                Work
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contacts">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <br /><br />

                </div>
            </nav>
            <br />
            {/* slider */}
            <div className="container">

                <div class="container">
                    <div class="row">
                        <div class="col">


                            <div class="animated-text">
                                I'm a <span id='headh2'>Full Stack Developer</span>
                            </div><br />
                            <p style={{ textAlign: "left" }}><span style={{ color: "black", fontSize: "30px" }}>G</span>urdeep Kumar  front-end and back-end web developer with a solid background in JavaScript frameworks like ReactJS and Node.js and I seamlessly bridge the gap between client-side and server-side development, delivering dynamic and responsive web applications</p>
                            <br />
                            <h2><b>Follow Us:</b></h2><br />
                            <div class="row">
                            <div class="col"> <a href="https://www.linkedin.com/in/gurdeep-kumar-8285ba235" className="socialicon"><i class="fab fa-linkedin"></i></a></div>
                                <div class="col"><a href="#" className="socialicon"><i class="fab fa-facebook"></i></a></div>
                               
                                <div class="col">   <a href="https://instagram.com/gurdeep_sachin?igshid=NTc4MTIwNjQ2YQ==" className="socialicon"><i class="fab fa-instagram"></i></a></div>
                                <div class="col"> <a href="https://twitter.com/GuRDeePsachin" className="socialicon"><i class="fab fa-twitter"></i></a></div>
                            </div>
                        </div>
                        <div class="col" id='g1'>
                            <img src="p2.gif" id="gif"></img>
                        </div>
                    </div>

                </div>
            </div>
            {/* banner */}
            <div className="">
                <div class="gfg" >
                    <img src="b1.jpg" id="banner" />
                    <h3 class="first-txt">
                        <span id="guri">I'm Gurdeep,<br />Full Stack Developer</span>
                        <br />
                        <div class="vn-red" style={{ textAlign: "center" }}>
                            <a href={cv} download={cv} target='_blank'>DOWNLOAD CV</a>
                        </div></h3>

                </div>
            </div>
            {/* about */}
            <div className="container" id="about">
                <div class="row" >

                    <div class="col heading">
                        {" "}
                        <h1>
                            <b id="labout">About</b>
                        </h1>
                    </div>

                </div>
                <div class="row">
                    <div class="col-7" style={{ textAlign: "justify" }}>
                        Hello! I'm GURDEEP, a full-stack web developer with TWO years of experience
                        and a BCA (Bachelor of Computer Applications) graduate. I have a passion for creating
                        dynamic and interactive websites that deliver seamless user experiences.
                        With my solid foundation in web development and a keen eye for design, I strive to build
                        modern and responsive websites that meet the needs of clients and users alike.
                        <br />
                        Throughout my journey as a web developer, I have gained expertise in a wide range of
                        technologies and frameworks, including <p class="font-weight-bold">HTML5, CSS3, JavaScript, React, Node.js, and MySQL, Bootstrap</p>
                        <p class=" font-weight-bold "> Good experiance working with github,aws,workbech,chrome extention</p>
                        <p>basic knowledge of (firebase,mongodb) </p>
                        I
                        enjoy working on both front-end and back-end development,
                        <br />
                        as it allows me to bring ideas
                        to life from conceptualization to implementation.
                        <br />


                    </div>
                    <div class="col-5" id="l4">
                        <img
                            src="https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5.png"
                            id="l3"
                        ></img>
                    </div>
                </div>
                <br />
            </div>
            {/* service */}
            <div className="container" id="service">
                <div class="row" >

                    <div class="col heading">
                        {" "}
                        <h1>
                            <b id="labout">Services</b>
                        </h1>

                    </div>
                    <p id='guri1'>     If you're looking for a passionate and skilled full-stack web developer who
                        can bring your ideas to life, I would love to connect with you. Let's work
                        together to create exceptional web experiences that make a lasting impression.</p>
                </div>
                <br /><br />
                <div class="row">
                    <div class="col-6" >

                        <div class="row">
                            <div class="col">
                                <img
                                    src="https://ionicframework.com/docs/icons/logo-react-icon.png"
                                    id="l7"
                                ></img>
                            </div>
                            <div class="col">
                                <img

                                    src="node.png"
                                    id="l7"
                                ></img>
                            </div>
                            <div class="col">
                                <img
                                    src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
                                    id="l7"
                                ></img>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Eo_circle_deep-purple_white_letter-b.svg/2048px-Eo_circle_deep-purple_white_letter-b.svg.png"
                                    id="l7"
                                ></img>
                            </div>
                            <div class="col">
                                <img
                                    src="https://www.citypng.com/public/uploads/preview/download-html5-round-logo-icon-png-116622246089xqzopcuvg.png"
                                    id="l7"
                                ></img>
                            </div>
                            <div class="col">
                                <img
                                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                                    id="l7"
                                ></img>
                            </div>


                        </div>
                        <div class="row">

                            <div class="col">
                                <img
                                    src="https://icons-for-free.com/iconfiles/png/512/svg+developer+firebase+google+programming+icon-1320183319887802192.png"
                                    id="l7"
                                ></img>
                            </div>
                            <div class="col">
                                <img
                                    src="https://www.svgrepo.com/download/331488/mongodb.svg"
                                    id="l7"
                                ></img>
                            </div>
                            <div class="col">
                                <img
                                    src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                                    id="l7"
                                ></img>
                            </div>


                        </div>

                    </div>
                    <div class="col-6" style={{ textAlign: "justify" }} >

                        <div >
                            <p>✔ Shopping Web App. </p>
                            <p>✔ Delivery Apps.</p>
                            <p>✔ Billing Web App,</p>
                            <p>✔ Hospital management,School management</p>

                            <p>✔ Responsive Portfolio,Landing pages,Chat Bots ,Ai integration</p>
                            <p>✔ Google Apis, AWS Server </p>
                            <p>With expertise in database management, API integration, and performance
                                optimization, I ensure your app's back-end is efficient, scalable, and
                                capable of handling complex operations.</p>

                        </div>
                    </div>
                </div>
                <br />
            </div>
            {/* skill */}
            <div className="container" id="skill">
                <div class="row" >

                    <div class="col heading">
                        {" "}
                        <h1>
                            <b id="labout">Skills</b>
                        </h1>
                    </div>

                </div>
                <div class="row">
                    <div class="col-6" style={{ textAlign: "justify" }}>
                        "With proficiency in modern frameworks, such as React and Node.js,
                        I seamlessly bridge the gap between client-side and server-side development,
                        delivering dynamic and responsive web applications.
                        <br />
                        <p class=" font-weight-bold "> Good experiance working with github,aws,workbech,crome extention</p>
                        <p>basic knowledge of (firebase,mongodb) </p>
                        <br></br>
                        <div>
                            <div class="float-md-left">
                                <ul class=" font-weight-bold ">
                                    <tr>✔ ReactJs</tr>
                                    <tr>✔ Nodjs</tr>
                                    <tr>✔ expressJS</tr>
                                    <tr>✔ Bootstrap</tr>


                                </ul>
                            </div>
                            <div class="float-md-right">
                                <ul class=" font-weight-bold ">
                                    <tr>✔ JavaScript</tr>
                                    <tr>✔ HTML</tr>
                                    <tr>✔ CSS</tr>
                                    <tr>✔ MySQL</tr>

                                </ul>
                            </div>
                        </div>


                    </div>
                    <div class="col-6" >
                        <div class="progress-section" data-aos="fade-left" data-aos-once="true">
                            <div class="task-progress">
                                <p>ReactJS
                                    <span>90%</span>
                                </p>
                                <progress class="progress progress1" max="100" value="90"></progress>
                            </div>
                            <div class="task-progress">
                                <p>NodeJS
                                    <span>95%</span>
                                </p>
                                <progress class="progress progress2" max="100" value="95"></progress>
                            </div>
                            <div class="task-progress">
                                <p>MySQL
                                    <span>96%</span>
                                </p>
                                <progress class="progress progress3" max="100" value="96"></progress>
                            </div>
                            <div class="task-progress">
                                <p>Bootstrap
                                    <span>90%</span>
                                </p>
                                <progress class="progress progress4" max="100" value="90"></progress>
                            </div>
                        </div>
                        {/* <br />
                        <div class="progress-bar--wrap progress-bar--green">
                            <span class="progress-bar--counter" >React&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><div class="progress-bar">
                                Progress
                                <div
                                    class="progress-bar--inner"
                                    style={{ width: "90%" }}
                                ></div>
                            </div>
                            <span class="progress-bar--counter">90%</span>
                        </div>

                        <div class="progress-bar--wrap progress-bar--blue">
                            <span class="progress-bar--counter" >Node&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>  <div class="progress-bar">
                                Progress
                                <div
                                    class="progress-bar--inner"
                                    style={{ width: "95%" }}
                                ></div>
                            </div>
                            <span class="progress-bar--counter">95%</span>
                        </div>

                        <div class="progress-bar--wrap progress-bar--red">
                            <span class="progress-bar--counter" >mySql&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <div class="progress-bar">
                                Progress
                                <div
                                    class="progress-bar--inner"
                                    style={{ width: "96%" }}
                                ></div>
                            </div>
                            <span class="progress-bar--counter">96%</span>
                        </div>

                        <div class="progress-bar--wrap progress-bar--yellow">
                            <span class="progress-bar--counter" >Bootstrap&nbsp;</span>  <div class="progress-bar">
                                Progress
                                <div
                                    class="progress-bar--inner"
                                    style={{ width: "90%" }}
                                ></div>
                            </div>
                            <span class="progress-bar--counter">90%</span>
                        </div> */}
                    </div>

                </div>
                <br />
            </div>
            {/* contact */}
            <div className="container" id="contacts">
                <div class="row" >

                    <div class="col heading">
                        {" "}
                        <h1>
                            <b id="labout">Contact</b>
                        </h1>
                    </div>

                </div>

                <div class="contact" id="contact">
                    <div class="containers">
                        <p>if you have any question, please contact us:)</p>
                        <form ref={form} onSubmit={sendEmail}> 
                            

                        <input
                              type="text"
                              class="text-field-name-1"
                              placeholder=" Enter your name"
                              name="from_name"
                          />
                          <input
                              type="text"
                              class="text-field-email-1"
                              placeholder="Enter your email"
                              name="from_email"

                          />
                        
                
               
                          <textarea
                              placeholder="Message:"
                              class="text-field-area-1"
                              name="message"
                          >

                          </textarea>

                  <center> <button className='btn btn-primary' type="submit" id="jj" value="Send">Submit</button></center>
                        </form>
                    </div>

                </div>
                <br />
            </div>
            {/* footer */}
            <footer class="footer">
                <div class="icons">
                    <a href="#" className="socialicon"><i class="fab fa-facebook"></i></a>
                    <a href="#" className="socialicon"><i class="fab fa-linkedin"></i></a>
                    <a href="#" className="socialicon"><i class="fab fa-instagram"></i></a>
                    <a href="#" className="socialicon"><i class="fab fa-twitter"></i></a>
                    <p class="company-name">
                        Gurdeep &copy; 2023, ALL Rights Reserved

                    </p>
                </div>
                <br />
            </footer>
        </div>
        <form>
                          
                       
                    
                
              </form>
            {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text"  name="from_name" />
      <label>Email</label>
      <input type="email"  name="from_email" />
      <label>Sub</label>
      <input type="sub"  name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit"  value="Send" />
    </form> */}
  
        </div>
    )
}

export default Home
