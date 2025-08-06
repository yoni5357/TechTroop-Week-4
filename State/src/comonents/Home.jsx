import Item from "./Item";

function Home({store}){
    let items = store.map((item, index) => <Item key={index} item={item.item} price={item.price}/>)
    return (
        <>
        <h4>Store</h4>
        {items}
        </>
    )
}

export default Home;