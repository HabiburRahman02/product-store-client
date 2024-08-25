import ProductCard from "../../Shared/ProductCard/ProductCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useProduct from "../../../hooks/useProduct";

const BestProduct = () => {
    const [products] = useProduct();
    const bestProduct = products.filter(product => product.category === 'Best');

    return (
        <div>
            <SectionTitle heading='Out best products'></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    bestProduct.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default BestProduct;