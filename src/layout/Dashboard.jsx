import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdReviews } from "react-icons/md";
import { AiFillAccountBook } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-sky-500 ">
                <ul className="menu fixed text-white text-xl">
                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/history'>
                            <FaCalendar></FaCalendar>
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                            <MdReviews></MdReviews>
                            Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/booking'>
                            <AiFillAccountBook></AiFillAccountBook>
                            My Booking
                        </NavLink>
                    </li>
                    <div className="divider divider-info"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop'>
                            <GiShoppingBag></GiShoppingBag>
                            Shop
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className="flex-1 p-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;