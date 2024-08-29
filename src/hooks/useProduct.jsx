import { useEffect, useState } from "react";

const useProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://product-store-server-jbqbdp21b-habibur-rahman-habibs-projects.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return [products]
};

export default useProduct;