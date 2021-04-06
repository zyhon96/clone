import React from 'react'
import Button from '../Buttons/button'
import { ReactComponent as DribbleLogo } from '../svgs/dribble.svg'
import { ReactComponent as InstagramLogo } from '../svgs/instagram.svg'
import { ReactComponent as LinkedinLogo } from '../svgs/linkedin.svg'
function Connect() {
    return (
        <div className="connect">
            <div className="connect-left">
                <h1>
                    Let’s <span>Connect</span>
                </h1>
                <p>
                    For any work collaborations, fan letters or even<br /> a simple chat, take the first step and reach out <br />via e-mail or one of my social media profiles.
</p>

                <div style={{ marginRight: '3rem' }}><Button title="Say HI" /></div>

            </div>


            <div className="connnect-right">
                <h2>
                    <span>Find </span> Me On
</h2>

<div className="dribble-connect">
<DribbleLogo/>
<p>Dribble</p>
</div>
<div className="instagram-connect">
<InstagramLogo/>
<p>Instagram</p>
</div>
<div className="linkedin-connect">
<LinkedinLogo/>
<p>Linkedin</p>
</div>

            </div>

        </div>
    )
}

export default Connect
