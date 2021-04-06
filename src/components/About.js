import React from 'react'
import { ReactComponent as LovingLogo } from '../svgs/loving.svg'

function About() {
    return (
        <div className="about">
            <div className="aboutLeft">
                <div className="about-header">
                    <h1>
                        A Little Bit <span>About Me!</span>
                    </h1>
                    <p>
                        For more than 5 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer.
</p>
<p>
At the moment, this journey has brought me to US Mobile where I am a full-time Senior Product Designer. In this position, as with freelance, I am working remotely and I have been for approximately two years.

</p>
<p>
With the constant goal of pushing design boundaries and maintaining a high standard for usability & user experience, I have consistently worked with various startups and clients from all around the world and helped them create amazing and engaging digital products.
</p>
                </div>

            </div>
            <div className="aboutRight">

                <LovingLogo />
            </div>

        </div>
    )
}

export default About
