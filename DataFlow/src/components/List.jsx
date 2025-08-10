import Contact from "./Contact"

export default function List({ names }){
    const renderList = () => {
        return names.map((item,index) => <Contact key={index} cname={item}/>)
    }
    return(
        <>
        {renderList()}
        </>
    )
}