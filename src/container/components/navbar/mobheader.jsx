import React, { useState } from "react";
import './mobheader.css';
import { Link, useNavigate } from "react-router-dom";
import cross from '/src/assets/cross-menu.svg';
import menu from '/src/assets/menu-alts.svg'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { main } from "motion/react-client";
import mainlogo from '/src/assets/mainlogo.png'



function MobHeader(params) {
  const navigate = useNavigate()
    const handleClick =()=>{
        navigate('/contact-us')
    }
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    // const toggleSidebar = () => {
    //     setSidebarOpen(!isSidebarOpen);
    // };

    // const closeSidebar = () => {
    //     setSidebarOpen(false);
    // };
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };
 
      const closeSidebar = () => {
        setSidebarOpen(true);
      };
  
      React.useEffect(() => {
        if (!isSidebarOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }, [isSidebarOpen]);
    return(
        <>
        <div className="mobheader-main">
            <div className="mobheader">
            <div className="mob-log">
                <Link to='/'> 
                       <img 
                       className="mobo-logo img-fluid" src={mainlogo}/>
                       </Link>
            </div>
            <div className="mob-hamburger" onClick={toggleSidebar}>
                <img src=
                {isSidebarOpen ? menu
                 : 
               cross
              }
                className={`img-fluid mob-menu-logo ${!isSidebarOpen ? 'open' : ''}`}/>
            </div>
              
            </div>
            <div className="mobheader-cross">
            <div className="mob-log">
                <img src={mainlogo}
                className="mob-logo img-fluid"/>
            </div>
            <div className="mob-hamburger">
               <div className="nav-logo-container">
                             <Link to='/'> 
                       <img 
                       className="mobo-logo img-fluid" src={mainlogo}/>
                       </Link>
                    </div>
            </div>
            </div>
            <div className={`mobsidebar ${isSidebarOpen ? '' : 'open'}`}>
            <div className="mobheader2">
            <div className="mob-log">
              <Link to='/'>  
              {/* <div className="nav-logo-container"> */}
                         <Link to='/'> 
                       <img 
                       className="mobo-logo img-fluid" src={mainlogo}/>
                       </Link>
              
              </Link>
            </div>
            <div className="mob-hamburger" onClick={toggleSidebar}>
            <img src=
            {isSidebarOpen ? menu
                 : 
                cross
              }
                className="mob-menu-logo img-fluid"  />
             
            </div>
               {/* <div className="mob-hamburger" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} className="mob-menu-logo img-fluid" />
                    </div> */}
            </div>
                <div className="mob-sidebar">
                <div className="mob-h-menu-items">
                <ul className="mob-menu-ul">
                <Link to='/' onClick={closeSidebar}> <li className='mob-m-items'>Expertise</li></Link>
                <Link to='/' onClick={closeSidebar}><li className='mob-m-items'>Training</li></Link>
                <Link to ='/' onClick={closeSidebar}><li className='mob-m-items'> Industries</li></Link>
                <Link to ='/' onClick={closeSidebar}><li className='mob-m-items'>Refrences</li></Link>
                <Link to ='/' onClick={closeSidebar}><li className='mob-m-items'>Insights</li></Link>
                 <Link to ='/' onClick={closeSidebar}><li className='mob-m-items'>Team</li></Link>

                <Link to ='/contact-us' onClick={closeSidebar}><li className='mob-m-items'>Contact Us</li></Link>
                                                
                                           
                  
                </ul>
            </div>
            <div className="common-infor">
            <h3 className="mob-info">Information</h3>
            <p className="mobinfo">
            sales@startup-advisory.com
                 
            </p>
            <p className="mobinfo">
+43 680 221 3753
             </p>
            <p className="mobinfo">
            Postgasse 8b, 1010 Vienna, Austria                  
            </p>

            </div>
            <div className="mob-s-icons">
           
                <h3 className="mob-follow">Follow Us:</h3>
                 <div className= 'm-social-icons'>
                                <div className="s-icon1">
                                <FaInstagram className="sicon" onClick={closeSidebar}/>
                                </div>
                                <div className="s-icon2">
                                <FaFacebook className="sicon" onClick={closeSidebar}/>
                                </div>
                                <div className="s-icon2">
                                <FaTwitter className="sicon" onClick={closeSidebar}/>
                                </div>
                                <div className="s-icon2">
                                <FaYoutube className="sicon" onClick={closeSidebar}/>
                                </div>
                               </div>
            </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default MobHeader