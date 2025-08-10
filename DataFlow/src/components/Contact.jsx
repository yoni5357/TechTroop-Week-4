

export default function Contact({cname, display}){
    return(
        <div onClick={() => display(cname)}>{cname}</div>
    )
}