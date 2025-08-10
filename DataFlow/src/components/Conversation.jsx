
export default function Conversation({convo, sender, handleBack}){

    const renderConversation = () => {
        return convo.map((line,index) => {
            const who = line.sender === "self" ? "Me" : sender;
            return <div key={index}><span className={sender}>{who}</span>: {line.text}</div>
        })
    }
    return(
        <div>
        {renderConversation()}
        <button onClick={handleBack} className="back">Back</button>
        </div>
    )
}