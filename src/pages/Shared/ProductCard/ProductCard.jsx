import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const { name, image, price } = product
    return (
        <div className="flex justify-between items-center bg-slate-200 p-16">
            <img className="h-24 rounded-lg" src={image} alt="" />
            <div className="ml-4">
                <p className="text-xl">{name}</p>
                <p className="text-green-700">${price}</p>
            </div>
            <Link to='/shop'>
                <button className="btn">Buy now</button>
            </Link>
        </div>
    );
};

export default ProductCard;