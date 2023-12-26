import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
              My name is <b>Faisal Behram</b> and I am currently working as{' '}
              <b>Software Developer Engineer</b> at
              <b>
                {' '}
                <a className={classes.link} target='_blank' href='https://www.omaemirates.com/'>
                  Oma Emirates
                </a>
              </b>
              . I completed my degree in Bachelor of Technology in Computer Software Engineering
              from University of Engineering and Technology Peshawar. I am much interested in
              developing new things which excite me a lot. :)
            </p>
            <p className={classes.br}>
              I love exploring new technologies and being a practitioner, I like to stay on top of
              latest trends. I try to leave every line of code I write more readable, accessible,
              and modular. My problem-solving mindset and active GitHub profile showcase my
              commitment to innovative and collaborative coding.
            </p>
            <p className={classes.br}>
              I have almost 5 years of experince as a full stack developer. I worked in Java, React and Angular.
              In Java I have developed restfull API's, and Microservice. where in front-end I consume that API's
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
