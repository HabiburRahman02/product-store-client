import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCart();
    console.log(cart.length)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log out success",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/product'>Our Product</Link></li>
        <li><Link to='/shop'>Our Shop</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
    </>
    return (
        <div className="navbar fixed z-30 mx-auto max-w-7xl bg-sky-900 bg-opacity-25">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-400 text-white rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl text-white">E-commerce</Link>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu text-white menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/dashboard/cart'>
                    <button className="flex items-center mr-2  text-white">
                        <FaShoppingCart className="text-2xl text-white"></FaShoppingCart>
                        +{cart.length}
                    </button>
                </Link>
                {user ?
                    <>
                        <img className="h-12 w-12 rounded-full mr-2" src={user?.photoURL} alt="" />
                        <button
                            onClick={handleLogOut}
                            className="btn">Log out
                        </button>
                    </> :
                    <>
                        <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>
                    </>}
            </div>
        </div>
    );
};

export default Navbar;