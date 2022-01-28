import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {



    const handleUpClick=() =>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=() =>{
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleClrClick=() =>{
        let newText='';
        setText(newText)
    }

    const handleCpyClick=() =>{
        var text=document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const removeExtSpaces=() =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
       
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }


    const [text, setText] = useState('Enter Text here');
    // var mystyle={
    //     color:'white',
    //     backgroundColor:'black'
    // }

  return <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.head}</h1>
      <div className="mb-3">
      <textarea className="form-control"  value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  id="mybox" rows="12"></textarea>
      </div>
      <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCpyClick}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={removeExtSpaces}>Remove Extra Spaces</button>
      </div>

      <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>Your Text Summary Here</h1>
         <p>{text.split(" ").length} words and {text.length} character</p>
         <p>It will take {0.008*text.split(" ").length} miniutes to read</p>
         <h3>Preview</h3>
         <p>{text.length>0?text:'Enter something to get preview'}</p>

      </div>
      </>
}
