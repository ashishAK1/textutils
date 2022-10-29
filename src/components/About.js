import React, {useState} from 'react'

const About = () => {
    // Dark mode Logic -> when the button is clicked , the color will set to white if its black and vide versa. Same with the background also i.e. if the bg is black, set it to white.
    // Also change the text of button to enable light/dark mode.

    // We'll use style css and button text as state variables

    // By default its light mode
    const [myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    });

    // By default the button text is "enable dark mode"
    const [buttonText, setButtonText] = useState("Enable Dark Mode");

    // On clicking button
    const darkModeButtonClick = () =>{
        // console.log("Clicked");
       // enable dark mode
       if(myStyle.color == 'black')
       {
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            });
            setButtonText("Enable Light Mode");
       }
    //    Enable light mode
       else
       {
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            });
            setButtonText("Enable Dark Mode");
       }
    }


  return (
    <div className='container' style={myStyle}>
        <h2>About US</h2>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

        <button type='button' className='btn btn-primary my-3' onClick={darkModeButtonClick}>{buttonText}</button>
    </div>
  )
}

export default About