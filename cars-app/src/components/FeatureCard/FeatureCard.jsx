import React, { useState } from 'react'
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import './FeatureCard.scss';


function Feature_Card(props) {
  const [cardPressed,setcardPressed]=useState(false);
  return (
    <div onMouseOver={()=>setcardPressed(true)} onMouseLeave={()=>setcardPressed(false)} className="feature w-25 rounded ms-1 border d-flex flex-column align-items-center justify-content-center" style={{backgroundColor:cardPressed?'#A162F7':'white'}}>
                <div className="feature_img" style={{backgroundColor:cardPressed?'#A66FF0':'rgba(255, 126, 134, 0.1)'}}><img src={props.img}/></div>
                <h2 className="feature_text mt-2" style={{color:cardPressed?'white':'black'}}>{props.name}</h2>
                
                <div className='mt-3' style={{ width: 112, height: 112 }}>
                <CircularProgressbar value={props.percentage} text={`${props.percentage}%`} circleRatio={0.75}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.62,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'butt',
                  // Text size
                  textSize: '22px',
                  // Colors
                  pathColor: cardPressed?'white':props.stroke,
                  textColor:cardPressed?'white':'black',
                  trailColor: cardPressed?'#B37EFC':'#F4F5F9',
                  backgroundColor: '#3e98c7',
                })} />
                </div>
    </div>
  )
}

export default Feature_Card;