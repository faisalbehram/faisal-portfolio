import React, { Component } from 'react';
import classes from './Experince.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Experince extends Component {
  render() {
    return (
      <div className={classes.box} id='experince'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Experience <span>January(2022)-Present</span>
                          </h2>
                          <p>
                            I am currently working as <b>Software Engineer</b> at{' '}
                            <a target='_blank' href='https://www.omaemirates.com/'>
                              <b>OMA Emirates</b>
                            </a>
                          </p>
                          <p>
                            Developing Java Restful APIs to enable smooth interactions, seamlessly
                            integrating them with UI components created using React JS. This integration
                            guarantees a frictionless flow of data between back-end functionalities and the
                            user interface, culminating in a unified and highly responsive user experience.
                            Also, Migrate the old EFT switch from core Java to the latest microservices. I
                            have worked on PCI certification for Payment gateway applications and also for
                            Switch
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Experience <span>January(2021)-Nov(2021)</span>
                          </h2>
                          <p>
                            I was working as <b>Software Engineer</b> at{' '}
                            <a target='_blank' href='https://hive-worx.com/'>
                              <b>Hiveworx</b>
                            </a>
                          </p>
                          <p>
                            Accomplished software engineer specializing in back-end development with a strong
                            foundation in J2EE, Spring/Spring Boot, Hibernate, and Angular. Proficient in
                            designing and implementing Rest APIs, JWT token authentication, and authorization
                            processes. Experienced in developing Java Beans, designing Micro Services, and
                            creating Entity Relationship Diagrams (ERD) for optimal database structuring. In
                            front-end development, adept at integrating Rest APIs, implementing Business Logic
                            Validation, and utilizing Angular with Material UI and PrimeNG UI. Proven track
                            record in resolving bugs and contributing to cross-functional collaboration for effective
                            project development.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Xorlogics <span>August(2019)-January(2021)</span>
                          </h2>
                          <p>
                            I was working as <b>Software Engineer</b> at{' '}
                            <a target='_blank' href='https://www.xorlogics.com/'>
                              <b>Hiveworx</b>
                            </a>
                          </p>
                          <p>
                            I specialize in end-to-end product development, excelling in backend solutions
                            using Spring Boot for crafting efficient RESTful APIs with a focus on security
                            and optimized SQL queries. On the front-end, I work on Angular using Material
                            UI, and also enhancing performance of the application through converting into
                            different version conversions from Angular 7 to 8 and 9. My experience lies in
                            seamlessly integrating backend and frontend technologies to deliver high performing products.
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div className={classes.timeline_icon_3 || classes.color_none}></div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Experince;
