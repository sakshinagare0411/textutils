import React from 'react'

export default function About(props) {
    // const [myStyle ,setMyStyle]  = useState( {
    //     color: 'black',
    //     backgroundColor :'white'
     

    // })

    let myStyle = {
      color : props.mode === 'dark' ? 'white' : '#042743',
      backgroundColor : props.mode == 'dark' ? 'rgb(36 74 104)':'white',
      // border:'1spx solid',
      // borderColor:props.mode === 'dark' ? 'white' : '#042743',
    }

    // const [btntext,setbtntext] = useState("enable dark mode")

  //  const toggelstyle = () =>
  //   {
  //     if(myStyle.color ==='black')
  //       {
  //         setMyStyle({
  //           color: 'white',
  //           backgroundColor :'black',
  //           border: '1px solid white'
  //         })
  //         setbtntext("enable light mode")
  //       }
  //       else{
  //         setMyStyle({
  //           color: 'black',
  //       backgroundColor :'white'
  //         })
  //         setbtntext("enable dark mode")
  //       }
  //   }
  return (
    <div className='container' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className='my-3'>About us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}> 
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <b>Text Conversion</b>
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
      On our TextUtils website, you can effortlessly convert your text to uppercase, lowercase, or capitalize each word. This tool simplifies text formatting, making it easy to present your content exactly the way you want.
      </div>
    </div>
  </div>
  <div className="card"style={myStyle}>
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <b>  Word and Character Count</b>
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
      Our website provides a quick and accurate word and character count feature. This is essential for anyone needing to meet specific content limits, ensuring your writing stays within required guidelines, whether for social media, academic assignments, or professional documents.
      </div>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <b> Text Cleaning </b>
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
      Use our text cleaning feature to remove unnecessary spaces, line breaks, and special characters. This ensures your text is clean and professionally formatted, saving you time and improving the overall readability of your content.
      </div>
    </div>
  </div>
</div>
<div className='container'>
{/* <button type="button" onClick={toggelstyle}className="btn btn-primary my-3">{btntext}</button> */}
</div>
    </div>
  )
}
