import React,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Coverted to Uppercase","Success");
  }

  const handledownClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Coverted to Lowercase","Success");
  }

  const handleclearClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newtext = '';
    setText(newtext);
    props.showAlert("Texted Cleared !","Success");
  }

  const handlereverseClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newtext = text.split('').reverse().join('');;
    setText(newtext);
    props.showAlert("Texted Reversed!","Success");
  }
  const handlecapitalClick = () =>{
    let newtext = text.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
    setText(newtext);
    props.showAlert("First Letter Capitalized!","Success");
  }

  const handleCopy = () =>{
    // console.log(" I am copy");
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Texted Copied!","Success");
  }

  const handleextraspaces = () =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Extra Spaces get Cleared!","Success");
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML === "Speak"){
            window.speechSynthesis.cancel()
        }
    }
    props.showAlert("Texted Sound!","Success");
}

  const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value)
  }


  const [text,setText] = useState('');
  // setText("nwe  text");
  return (
    <>
    <div className="container" style={{color : props.mode === 'dark' ? 'white':'black'}}>
      <h1 className=" mb-4">{props.heading} </h1>
      <div className="mb-3">
      <textarea
        className="form-control"
        id="myBox"
        rows="8"
        value={text}
        onChange={handleOnChange}
        style={{
          backgroundColor: props.mode === "dark" ? "#13466e" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      />
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handledownClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handlecapitalClick}>Capitalizise first letter</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handlereverseClick}>Reverse Text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleextraspaces}>Extra space</button>
     <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>



    </div>

    <div className="container my-4" style={{  color: props.mode === "dark" ? "white" : "black"}}>
      <h1> Your text summary </h1>
      <p> {text.split(/\s+/).filter((element)=>{return element.length !==0}).length} word and {text.length} characters</p>
      <p>{ 0.008 * text.split(/\s+/).filter((element)=>{return element.length !==0}).length } Minutes to read </p>
      <p>{text.split(".").filter((element)=>{return element.length !==0}).length} sentence </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
