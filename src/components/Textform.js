import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    //console.log("uppercase was clicked"+text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Upper Case","success:");
  }
  const handleLoClick =()=>{
    //console.log("uppercase was clicked"+text);
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lower Case","success:");
  }
   const handleClClick =()=>{
    //console.log("uppercase was clicked"+text);
    let newText= '';
    setText(newText);
    props.showAlert("Text Cleared","success")
  }

    //console.log("uppercase was clicked"+text);
   
    
  
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    
  }
  const handleCopy=()=>{
    console.log("i am happy");
  // var text=document.getElementById("myBox");
  // text.select();
    //text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text);
   // document.getSelection().removeAllRanges()
    props.showAlert("Text Copied","success")
  }
  const handleExtraSpaces =()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces got Removed","success");
  }
  
  const handleOnChange =(event)=>{
   // console.log("on changed");
    setText(event.target.value);
  }
    const [text,setText] = useState('');

   // setText('enter the text 2');
  return (
    <>
    <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.heading}</h1>
<div className="mb-3">
  {/*<label for="myBox" class="form-label"> Text Area</label>*/}
  <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor:props.mode==='dark'?'#13466e':'white',
  color: props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
</div>
 <button disabled={text.length===0}style ={{color: props.mode==='dark'?'white':'black'}} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>convert to uppercase</button>
 <button disabled={text.length===0} style ={{color: props.mode==='dark'?'white':'black'}}  className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>convert to lowercase</button>
 <button disabled={text.length===0}style ={{color: props.mode==='dark'?'white':'black'}} className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear Text</button>
 <button disabled={text.length===0} style ={{color: props.mode==='dark'?'white':'black'}} className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear Text</button>
 <button disabled={text.length===0} style ={{color: props.mode==='dark'?'white':'black'}} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
 <button disabled={text.length===0} style ={{color: props.mode==='dark'?'white':'black'}} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
 
 <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

    </div>
    <div className="container my-2 " style ={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\S+/).filter((element)=>{return element.length!==0}).length}words  and {text.length}character</p>
      <p>{0.008 * text.split("").length} Minutes Read</p>
      
      <h1>Preview</h1>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
  