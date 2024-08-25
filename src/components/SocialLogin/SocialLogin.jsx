import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const { LoginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        LoginWithGoogle()
            .then(result => {
                console.log(result)
                navigate('/')

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <button
                onClick={handleGoogleLogin}
                className="bg-amber-600 py-6 w-full flex justify-evenly text-white">
                    <FaGoogle className="text-xl"></FaGoogle>
                    Continue With Google</button>
        </div>
    );
};

export default SocialLogin;