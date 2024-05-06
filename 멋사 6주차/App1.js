import { useState , useEffect } from "react";

function Hello(){
    useEffect(()=>{
        console.log("i'm here")
        retrun () => console.log("destroyed :(")
    },[])
    return <h1>Hello</h1>
}

function App(){
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev)
    retrun(
        <div>
            {showing? <Hello />}
            <button onClick={onClick}>{showing ? "Hide":"Show"}</button>
        </div>
    )
}