import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const ItemCard = ({ item }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const { name, image, price, _id } = item;
    const cartItems = {
        itemId: _id,
        name,
        image,
        price,
        email: user?.email
    }

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart data to database
            axiosSecure.post('/carts', cartItems)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: `${name} is added to cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "Your are not login",
                text: "Please login!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login!!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //go to login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-green-600 font-semibold">${price}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={handleAddToCart}
                        className="btn bg-sky-200 w-full">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;