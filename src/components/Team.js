import React from 'react'
import { NavLink } from 'react-router-dom'
import './Team.css'

const Team = () => {

    return (
    <div className="team__container--main">
        <div className="team__container--mintbean">
            <h2>BIG shoutout to the folks at Mintbean</h2>
            <p>
                Mintbean is a global collective of software developers. 🌎
                Members come for the hackathons. (of course 🎉)
                But they stay for the community. 😊 
            </p>
            <a href="https://mintbean.io/about-us">
                <button className="team__button--mintbean">
                    <img src="./images/mintbean.svg" alt="mintbean button" width="200px"></img>
                </button>
            </a>
        </div>
        <div className="team__container--bios">
            <div className="team__container--dale">
                <img src="https://daletsakamoto.github.io/assets/img/about/about-1.jpg" alt="Dale T Sakamoto" width="125px"></img>
            </div>
            <div className="team__container--text">
            <h2 className="team__bios--header">Fireballs Developers</h2>
            <h2 className="team__bios--header">Team Rocket:</h2>
                <h2 className="team__bios--header">Dale T. Sakamoto and David L. Griffin</h2>
                <div className="team__bios--wrapper">
                    <p className="team__bios--dale">
                        My name is Dale and I love building and creating things, 
                        from apps and databases to music and stories. My experience includes Javascript, Python, 
                        CSS, HTML, React/Redux, PSQL, and sequelize. I love being challenged by a problem and 
                        using my creativity and ingenuity to solve it, including debugging and clearning up my code. 
                        There is no better feeling in the world than spending hours attempting to fix a problem and 
                        watching the code run as you imagined and designed.
                    </p>
                    <p className="team__bios--dave">
                        I began coding BASIC on a TRS-80 in middle school and have continued to learn ever since. 
                        Over the years I have learned many languages from Basic to Visual Basic, Java, C++, HTML, 
                        CSS, JavaScript, Ruby. Most recently, I have learned Python while renewing my skills at 
                        AppAcademy and learning new skills and techniques such as React, Node.js, Redux, Flask, 
                        Alembic, and SQLAlchemy. My enjoyment of Software Development begins when problems arise 
                        and there are bugs to be hunted, a problem to be solved.
                    </p>
                </div>
            </div>
            <div className="team__container--dave">
                <img src="https://davidleegriffin.github.io/assets/images/David-Lee-Griffin.jpg" alt="David L Griffin" width="125px" height="125px"></img>
            </div>
        </div>
        <div className="team__shields--header">
            Technologies Used
        </div>
        <div className="team__container--shields">
            <img className="team__shields--img" src="https://img.shields.io/badge/Tools-npm-informational?style=flat&logo=NPM&logoColor=white&color=ff8300" alt="npm-shield" width="150px" height="37px;"></img>
            <img className="team__shields--img" src="https://img.shields.io/badge/Tools-Node.js-informational?style=flat&logo=Node.js&logoColor=white&color=ff8300" alt="node-js-shield" width="160px" height="37px"></img>
            <img className="team__shields--img" src="https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=Git&logoColor=white&color=ff8300" alt="git-shield" width="150px"></img>
            <img className="team__shields--img" src="https://img.shields.io/badge/Tools-Postman-informational?style=flat&logo=Postman&logoColor=white&color=ff8300" alt="postman-shield" width="150px" height="37px"></img>
            <img className="team__shields--img" src="https://img.shields.io/badge/Code-GraphQL-informational?style=flat&logo=GraphQL&logoColor=white&color=ff0000" alt="graphql-shield" width="150px" height="37px"></img>
            <img className="team__shields--img" src="https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&logoColor=white&color=ff0000" alt="javascript-shield" width="200px" height="37px"></img>
            <img className="team__shields--img" src="https://img.shields.io/badge/Code-StepZen-informational?style=flat&logo=StepZen&logoColor=white&color=ff0000" alt="stepzen-shield" width="150px" height="37px"></img>
            <img className="team__shields--img" src="https://img.shields.io/badge/Code-HTML-informational?style=flat&logo=HTML5&logoColor=white&color=ff0000" alt="html-shield" width="150px" height="37px"></img>
            <img className="team__shields--img" src="https://img.shields.io/badge/Code-CSS-informational?style=flat&logo=CSS3&logoColor=white&color=ff0000" alt="css-shield" width="150px" height="37px"></img>
        </div>
        <NavLink to={{pathname: "/fireballs"}}>
            <button className="team__button--home">CLICK HERE</button>
        </NavLink>
    </div>

    )
}

export default Team;