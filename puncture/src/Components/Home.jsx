import React from "react";
import List from "./List";
import { useState } from "react";
import Cart from "./Cart/Cart";


function Home() {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div>
            <div>
                <a href={Cart}>Cart</a>
            </div>
            <div>
                <h1>Home Page </h1>
                <h2>Punctured Online search</h2> 
                <input type="text" placeholder='Enter Location' onChange={inputHandler} />
                {/* <button onClick={inputHandler}>Search</button> */}
            </div>
            <br />
            <div>
                <List input={inputText} />
            </div>
        </div>
    )


}


export default Home;