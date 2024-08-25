import Banner from "../../Shared/Banner/Banner";
import BestProduct from "../BestProduct/BestProduct";
import PopularProduct from "../PopularProduct/PopularProduct";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularProduct></PopularProduct>
           <BestProduct></BestProduct>
           <Review></Review>
        </div>
    );
};

export default Home;