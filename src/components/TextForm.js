import React, {useState} from "react"


export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase Was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase.", "success");
    }
    const handleLoClick = () =>{
        console.log("Lowercase Was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase.", "success");
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Textbos has been Cleared.", "success");
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text has been copied.", "success");

    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Has been removed.", "success");
    }
    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");

    // text = "new text"; //Wrong way to change the state
    // setText("New Text"); // Correct way to change the state

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'dark'}} id="myBox" rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                {/* <button className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse Text</button> */}
                

            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the above textbox to preview it here."}</p>
            </div>
        </>
        
    )
    
}
