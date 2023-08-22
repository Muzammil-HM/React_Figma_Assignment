import screw from '../../assets/images/screw.svg';
import screw1 from '../../assets/images/screw1.svg';

const Card = () => {

    return (
        <div className="container">
            <div className="row pt-5 text-center">
                <div className="col-md-4">
                    <div className='border rounded py-3'>
                        <img className='pt-2' width={50} src={screw} alt="image" />
                        <h3 className='pt-3'>Core WordPress</h3>
                        <p>Hub IT allows your business and<br /> technology computers to store,<br /> analyze, and manipulate big data in<br /> the digital world.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className='border rounded py-3'>
                        <img className='pt-2' width={50} src={screw1} alt="image" />
                        <h3 className='pt-3'>Core WordPress</h3>
                        <p>Hub IT allows your business and<br /> technology computers to store,<br /> analyze, and manipulate big data in<br /> the digital world.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='border rounded py-3'>
                        <img className='pt-2' width={50} src={screw} alt="image" />
                        <h3 className='pt-3'>Core WordPress</h3>
                        <p>Hub IT allows your business and<br /> technology computers to store,<br /> analyze, and manipulate big data in<br /> the digital world.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;