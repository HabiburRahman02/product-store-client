import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login/signup.jpg'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(result => {
                        console.log('user profile info updated', result);
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "User create successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from, { replace: true });
                    })

            })
            .catch(error => {
                console.log(error);
            })
    };

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
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h3 className="text-2xl text-center font-semibold">Sign up</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register('name', { required: true })} type="text" placeholder="Enter name" className="input input-bordered" required />
                            {errors.name && <span className='text-red-500'>Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input {...register('photoURL', { required: true })} type="text" placeholder="Enter photoURL" className="input input-bordered" required />
                            {errors.photoURL && <span className='text-red-500'>Photo url field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register('email', { required: true })} type="email" placeholder="Enter email" className="input input-bordered" required />
                            {errors.photo && <span className='text-red-500'>Email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register('password', { required: true, minLength: 6, maxLength: 20 })} type="password" placeholder="Enter password" className="input input-bordered" required />
                            {errors.photo && <span className='text-red-500'>Password field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign up" />
                        </div>
                        <p>Already have an account? go to <Link className='text-green-500' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;