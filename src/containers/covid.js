import React, {
  Component
} from 'react';
import data from '../assets/data.json';
import classes from "../assets/covid.module.css";
import Help from "../functions/help.js";
import Infobox from "../functions/infobox.js";
import Breakline from '../functions/breakline.js';
import hope from '../assets/hope.jpeg';


class Covid extends Component {

  state = {
    state: 0,
    district: 0,
    shownav: false,
    showbed: false,
    showoxygen: false,
    showplasma: false,
    showremdesivir: false,
    showdoctor: false,
    showtest: false,
    statedata: data
  }

  navchangehandler = () => {
    this.setState({
      shownav: !this.state.shownav
    });
  }

  showbedhandler = () => {
    this.setState({
      showbed: !this.state.showbed
    });
  }

  showoxygenhandler = () => {
    this.setState({
      showoxygen: !this.state.showoxygen
    });
  }

  showplasmahandler = () => {
    this.setState({
      showplasma: !this.state.showplasma
    })
  }

  showremdesivirhandler = () => {
    this.setState({
      showremdesivir: !this.state.showremdesivir
    })
  }

  showdoctorhandler = () => {
    this.setState({
      showdoctor: !this.state.showdoctor
    })
  }

  showtesthandler = () => {
    this.setState({
      showtest: !this.state.showtest
    })
  }

  shandler = (event) => {
    this.setState({
      state: event.target.value
    });
    this.setState({
      district: 0
    });
  }

  dhandler = (event) => {

    this.setState({
      district: event.target.value
    });
  }

