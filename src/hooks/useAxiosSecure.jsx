import axios from "axios";

const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: 'https://product-store-server-amber.vercel.app'
    })
    return axiosSecure;
};

export default useAxiosSecure;