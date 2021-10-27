import React from 'react';
import style from './About.module.css';

const About = () => {
    return(
    <div className={style.about}>
         <h2 className={style.title}>About</h2>
        <body>
            <div  className={style.about_body}>
            <p>THIS IS THE BODY! HELLO THERE!</p>
            </div>
            </body>
    </div>
    );
}

export default About;