import React from 'react'
import { ReactComponent as Img1Logo } from '../svgs/img1.svg'
import img2 from '../images/giza.jpg'
import img3 from '../images/taj.jpg'
import img4 from '../images/moscow.jpg'
import img5 from '../images/paris.jpg'


function Work() {
    return (
        <div className="work">
            <div className="work-head">
                <h1> Selected <span>Works</span></h1>
            </div>
            <div className="img-1">
                <Img1Logo />
            </div>
            <div className="boxes">
                <div className="box">
                <img src={img2} alt={''} />
                </div>
                <div className="box">
                <img src={img3} alt={''}/>
                </div>

            </div>
            <div className="boxes">
                <div className="box">
                <img src={img4} alt={''}/>
                </div>
                <div className="box">
                <img src={img5} alt={''} />
                </div>

            </div>
 

        </div>
    )
}

export default Work
