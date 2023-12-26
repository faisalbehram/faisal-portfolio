import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
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
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                          <FaSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                           Batchlor Degree <span>2015-2019</span>
                          </h2>
                          <p>
                            I have completed my Batchlor degree from University of Engineering and Technology Peshawar with major subjects as
                            Computer Software Engineering
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
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                          <FaSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                           Higher School <span>2013-2015</span>
                          </h2>
                          <p>
                            I have completed my Higher School Degree from BISE Mardan with major subjects as pre-engineering
                          </p>
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

export default Education;
