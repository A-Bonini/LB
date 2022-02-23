import React, { useState, useEffect } from "react";

const Loading = () => {
    const [load,setLoad] = useState();
    const [text, setText] = useState("...")

    useEffect(() => {
        Loading();
    }, []);

    const Loading = () => {
        let interval;
        let clear = clearInterval(interval);
        let numText = text.length;
        let indexChar = 0;
        interval = setInterval(() => {
            if(indexChar < numText){
                indexChar++;
                setLoad(text.substring(0,indexChar));
            } else {
                indexChar = 0;
                setLoad(text.substring(0,indexChar));
            }
        }, 500);
    }

    return(
        <div className="loading">
            <h2>Carregando{load}</h2>
        </div>
    )
}

export default Loading;