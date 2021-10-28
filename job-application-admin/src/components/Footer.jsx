import instagram from "../Images/instagram.png"
import facebook from "../Images/facebook.png"
import twitter from "../Images/twitter.png"

const Footer = () => {
    return (
        <div className="footer">
            {/* <div className="footer-content"> */}
                <p>Follow us on Social Media!</p>
                <ul>
                    <li><a href=""><img src={instagram} alt="instagram" /></a></li>
                    <li><a href=""><img src={facebook} alt="facebook" /></a></li>
                    <li><a href=""><img src={twitter} alt="twitter" /></a></li>                
                </ul>
            {/* </div> */}
          
            {/* <div className="footer-bottom"> */}
                <p>copyright &copy;{new Date().getFullYear()} Job application management tool - All rights reserved</p>
            {/* </div> */}
            

        </div>
    )
}

export default Footer