import { useEffect, useState } from "react";
import "./Exercise2.css"

export default function Exercise2(){
    const [posts, setPosts] = useState([]);
    
    async function fetchPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error("response not ok")
        }
        const posts = response.json();
        return posts;
    }

    useEffect(() => {
        const getPosts = async function (){
            let newPosts = await fetchPosts();
            setPosts(newPosts)
        };
        getPosts()
    },[])

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 800) {
                document.querySelector('.main-container').style.flexDirection = 'column';
                document.querySelectorAll('.post-container').forEach(el => {
                    el.style.width = '100%';
                });
            } 
            else {
                document.querySelector('.main-container').style.flexDirection = 'row';
                document.querySelectorAll('.post-container').forEach(el => {
                    el.style.width = '20%';
                });
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderPosts = () => {
        return posts.map((post,index) =>{
            return(<div className="post-container" key={index}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>)
        } )
    }

    return(
        <div className="main-container">
            {renderPosts()}
        </div>
    )
}