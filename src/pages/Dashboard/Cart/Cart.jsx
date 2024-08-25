import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { RiDeleteBin7Fill } from "react-icons/ri";


const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div className="shadow-2xl p-12">
            <SectionTitle heading='Cart items'></SectionTitle>
            <div className="flex justify-around bg-sky-400 text-white items-center py-2">
                <h3 className="text-2xl">Items: {cart.length}</h3>
                <h3 className="text-2xl">Total Price: ${totalPrice}</h3>
                <button className="btn">Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-24 h-24 rounded-2xl">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button className="text-2xl text-red-500">
                                            <RiDeleteBin7Fill></RiDeleteBin7Fill>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;