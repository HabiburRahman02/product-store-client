
import { Link } from 'react-router-dom';
import errorImage from '../../assets/error/error-page.jpg'
const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <img src={errorImage} alt="" />
            </div>
            <Link className='flex justify-center mt-3' to='/'>
                <button className='btn btn-secondary'>
                    Back Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;