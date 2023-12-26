import React, { Component } from 'react';
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>WHAT I DO?</span>
        <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
        <div className={classes.Interest}>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          >
            <div className={classes.web}>
              <h3>Back-End Development</h3>
              <p>
              I bring extensive expertise in backend development, specializing in Java, Spring Boot, and Microservices. With a robust background in crafting RESTful APIs, implementing Spring Boot security measures, and orchestrating microservices, I possess the skills to deliver a comprehensive backend solution for your application. Additionally, I am well-versed in containerization technologies such as Docker, ensuring seamless deployment and scalability. I am confident in my ability to contribute to the success of your project by leveraging my experience and skills in backend development
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          >
            <div className={classes.app}>
              <h3>Front-end Development</h3>
              <p>I bring a wealth of expertise in front-end development with a focus on Angular and React frameworks. As a seasoned full-stack developer, I have successfully integrated and consumed RESTful APIs, ensuring seamless communication between the front and back ends. My proficiency extends to implementing robust front-end security validation measures, contributing to the overall security posture of applications. Moreover, I have hands-on experience with primeNg and Material UI, enhancing user interfaces with sophisticated and responsive design components. I am well-equipped to elevate your project through my comprehensive understanding of front-end development and commitment to delivering high-quality, user-centric solutions.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          >
            <div className={classes.other}>
              <h3>Expanded Expertise</h3>
              <p>
                TypeScript, UI Libraries (React-Bootstrap, MUI), PrimeNg, Problem-Solving,
                GitHub, Docker image Creation, Started exploring Open Source Contribution.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </div>
  );
}
