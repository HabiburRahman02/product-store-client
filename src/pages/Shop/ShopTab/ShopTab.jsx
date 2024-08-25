import ItemCard from "../../../components/ItemCard/ItemCard";

const ShopTab = ({item}) => {
    return (
        <div className="grid md:grid-cols-4 gap-6">
            {
                item.map(item => <ItemCard
                    key={item._id}
                    item={item}
                ></ItemCard>)
            }
        </div>
    );
};

export default ShopTab;