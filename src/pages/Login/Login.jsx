import { Link, useLocation, useNavigate } from "react-router-dom";

import loginImg from '../../assets/login/login.jpg'
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login user success",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-2/3 h-1/2 mx-auto' src={loginImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Link className="text-end text-red-500" to='/'>
                        <button className="btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </Link>
                    <form onSubmit={handleLogin} className="card-body">
                        <h3 className="text-2xl text-center font-semibold">Login</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="py-8 input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="py-8 input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className=" bg-cyan-600 text-white py-6" type="submit" value="Login" />
                        </div>
                        <p>Are you new? go to <Link className='text-green-500' to='/signup'>Sign up</Link></p>
                        <div className="divider">Social Login</div>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;