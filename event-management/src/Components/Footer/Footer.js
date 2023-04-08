import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      
    <footer className="footer Roboto-font">

    <div className="details">
                <img src={require("../../Assests/full-logo.png")} alt='full-logo'/>
                <h2 className='heading-2'>GLA University</h2>
                <p>17km Stone, NH-19,</p>
                <p>Mathura-Delhi Road</p>
                <p>P.O. Chaumuhan,</p>
                <p>Mathura-281 406 (U.P.) India</p>
    </div>
        
        <div className="item">

        

            <div className="item_list">
                <li className="item_list-m"><a href="#">Contact Us</a>
                </li> 
                <li className="item_list-m"><a href="#">About GLA</a></li> 
                <li className="item_list-m"><a href="#">ranking</a></li> 
            </div>

            <div className="item_list">
                <li className="item_list-m"><a href="#">Photo gallery</a></li> 
                <li className="item_list-m"><a href="#">Video gallery</a></li> 
                <li className="item_list-m"><a href="#">Media</a></li> 
            </div>
        </div>
      
    </footer>
    <div className="cpr">All &copy; rights reserved</div>

    </div>
  )
}

export default Footer
