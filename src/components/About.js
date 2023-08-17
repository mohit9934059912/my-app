import React  from 'react'

export default function About(props) {
   //const [myStyle , setMyStyle]= useState({
       // color:'black',
       // backgroundColor:'white',
       // border:'1px solid white' 
   // })
   let myStyle = {
     color:props.mode==='dark'?'white':'black',
     backgroundColor:props.mode==='dark'?'#13466e':'white',
     border:'2px solid',
     backgroundcolor:props.mode==='dark'?'#13466e':'white'
   }
   
    
  return (

    <div className="container" >
        <h2 className="my-2">About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
      TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count character count .
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to Use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
       TextUtils is a free character counter tool that provides instant character count and word count staticstics for a given text. TextUtils reports
       the number of words and character. Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
      this word counter software works in any web browser such as chrome,firefox,internet explorer,safari opera.It suits to count characters in facebook
      ,blog,excel document,pdf document,essays,etc.
      </div>
    </div>
  </div>
</div>
{/*<div className="container my-3">
<button onClick={myStyle} type="button" className="btn btn-primary">{myStyle}</button>
</div>*/}

  </div>
  )
}
