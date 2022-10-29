import React, { useState } from 'react'

const TextForm = (props) => {

    // Use state to change text
    // const [text, setText] = useState("Default text");
    const [text, setText] = useState("");

    // On click 
    // 1. Upper Case
    const handleUpClick = () => {
        // console.log("upper case clicked");

        // logic -> after clicking the Uppercase button, the text should get updated to Upper Case
        let temp = text.toUpperCase();
        setText(temp);
        props.showAlert('Converted to UpperCase',"success");
    }

    // 2. Lower Case
    const handleLowClick = () => {
        // console.log("Lower case clicked");

        // logic -> after clicking the Lowercase button, the text should get updated to Lower Case
        let temp = text.toLowerCase();
        setText(temp);
        props.showAlert('Converted to LowerCase',"success");
    }

    // 3. Clear Text
    const handleClearTextClick = () =>{
        // console.log("Lower case clicked");

        // logic -> after clicking the Lowercase button, the text should get updated to Lower Case
        let temp = "";
        setText(temp);
        props.showAlert('Text Cleared',"success");
    }

    // 4. copy text
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied to Clipboard',"success");
    }

    // 5. remove whitespaces
    const handleExtraSpaces = () => {
        // using regex
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces removed',"success");
    }

    // on change in text area
    // on using onChange, we get event by default
    const handleOnChange = (event) => {
        // console.log("On chnage");

        // logic -> on changing text in the text area, the text area should show the updated text
        setText(event.target.value);

    }

    // count no of words
    let countNoOfWords = () => {
        return text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length
    }

    return (
        <>
            <div className='container my-3' style={props.Mode === 'light'?{
                        color:'black'
                    }:{
                        color:'white'
                    }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* value is the text in the text area */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={props.Mode === 'light'?{
                        backgroundColor:'white'
                    }:{
                        backgroundColor:'#101922',
                        color:'white'
                    }} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClearTextClick}>Clear Text</button>
            </div>

            {/* Text Summary -> words, characters, time to read, summary of text */}
            <div className="container my-3" style={props.Mode === 'light'?{
                        color:'black'
                    }:{
                        color:'white'
                    }}>
                <h2>Text Summary</h2>
                <p>{countNoOfWords()} words | {text.trim().length} characters | {countNoOfWords() * 0.008} Min Read</p>
                <h3>Text Preview</h3>
                <p>{text===''?"Nothing to Preview":text}</p>
            </div>
        </>

    )
}

export default TextForm