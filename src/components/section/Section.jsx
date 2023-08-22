import './section.css';
import pcgroup from '../../assets/images/pcgroup.svg';

const Section = () => {

    return (

        <div className='container'>
            <div className='row py-5 m-5'>
                <div className='col-md-6'>
                    <img className='img-fluid' src={pcgroup} alt="image" />
                </div>

                <div className='col-md-6 pd ps-5'>
                    <span>Company’s vision</span>
                    <h1>IT solutions<br /> foryour business.</h1><br />
                    <p>Hub IT allows your business and technology<br /> computers to store, transmit, analyze, and<br /> manipulate big data in the digital world.</p>
                    <button className='btn'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Section;