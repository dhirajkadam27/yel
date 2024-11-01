import './privacy.css';

function Privacy() {

  return (
    <div className="privacypage">

      <div className='main'>


        <div className='nav'>
          <div className='logo'>Yel AI</div>
          <div className='links'>
            <a href='/services'>Services</a>
            <a href='/industries'>Industires</a>
            <a href='/about'>About</a>
          </div>
          <div className='btns'>
            <button>Log in</button>
            <button>Book a Demo</button>
          </div>
          <div className='menu'>&#9776;</div>
        </div>

      </div>

      <div className='Choose'>
        <div className='maintitle'>Privacy</div>

        <h1>Privacy Policy for Yel AI</h1>

        <p>At Yel AI, accessible from www.yellabs.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Yel AI and how we use it.</p>

        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Yel AI. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the <a href="https://seomagnifier.com/">Privacy Policy Generator</a>.</p>

        <h2>Consent</h2>

        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

        <h2>Information we collect</h2>

        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
        <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
        <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

        <h2>How we use your information</h2>

        <p>We use the information we collect in various ways, including to:</p>

        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2>Log Files</h2>

        <p>Yel AI follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>




        <h2>Third Party Privacy Policies</h2>

        <p>Yel AI's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>

        <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

        <p>Under the CCPA, among other rights, California consumers have the right to:</p>
        <p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
        <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
        <p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

        <h2>GDPR Data Protection Rights</h2>

        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
        <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
        <p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
        <p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
        <p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
        <p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

        <h2>Children's Information</h2>

        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

        <p>Yel AI does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

      </div>



      <div className='footer'>
        <div className='section'>
          <div onClick={() => { window.location.href = '/services' }} className='title'>Services</div>
          <div onClick={() => { window.location.href = '/services' }} className='link'>High-Quality Training Data</div>
          <div onClick={() => { window.location.href = '/services' }} className='link'>Custom Data Solutions</div>
          <div onClick={() => { window.location.href = '/services' }} className='link'>Managed Data Services</div>
        </div>
        <div className='section'>
          <div onClick={() => { window.location.href = '/industries' }} className='title'>Industries</div>
          <div onClick={() => { window.location.href = '/industries' }} className='link'>Healthcare</div>
          <div onClick={() => { window.location.href = '/industries' }} className='link'>Retail & E-commerce</div>
          <div onClick={() => { window.location.href = '/industries' }} className='link'>Automotive</div>
          <div onClick={() => { window.location.href = '/industries' }} className='link'>Technology & Innovation</div>
        </div>
        <div className='section'>
          <div className='title'>Company</div>
          <div onClick={() => { window.location.href = '/about' }} className='link'>About</div>
          <div onClick={() => { window.location.href = '/terms' }} className='link'>Terms</div>
          <div onClick={() => { window.location.href = '/privacy' }} className='link'>Privacy</div>
          <div onClick={() => { window.location.href = '/contact' }} className='link'>Contact us</div>
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

export default Privacy;
