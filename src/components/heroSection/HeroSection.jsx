import './heroSection.css';
import laptop from '../../assets/images/laptop.svg'
const Hero = () => {

    return (
        <div className='position-relative'>
            <img className='img-fluid' src={laptop} alt="image" />
            <div className='text-center text-white position-absolute top-50 start-50 translate-middle bg-text'>
                <h1 className=''>The best IT servicefor <br />your security</h1>
                <p>Hub IT allows your business and technology computers to store and<br /> manipulate big data in the digital world.</p>
                <button className='btn'>DISCOVER HUB</button> <span>Hotline: (733)865-5485</span>
            </div>
        </div>


    )

}

export default Hero;