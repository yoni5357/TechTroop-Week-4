import Item from "./Item";

function Home({store, shouldDiscount}){

    let items = store.map((item, index) => {
        let price = shouldDiscount ? item.price * (1 - item.discount) : item.price;
        return <Item key={index} item={item.item} price={price}/>
        })
    return (
        <>
        <h4>Store</h4>
        {items}
        </>
    )
}

export default Home;