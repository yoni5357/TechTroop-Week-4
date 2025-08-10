import Contact from "./Contact"

export default function List({ names, display }){
    const renderList = () => {
        return names.map((item,index) => <Contact key={index} cname={item} display={display}/>)
    }
    return(
        <>
        {renderList()}
        </>
    )
}