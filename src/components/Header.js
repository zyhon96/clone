import React from 'react'
import Button from '../Buttons/button'
import { ReactComponent as DoggieLogo } from '../svgs/Doggie.svg'
import { ReactComponent as DribbleLogo } from '../svgs/dribble.svg'
import { ReactComponent as InstagramLogo } from '../svgs/instagram.svg'
import { ReactComponent as LinkedinLogo } from '../svgs/linkedin.svg'

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-left-top-text">
          Product Designer with a
strong passion for illustration
</h1>
        <h3 className="header-left-bottom-text">
          Currently enjoying the sunny side of<br />
 the world in Barcelona, Spain.
</h3>

        <div className="social-action">
          <div  style={{marginRight: '2rem'}}><Button title="Say Hi!" /></div>
          <div className="social-link">
            <DribbleLogo />
            <InstagramLogo />
            <LinkedinLogo />
          </div>

        </div>
      </div>

      <div className="header-right">

        <DoggieLogo />
      </div>

    </div>
  )
}

export default Header