  render() {

    let totalstate = data.map(a => {
      return <option value={a.id}>{a.sname} </option>
    });

    let totald = data[this.state.state].districts.map(b =>
      {
        return <option value={b.did}> {b.dname} </option>
      });

    //oxygen Availability
    let oxygen = <div></div>;
    if (this.state.showoxygen === true) {
      oxygen = data[this.state.state].districts[this.state.district].oxygen.map(c =>
        {
          return(

            <div className={classes.bigbox}>
     <div className={classes.box}>
     <p className={classes.name}>
Provider Name :
            </p>
     <p className={classes.num}>
              {c.name}
            </p>
            </div>
     <div className={classes.box}>
     <p className={classes.name}>
Contact Number :
              </p>
     <p className={classes.num}>
                {c.no}
              </p>
            </div>
     <p className={classes.plas}>
              {c.link}
            </p>
            </div>
          )});
    } else {
      oxygen = <div></div>
    }

    //beds Availability
    let bedavail = <div></div>;
    if (this.state.showbed === true) {
      bedavail = data[this.state.state].districts[this.state.district].beds.map(c =>
        {
          return(

            <div className={classes.bigbox}>
     <div className={classes.box}>
     <p className={classes.name}>
Hospital Name :
            </p>
     <p className={classes.num}>
              {c.name}
            </p>
            </div>
     <div className={classes.box}>
     <p className={classes.name}>
Contact Number :
              </p>
     <p className={classes.num}>
                {c.no}
              </p>
            </div>
     <p className={classes.plas}>
              {c.link}
            </p>
            </div>
          )});
    } else {
      bedavail = <div></div>
    }

    //Plasma Availability
    let plasma = <div></div>;
    if (this.state.showplasma === true) {
      plasma = data[this.state.state].districts[this.state.district].plasma.map(c =>
        {
          return(

            <div className={classes.bigbox}>
     <div className={classes.box}>
     <p className={classes.name}>
 Provider Name :
            </p>
     <p className={classes.num}>
              {c.name}
            </p>
            </div>
     <div className={classes.box}>
     <p className={classes.name}>
Contact :
              </p>
     <p className={classes.num}>
                {c.no}
              </p>
            </div>
     <p className={classes.plas}>
              {c.link}
            </p>
            </div>
          )});
    } else {
      plasma = <div></div>
    }
    //Test Availability
    let test = <div></div>;
    if (this.state.showtest === true) {
      test = data[this.state.state].districts[this.state.district].test.map(c =>
        {
          return(

            <div className={classes.bigbox}>
     <div className={classes.box}>
     <p className={classes.name}>
Lab Name :
            </p>
     <p className={classes.num}>
              {c.name}
            </p>
            </div>
     <div className={classes.box}>
     <p className={classes.name}>
Contact Number :
              </p>
     <p className={classes.num}>
                {c.no}
              </p>
            </div>
     <p className={classes.plas}>
              {c.link}
            </p>
            </div>
          )});
    } else {
      test = <div></div>
    }

    //Remdesivir Availability
    let remdesivir = <div></div>;
    if (this.state.showremdesivir === true) {
      remdesivir = data[this.state.state].districts[this.state.district].remdesivir.map(c =>
        {
          return(

            <div className={classes.bigbox}>
     <div className={classes.box}>
     <p className={classes.name}>
 Provider Name :
            </p>
     <p className={classes.num}>
              {c.name}
            </p>
            </div>
     <div className={classes.box}>
     <p className={classes.name}>
Contact :
              </p>
     <p className={classes.num}>
                {c.no}
              </p>
            </div>
     <p className={classes.plas}>
              {c.link}
            </p>
            </div>
          )});
    } else {
      remdesivir = <div></div>
    }
    //Doctor Availability
    let doctor = <div></div>;
    if (this.state.showdoctor === true) {
      doctor = data[this.state.state].districts[this.state.district].doctor.map(c =>
        {
          return(

            <div className={classes.bigbox}>
     <div className={classes.box}>
     <p className={classes.name}>
  Name :
            </p>
     <p className={classes.num}>
              {c.name}
            </p>
            </div>
     <div className={classes.box}>
     <p className={classes.name}>
Contact :
              </p>
     <p className={classes.num}>
                {c.no}
              </p>
            </div>
     <p className={classes.plas}>
              {c.link}
            </p>
            </div>
          )});
    } else {
      doctor = <div></div>
    }

    return(
      <div className={classes.body}>
      <div className={classes.nav}>
      <p className={classes.navt}>
Covid Resources India
      </p>
      </div>

      <br />
      <select className={classes.select} onChange={this.shandler}>
      {totalstate}
      </select>
      <br />
      <select className={classes.select} onChange={this.dhandler} value = {this.state.district}>
      {totald}
      </select>
    {this.state.district > 0 ?
        <div>
      <Infobox showhandler={this.showbedhandler} text="Bed Availability" />
      {bedavail}
      <Infobox showhandler={this.showoxygenhandler} text="Oxygen Suppliers" />
      {oxygen}
      <Infobox showhandler={this.showplasmahandler} text="Plasma Resources" />

     {plasma}
      <Infobox showhandler={this.showremdesivirhandler} text="Remdesivir Resources" />

      {remdesivir}
      <Infobox showhandler={this.showdoctorhandler} text="Helpline/Doctors Consult" />
     {doctor}
      <Infobox showhandler={this.showtesthandler} text="Covid Test" />
     {test}
        </div>: <div>
             <div className={classes.infobox}>
      <img className={classes.hope} src={hope} alt="hope">
      </img>
      <p className={classes.infobold}>
 Don't Panic.
          </p>
      <p className={classes.infobold}>
 Choose the State and then the City, wait and it will show you all the available covid resources.
          </p>
      <p className={classes.infobold}>
 If your State/City isn't showing up, it's because data is not available/uploaded for that region.
          </p>
      <p className={classes.infobold}>
 All the data and resources has been collected from various people, websites and social media handles. I haven't personally verified them.
          </p>
      <p className={classes.infobold}>
 Not every Number on this website is verified. They can be switched off, wrong or out of service. You can inform me by clicking "wanna help" section that is in the bottom of this website. I'll remove those faulty resources.
          </p>
      <p className={classes.infobold}>
 You can help people by verifying these numbers and also providing verified resources.
          </p>
      <p className={classes.infobold}>
 The data will be updated as soon as i'll receive updated resources.
          </p>
      <p className={classes.infobold}>
 Feel free to help, give suggestions, report bugs/data, send your resources. You can CONTACT ME by clicking "wanna help" section below.
          </p>
      <p className={classes.infobold}>
Thank you, I will try my best to help everyone.
          </p>
        </div>
      </div>
      }
      <Breakline num="5" />
      <Help show={this.state.shownav} change={this.navchangehandler} />
      <div className={classes.me}>
      <p className={classes.small}>
Proudly created by Sanskar Raj
      </p>
      </div>
    </div>
  )
}
}

export default Covid;