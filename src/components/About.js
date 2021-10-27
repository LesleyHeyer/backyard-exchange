import React from 'react';
import style from './About.module.css';

const About = () => {
    return(
    <div>
           <h2 className={style.title}>About</h2>
            <body className={style.about_body}>
            <p>THIS IS THE BODY! HELLO THERE!</p>
            </body>
    </div>
    );
}

export default About;