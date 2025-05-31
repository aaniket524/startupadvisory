import React from "react";
import './navbar.css';
import { Link, useNavigate } from "react-router-dom";
import MobHeader from "./mobheader";
import mainlogo from '/src/assets/mainlogo.png'
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/schedule-a-tour')
    }

    const listVariant={
        hidden: {opacity:0},
        visible:{opacity:1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
              },
            }
    }
    const itemVariant = {
        hidden: { opacity: 0, y: -10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            ease: "easeInOut"
          },
        },
      };
    return (
        <>
            <div className="main-navbar">
                <nav className="navbar">
                    
                    {/* Logo */}
                    <div className="nav-logo-container">
                       <Link to='/'> 
                       <motion.img 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 0.3, ease:"easeInOut" } }}
                        exit={{ opacity: 0, x: 20, transition: { duration: 0.3 } }}
                        whileHover={{
                            scale: 1.05,
                            rotate: 0,
                            color: "#f57c00",
                            letterSpacing: "1px",
                            transition: { type: "spring", stiffness: 200 }}}
                       className="nav-log img-fluid" src={mainlogo}/>
                       </Link>
                    </div>

                    {/* Center Nav Items */}
                    <div className="nav-item-container">
                        <motion.ul
                         className="nav-list"
                         variants={listVariant}
                         initial="hidden"
                         animate="visible">
                            {/* <li className="nav-items"><Link to='/'>Home</Link></li> */}
                            <motion.li className="nav-items" variants={itemVariant}><Link to='/'>Expertise </Link></motion.li>
                            <motion.li className="nav-items" variants={itemVariant}><Link to='/'>Training</Link></motion.li>
                            <motion.li className="nav-items" variants={itemVariant}><Link to='/'>Industries</Link></motion.li>
                            <motion.li className="nav-items" variants={itemVariant}><Link to='/'>Refrences</Link></motion.li>
                            <motion.li className="nav-items" variants={itemVariant}><Link to='/'>Insights</Link></motion.li>
                            <motion.li className="nav-items" variants={itemVariant}><Link to='/'>Team</Link></motion.li>

                            <motion.li className="nav-items" variants={itemVariant}><Link to='/contact-us'>Contacts</Link></motion.li>
                        </motion.ul>
                    </div>

                    {/* Button */}
                    <div className="nav-btn-container">
                    <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.3, ease:"easeInOut" } }}
                    exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
                    whileHover={{
                        scale: 1.05,
                        // color: "#f57c00",
                        letterSpacing: "1px",
                                        }}
                        className="nav-btn"
                    onClick={handleClick}
                    >
                    Digital Academy
                    </motion.button>

                    </div>

                </nav>
            </div>
            <MobHeader/>
        </>
    );
}

export default Navbar;
