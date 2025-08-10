export default function List({ names }){
    const renderList = () => {
        return names.map((item,index) => <div key={index}>{item}</div>)
    }
    return(
        <>
        {renderList()}
        </>
    )
}