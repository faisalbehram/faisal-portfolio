import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import bookheap from '../images/bookheap.png';
import chess from '../images/chess.png';
import shopping from '../images/shopping-app.png';
import travel from '../images/travel-log.png';
import definition from '../images/definition.png';
import memes from '../images/memes.png';
import rentaga from '../images/rentaga.png';
import monorepo from '../images/monorepo.png';
import courseApp from '../images/courseApp.png';
import chatGPT from '../images/chatGPT.png';
import challenges from '../images/frontend-challenges.png';
import github from '../images/github.png';

// Web projects
const cardItem = [
  {
    link: '#',
    title: 'Nano-Payment-Gateway',
    techStack: 'Tech Stack: Java,Typescript, MsSql',
    desc: 'Its a payment gateway application. Where we can onboard merchant for there ecom transaction',
    image: monorepo,
    color: '#0FFFFF',
    githubLink: '#'
  },
  {
    link: '#',
    title: 'Softpos',
    techStack: 'Tech Stack: Java,React, MsSql',
    desc: 'Its a payment application which will be use for payment. its like Soft terminal which will be used by merchant',
    image: courseApp,
    color: '#C1A4AA',
    githubLink: '#'
  },
  {
    link: '#',
    title: 'Ghanem Link ',
    techStack: 'Tech Stack: Java,Angular, Postgresql',
    desc: 'its Ecom Application which is used to buy and sell property, ships, Plans ,yards ',
    image: courseApp,
    color: '#C1A4AA',
    githubLink: 'https://www.ghanemlinks.com/gl/login'
  }
  ,
  {
    link: '#',
    title: 'RentAga',
    techStack: 'Tech Stack: Java,Angular, SQL',
    desc: 'its Ecom Application which is used for revolutionising the world of construction machine rentals, bringing the efficiencies of digitalisation  ',
    image: rentaga,
    color: '#C1A4AA',
    githubLink: 'https://rentaga.com/product'
  }
  
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              window.open(cardItem.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            <img src={github} className={classes.card__title__img} />
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
      </ScrollAnimation>
    </div>
  );
}
