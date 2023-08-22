import './sectionFour.css';

import laptop2 from '../../assets/images/laptop2.svg';
import calculator from '../../assets/images/calculator.svg';
import man from '../../assets/images/man.svg';
import alexender from '../../assets/images/alexender.svg';

const SectionFour = () => {

    return (

        <div className='container'>
            <h1 className="text-center pb-5">Latest News</h1>
            <div className="row ">
                <div className="col-md-4">
                    <img className='img-fluid' src={laptop2} alt="image" />
                    <p className='font-style pt-4'>Business Mistakes to Avoid When<br /> Starting a Business</p>
                    <div className='border-bottom pb-4'>
                        <img src={alexender} alt="image" /> <span><b className='color ms-2'>Alexander Samokhin</b> - July 06, 2018</span>
                    </div>
                </div>

                <div className="col-md-4 ">
                    <img className='img-fluid' src={calculator} alt="images" />
                    <p className='font-style pt-4'>Utilize these nine resources to help<br /> you take the stress out of preparing<br /> your taxes</p>
                    <div className='border-bottom pb-4'>
                        <img src={alexender} alt="image" /> <span><b className='color ms-2'>Alexander Samokhin</b> - July 18, 2018</span>
                    </div>
                </div>

                <div className="col-md-4 ">
                    <img className='img-fluid' src={man} alt="images" />
                    <p className='font-style pt-4'>Investment Update, Successful people<br /> ask better questions</p>
                    <div className='border-bottom pb-4'>
                        <img src={alexender} alt="image" /> <span><b className='color ms-2'>Alexander Samokhin</b> - July 21, 2018</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFour;