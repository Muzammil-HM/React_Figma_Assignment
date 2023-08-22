import './footer.css';

import logo from '../../assets/images/logo.svg';
import twitter from '../../assets/images/twitter.svg';
import facebook from '../../assets/images/facebook.svg';
import g from '../../assets/images/g.svg';

const Footer = () => {

    return (

        <div className='container footer-text'>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='img-fluid' src={logo} alt="image" />
                    <div className='pt-5'>
                        <img className='img-fluid' src={twitter} alt="image" />
                        <img className='img-fluid' src={facebook} alt="image" />
                        <img className='img-fluid' src={g} alt="image" />
                    </div>

                </div>
                <div className='col-md-3'>
                    <h3>Solution</h3>
                    <p>Finance Strategy<br />
                        Advertising<br />
                        SMM<br />
                        SEO<br />
                        Google AdWords

                    </p>
                </div>
                <div className='col-md-3'>
                    <h3>Company</h3>
                    <p>8910 University Center Lane<br />
                        Suite 620
                        San Diego, CA 92102
                        Phone 858-490-6910<br />
                        Fax 858-490-6985
                    </p>

                </div>
            </div>
           
            <div className='pb-5 list'>
                <span>About &nbsp;  Services &nbsp;  Pricing &nbsp;  Blog &nbsp;  Contact</span> <span className='float-end'>© 2018 Casumi, Made by DeoThemes.</span>
            </div>

        </div>
    )
}

export default Footer;