import './Breadcrums.css';
import Arrow from '../Assets/breadcrum_arrow.png';

const Breadcrums = (props) => {

    const {product}=props;

    return (
        <div className='breadcrums'>
            HOME <img src={Arrow} alt="" /> SHOP <img src={Arrow} alt="" />{product.category} <img src={Arrow} alt="" /> {product.name}
        </div>
    )
}

export default Breadcrums