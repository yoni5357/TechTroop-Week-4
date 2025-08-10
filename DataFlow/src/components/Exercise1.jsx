import { useState } from "react";
import './Exercise1.css'

function Exercise1(){
    const [data, setData] = useState({
      images: [
        "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
      currentImg: 0
    })

    const shiftImageBack = () => {
        const newData ={images: [...data.images],currentImg: data.currentImg};
        newData.currentImg = newData.currentImg > 0 ? newData.currentImg-1 : 0;
        setData(newData); 
    }

    const shiftImageForward = () => {
        const newData = {images: [...data.images],currentImg: data.currentImg};
        newData.currentImg = newData.currentImg < newData.images.length - 1 ? newData.currentImg+1 : newData.images.length - 1;
        setData(newData);
    }

    return(
        <div className="container">
            <img src={data.images[data.currentImg]} />
            <button className="back" onClick={shiftImageBack}>Previous</button>
            <button className="forward" onClick={shiftImageForward}>Next</button>
        </div>
    )
}

export default Exercise1