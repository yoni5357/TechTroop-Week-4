import { useState } from "react";
import Conversation from "./Conversation";
import List from "./List";

function Exercise2(){

    const [data, setData] = useState({

        displayConversation: null,
        conversations: [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    });

    const getNames = () => {
        return data.conversations.map(convo => convo.with);
    }

    const displayConvo = (cname) => {
        const newData = {displayConversation: cname, conversations: [...data.conversations]};
        setData(newData);
    }

    const getConvo = (cname) => {
        return data.conversations.filter(item => item.with === cname).map(item => item.convo)[0];
    }

    return(
        <>
        {data.displayConversation ? 
        <Conversation convo={getConvo(data.displayConversation)} sender={data.displayConversation}/> : 
        <List names={getNames()} display={displayConvo}/>}
        </>
    )
}

export default Exercise2