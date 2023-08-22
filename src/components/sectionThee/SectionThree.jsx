import './sectionThree.css'
import bar from '../../assets/images/bar.svg';
import Wallet from '../../assets/images/Wallet.svg';
import Edit from '../../assets/images/Edit.svg';
import arrow from '../../assets/images/arrow.svg';
import girl from '../../assets/images/girl.svg';

const SectionThree = () => {

    return (

        <div className="container py-5">
            <h1 className='text-center pb-5'>Why our product are different</h1>
            <div className="row text">
                <div className="col-md-4">
                    <img src={bar} alt="image" />
                    <h4 className='pt-4'>Solve Problems Real Time</h4>
                    <p>Amet minim mollit non deserunt<br /> ullamco est sit aliqua dolor do<br /> amet sint.</p>
                    <span className='color'>Learn More</span> <img src={arrow} alt="arrow" />
                </div>
                <div className="col-md-4">
                    <img src={Wallet} alt="image" />
                    <h4 className='pt-4'>Secured & Safe Payments</h4>
                    <p>Amet minim mollit non deserunt<br /> ullamco est sit aliqua dolor do<br /> amet sint.</p>
                    <span className='color'>Learn More</span> <img src={arrow} alt="arrow" />

                </div>
                <div className="col-md-4">
                    <img src={Edit} alt="image" />
                    <h4 className='pt-4'>24/7 Customers Support</h4>
                    <p>Amet minim mollit non deserunt<br /> ullamco est sit aliqua dolor do<br /> amet sint.</p>
                    <span className='color'>Learn More</span> <img src={arrow} alt="arrow" />

                </div>
            </div>

            <div className='container py-5'>
                <div className='text-white position-relative bg card-width'>
                    <div className='pd'>
                        <h1>Satisfied Customers</h1><br />
                        <p>“Every detail has been taken care these team are<br /> realy amazing and talented! They can help me with<br /> fast and accurate solutions to all kinds of issues.<br /> Love it! Five stars for them.</p><br />
                        <span>Joeby Ragpa</span>
                        <p>Associate</p>
                    </div>
                    <img className='img-fluid position-absolute top-50 start-0 translate-middle' width={300} src={girl} alt="image" />
                </div>
            </div>

        </div>
    )
}

export default SectionThree;