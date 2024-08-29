import axios from "axios";

const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: 'https://product-store-server-jbqbdp21b-habibur-rahman-habibs-projects.vercel.app'
    })
    return axiosSecure;
};

export default useAxiosSecure;