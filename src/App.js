import { useEffect, useRef } from 'react';
import './App.css';
import Nav from './sections/navbar';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
      if (videoRef.current) {
          videoRef.current.playbackRate = 0.5; // Adjust this value to control speed (0.5 for half-speed)
      }
  }, []);
  return (
    <div className="app">

      <div className='main'>
      <video ref={videoRef} autoPlay loop muted className="bg">
                <source src="./bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        <Nav />

        <div className='hero'>
          <div className='title'>Build Better AI <br /> with Better Data</div>
          <div className='subtitle'>We transform messy data into high-precision AI training sets. Helping AI companies build better models faster.</div>
          <div className='btns'>
            <button>Build AI</button>
            <button>Book a Demo</button>
          </div>
        </div>

      </div>


      <div className='why'>
        <div className='question'>Why Yel AI?</div>
        <div className='shortanswer'>Elevate Your AI with Data You Can Trust</div>
        <div className='answer'>Yel AI provides specialized, clean, and precisely labeled datasets to power machine learning models across industries. Every dataset is crafted to meet the highest standards, ensuring the data you receive is reliable, relevant, and ready to drive exceptional outcomes.</div>
      </div>


      <div id="Services" className='services'>
        <div className='maintitle'>Our Services</div>
        <div className='boxes'>
          <div className='box'>
            <div className='title'>High-Quality <br />Training Data</div>
            <div className='subtitle'>With expertly annotated datasets across industries, we offer the data you need to train and optimize your AI models for the real world.</div>
          </div>
          <div className='box'>
            <div className='title'>Custom Data <br />Solutions</div>
            <div className='subtitle'>Not finding the exact data you need? Our custom data service allows for tailored solutions to meet specific project requirements.</div>
          </div>
          <div className='box'>
            <div className='title'>Managed <br />Data Services</div>
            <div className='subtitle'>From data collection to annotation and quality assurance, our end-to-end managed data services are designed to support you at every stage.</div>
          </div>
          <div className='nobox'>
          </div>
        </div>
      </div>


      <div className='works'>
        <div className='maintitle'>How It Works</div>
        <div className='box'>
          <div className='number'>1</div>
          <div className='information'>
            <div className='title'>Understand Your <br />Needs</div>
            <div className='subinformation'>We start by understanding your goals and requirements, <br />ensuring every dataset aligns with your project's unique needs.</div>
          </div>
        </div>
        <div className='box'>
          <div className='number'>2</div>
          <div className='information'>
            <div className='title'>Curate & Annotate</div>
            <div className='subinformation'>Our expert team and cutting-edge technology curate and meticulously annotate the data, <br />delivering accuracy that exceeds industry standards.</div>
          </div>
        </div>
        <div className='box'>
          <div className='number'>3</div>
          <div className='information'>
            <div className='title'>Deliver & Optimize</div>
            <div className='subinformation'>Get data that’s not just labeled but optimized for high-performance AI solutions,<br />ready to integrate seamlessly with your models.</div>
          </div>
        </div>
      </div>

      <div id="Industries" className='industries'>
        <div className='maintitle'>Industries We Serve</div>
        <div className='boxes'>
          <div className='box'>
            <div className='title'>Healthcare</div>
          </div>
          <div className='box'>
            <div className='title'>Finance</div>
          </div>
          <div className='box'>
            <div className='title'>Retail & E-commerce</div>
          </div>
          <div className='box'>
            <div className='title'>Automotive</div>
          </div>
          <div className='box'>
            <div className='title'>Technology & Innovation</div>
          </div>
          <div className='box'>
            <div className='title'>And more…</div>
          </div>
        </div>
      </div>

      <div className='Choose'>
        <div className='question'>Why Choose Yel AI?</div>
        <div className='title'>Precision-Crafted Datasets</div>
        <div className='description'>Our expert team ensures each dataset is tailored to your specifications, every time.</div>
        <div className='title'>Industry Expertise</div>
        <div className='description'>We have extensive experience across industries, providing the right data for any sector.</div>
        <div className='title'>End-to-End Support</div>
        <div className='description'>From data curation to integration, we're with you at every step.</div>
      </div>


      <div className='started'>
        <div className='title'>Get Started with Yel AI</div>
        <div className='subtitle'>Let's build something extraordinary. Contact us to explore how Yel AI can elevate your AI project to new heights.</div>
        <div className='btns'>
          <button>Build AI</button>
          <button>Book a Demo</button>
        </div>
      </div>

      <div className='footer'>
        <div className='section'>
          <div onClick={()=>{window.location.href='/services'}} className='title'>Services</div>
          <div onClick={()=>{window.location.href='/services'}} className='link'>High-Quality Training Data</div>
          <div onClick={()=>{window.location.href='/services'}} className='link'>Custom Data Solutions</div>
          <div onClick={()=>{window.location.href='/services'}} className='link'>Managed Data Services</div>
        </div>
        <div className='section'>
          <div onClick={()=>{window.location.href='/industries'}} className='title'>Industries</div>
          <div onClick={()=>{window.location.href='/industries'}} className='link'>Healthcare</div>
          <div onClick={()=>{window.location.href='/industries'}} className='link'>Retail & E-commerce</div>
          <div onClick={()=>{window.location.href='/industries'}} className='link'>Automotive</div>
          <div onClick={()=>{window.location.href='/industries'}} className='link'>Technology & Innovation</div>
        </div>
        <div className='section'>
          <div className='title'>Company</div>
          <div onClick={()=>{window.location.href='/about'}} className='link'>About</div>
          <div onClick={()=>{window.location.href='/terms'}} className='link'>Terms</div>
          <div onClick={()=>{window.location.href='/privacy'}} className='link'>Privacy</div>
          <div onClick={()=>{window.location.href='/contact'}} className='link'>Contact us</div>
        </div>
        <div className='section'>
          <div className='title'>Follow  Us</div>
          <div className="social">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="img" class="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white"><path d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.45-6.231h.002zm-1.16 17.52h1.832L7.045 4.126H5.078L17.044 19.77z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white"><path d="M24.147 12.073C24.147 5.405 18.74 0 12.073 0S0 5.405 0 12.073C0 18.1 4.415 23.094 10.187 24v-8.437H7.12v-3.49h3.066v-2.66c0-3.025 1.802-4.697 4.56-4.697 1.32 0 2.703.236 2.703.236v2.971h-1.523c-1.5 0-1.967.93-1.967 1.887v2.263h3.348l-.535 3.49H13.96V24c5.772-.906 10.187-5.9 10.187-11.927z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white"><path d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0zM7.12 20.452H3.558V8.995H7.12v11.457zM5.34 7.434a2.064 2.064 0 110-4.125 2.063 2.063 0 010 4.125zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286z"></path></svg>
          </div>
        </div>
      </div>

      <div className='copyright'>
        <div className='cc'>Copyright © 2024 Yel AI, Inc. All rights reserved.</div>
      </div>

    </div>
  );
}

export default App;
