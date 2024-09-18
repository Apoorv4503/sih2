import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/fontawesome.css';
import './assets/css/templatemo-edu-meeting.css';
import './assets/css/owl.css';
import './assets/css/lightbox.css';

const App = () => {
  return (
    <div>
      {/* Sub Header */}
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8">
              <div className="left-content">
                <p>This is an educational <em>HTML CSS</em> template by TemplateMo website.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="right-icons">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Area */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">PATHSHALA</a>
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li><a href="meetings.html">Meetings</a></li>
                  <li className="scroll-to-section"><a href="#apply">Apply Now</a></li>
                  <li className="has-sub">
                    <a href="javascript:void(0)">Pages</a>
                    <ul className="sub-menu">
                      <li><a href="meetings.html">Upcoming Meetings</a></li>
                      <li><a href="meeting-details.html">Meeting Details</a></li>
                    </ul>
                  </li>
                  <li className="scroll-to-section"><a href="#courses">Courses</a></li>
                  <li className="scroll-to-section"><a href="#contact">Contact Us</a></li>
                </ul>
                <a className="menu-trigger"><span>Menu</span></a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Banner Area */}
      <section className="section main-banner" id="top" data-section="section1">
        <video autoPlay muted loop id="bg-video">
          <source src="assets/images/course-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
                  <h6>Hello Students</h6>
                  <h2>Welcome to PATHSHALA</h2>
                  <p>Background: Rural areas in India often suffer from inadequate educational resources...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
