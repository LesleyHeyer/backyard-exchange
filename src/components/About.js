import React from 'react';
import style from './About.module.css';
import GalleryImageFile from './GalleryImageFile';

const About = () => {

    return(
    <div className={style.about}>
         <h2 className={style.title}>About</h2>
        <body>
            <div  className={style.about_body}>
                <img className={style.about_image} src="./assets/bbq11.jpg" />
                <div>
                <h3 className="p-2">Welcome to the Backyard Exchange!</h3>
                    <ul className="m-1">
                        <li>View new recipes!</li><br/>
                        <li>Get inspired for your next family/friend barbeque</li><br/>
                        <li>Search for recipe ideas on the homepage</li><br/>
                        <li>Smoking and Grilling are our passion</li><br/>
                        <li>We want to support the home griller/smoker</li><br />
                        <li><b>Coming soon: recommendations for smokers/grills</b></li><br/>
                    </ul>
                </div>
            </div>
            </body>
    </div>
    );
}

export default About;