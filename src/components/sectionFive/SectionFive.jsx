import './sectionFive.css';
import building from '../../assets/images/building.svg';

const SectionFive = () => {

    return (

        <div className='py-5 position-relative'>
            <img className='img-fluid' src={building} alt="image" />

            <div className='text-center position-absolute top-50 start-50 translate-middle text-white build'>
                <h2>Ready to get started? Get your <br />Finance out of the way</h2>
                <p> If you deliver enough value, making money becomes the easy part. Why<br /> should you be stressful? Let us make this easier for you.</p>
                <button className='btn border border-0 rounded-pill'>Contact Us</button>
            </div>
        </div>
    )
}

export default SectionFive;