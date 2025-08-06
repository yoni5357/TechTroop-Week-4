import Item from "./Item";

function Home({store}){
    let items = store.map((item, index) => <Item key={index} item={item.item} price={item.price}/>)
    return (
        <>
        Store
        {items}
        </>
    )
}

export default Home;