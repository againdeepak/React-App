import React,{useState} from 'react'

export default function Textform(props) {
    const changeUpper=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const changeLower=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnchange=(event)=>{
        setText(event.target.value)
        // color=red;
    }
    const [text,setText]=useState("Please enter your text here...");
    // setText("Kaise hai app");
    return (
        <div>
            <div className="form-group">
                <h1>{props.heading}</h1>               
                <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="10"/>
                <button className='btn btn-primary my-3' onClick={changeUpper} >UpperCase</button>
                <button className='btn btn-primary my-3 mx-3' onClick={changeLower} >LowerCase</button>

            </div>
        </div>
    )
}
