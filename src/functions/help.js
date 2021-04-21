import React from 'react';
import classes from '../assets/covid.module.css';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faTelegramPlane,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';



const Help = (props) => {
  let content = <div></div>;
  if (props.show === true) {
    content = <div>
      <p className={classes.small}>
This Website is a Non-Profit Initiative to Help People in this Chaos. It is Developed and Managed by a single person i.e. me and I am totally dependent on people from different parts of this country who are continuously sending me reports and covid resources. You can also volunteer by sending me necessary life-saving resources so I can update them on this website. You can also verify and check available resources to improve this Website.
      </p>

      <div className={classes.icons}>

        <a className={classes.link} href="https://wa.me/8442056487"><FontAwesomeIcon icon={faWhatsapp} /></a>

        <a className={classes.link} href="https://www.instagram.com/safar_.nama/"><FontAwesomeIcon icon={faInstagram} />
        </a>

        <a className={classes.link} href="mailto: sanskarraj19072001@gmail.com">  <FontAwesomeIcon icon={faEnvelope} />
        </a>

        <a className={classes.link} href="https://t.me/sothisishowidied"><FontAwesomeIcon icon={faTelegramPlane} /></a>
      </div>
      <br />
    </div>
  } else {
    content = <div></div>;
  }
  return (
    <div className={classes.bbar} onClick={props.change}>
    <p className={classes.bold}>
    Wanna Help?
    </p>
    {content}
    </div>
  )
}

export default Help;