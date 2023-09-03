import React, { useState } from 'react'
export default function Textform(props) {
    const changeUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const changeLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearText = () => {
        let newText = '';
        setText(newText)
    }
    const removeExtraSpaces = () => {
        // Use a regular expression to replace consecutive spaces with a single space
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);

    }
    const copyText = () => {
        let newText = document.getElementById('exampleFormControlTextarea1')
        newText.select()
        navigator.clipboard.writeText(newText.value);
    }
    // const copyText=()=>{
    //     const textArea = document.createElement("textarea");
    //     textArea.value = text;
    // }
    const handleOnchange = (event) => {
        setText(event.target.value)
        // color=red;
    }
    const [text, setText] = useState("");
    // setText("Kaise hai app");
    return (
        < >
            <div className={`form-group cotainer `} style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'#4848a8':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="10" >
                    </textarea>           
                <button className={`btn btn-${props.btnclr} my-3 mx-1`} onClick={changeUpper} >UpperCase</button>
                <button className={`btn btn-${props.btnclr} my-3 mx-1`} onClick={changeLower} >LowerCase</button>
                <button className={`btn btn-${props.btnclr} my-3 mx-1`} onClick={clearText} >ClearText</button>
                <button className={`btn btn-${props.btnclr} my-3 mx-1`} onClick={removeExtraSpaces} >SpaceRemove</button>
                <button className={`btn btn-${props.btnclr} my-3 mx-1`} onClick={copyText} >CopyText</button>

            </div>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h2  >Preview</h2>
                <p>Words {text.split(" ").length} and Characters {text.length}</p>
                <p>{text}</p>
            </div>

        </>
    )
}
