import './sectionOne.css';
import lapb from '../../assets/images/lapb.svg';
import lapb1 from '../../assets/images/lapb1.svg';

const SectionOne = () => {

    return (

        <div>

            <div className="container text-center">
                <h1>IT solutions foryour business.</h1>
                <p>Hub IT allows your business and technology computers to store, transmit,<br /> analyze,and manipulate big data in the digital world.</p>
            </div>

            <div className='container'>
                <div className='row py-5'>
                    <div className='col-md-4'>
                        <div className='position-relative'>
                            <img className='img-fluid' src={lapb} alt="image" />

                            <span className='bg1 p-3 px-5 position-absolute top-100 start-50 translate-middle '>It Security</span>
                        </div>
                        <p className='pt-5 ps-5' >
                            Hub IT allows your business and <br />technology computers to store, <br />transmit, analyze, and manipulate<br /> big data in the digital world.
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <div className='position-relative'>
                            <img className='img-fluid' src={lapb1} alt="image" />
                            <span className='bg1 p-3 px-4 position-absolute top-100 start-50 translate-middle '>Mobile Data</span>
                        </div>
                        <p className='pt-5 ps-5'>
                            Hub IT allows your business and<br /> technology computers to store,<br /> transmit, analyze, and manipulate<br /> big data in the digital world.
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <div className='position-relative'>
                            <img className='img-fluid' src={lapb1} alt="image" />
                            <span className='bg1 p-3 px-4 position-absolute top-100 start-50 translate-middle '>For Companies</span>
                        </div>
                        <p className='pt-5 ps-5'>
                            Hub IT allows your business and <br />technology computers to store,<br /> transmit, analyze, and manipulate<br /> big data in the digital world.
                        </p>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default SectionOne;