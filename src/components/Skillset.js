import React from 'react'
import { ReactComponent as WebdesingLogo } from '../svgs/webdesign.svg'
import { ReactComponent as ProjectLogo } from '../svgs/projectmanagement.svg'
import { ReactComponent as IllustrationLogo } from '../svgs/illustraion.svg'

function Skillset() {
    return (
        <div className="skill">
            <div className="skill-top">
                <h1>
                    The <span>Skillset</span>
                </h1>

            </div>
            <div className="line-svg">
           <hr/>
            </div>
            

            <div className="skill-box">
                <div className="web-design skill-design">
                    <WebdesingLogo />
                    <h3>
                        Web Design
</h3>
                    <p>
                        Websites, applications or other design related tasks. I love tackling digital problems and help fix them.
</p>

                </div>

                <div className="illustration skill-design">
                    <IllustrationLogo />
                    <h3>
                        Illustration
</h3>
                    <p>
                    My love, my mistress and the thing that keeps me up at night. Illustration is where I feel truly at home.</p>
                </div>

                <div className="project-management skill-design">
                    <ProjectLogo />
                    <h3>
                        Project Management
</h3>
                    <p>
                    Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project.</p>
                </div>


            </div>



        </div>
    )
}

export default Skillset
