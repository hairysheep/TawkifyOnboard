import React, { Component } from 'react';
import './App.css';
import picture from './photo-1421986527537-888d998adb74.jpeg';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {page: 1};
    this.handleContClick = this.handleContClick.bind(this);
  }

  handleContClick() {
    if (this.state.page === 1) {
      this.setState({page: 3})
    }
    else if (this.state.page === 3) {
      this.setState({page: 1})
    }
  }

  render() {
    /*<img src={picture} className="App-banner" alt="banner" />*/
    var heights = [];
    for (var f = 4; f < 7; f++) {
      for (var i = 0; i <= 12; i++) {
        heights.push("" + f + " ft " + i + " in")
      }
    }

    var bannerStyle = {
      height: "300px",
      backgroundImage : "url(" + picture + ")",
      backgroundSize : "cover"
    }

    heights.push("7 ft 0 in")
    const incomes = ["Less than $40,000", "$40,000-$60,000", "$60,000-$80,000", "$80,000-$100,000"
      , "$100,000-$125,000", "$125,000-$150,000", "$150,000-$200,000", "$200,000-$250,000"
      , "$250,000-$500,000", "$500,000-$1,000,000", "Rather not say"]
    if (this.state.page === 1) {
      return (
        <div className="page">
          <div className="page-header">
            <Header/>
          </div>
          <div className="page-banner">
            <section style={bannerStyle}>
              <Banner/>
            </section>
          </div>
          <div className="page-descrip">
            <Description1/>
          </div>
          <div className="Gender">
            <DropDown question = {"YOUR GENDER"} list = {['FEMALE', 'MALE']} subtext = {"Select your gender"}/>
          </div>
          <div className = "Location">
            <Loc/>
          </div>
          <div className="Height">
            <DropDown question = {"YOUR HEGHT"} list = {heights} subtext = {"What is your height?"}/>
          </div>
          <div className="Occupation">
            <Textbox question = {"OCCUPATION"} subtext = {"What do you do?"}/>
          </div>
          <div className="Seeking">
            <DropDown question = {"YOU ARE SEEKING"} list = {['WOMEN', 'MEN']} subtext = {"Select the sexual orientation you're seeking"}/>
          </div>
          <div className="Birthday">
            <Birth/>
          </div>
          <div className="Income">
            <DropDown question = {"INCOME"} list = {incomes} subtext = {"Why? This is one form of an indicator."}/>
          </div>
          <div className="Interests">
            <Textbox question = {"INTERESTS"} subtext = {"Tell us a little more about yourself and what you like to do. We read everything so please share"}/>
          </div>
          <div className="Continue">
            <button onClick = {this.handleContClick}>SAVE AND CONTINUE</button>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="page">
          <div className="page-header">
            <Header/>
          </div>
          <div className="page-banner">
            <section style={bannerStyle}>
              <Banner/>
            </section>
          </div>
          <div className="page-descrip">
            <Description3/>
          </div>
          <div className="Continue">
            <button onClick = {this.handleContClick}>SAVE AND CONTINUE</button>
          </div>
        </div>
      );
    }
  }
}

class Header extends Component {
  render() {
    const items = ['How It Works', 'FAQ', 'Stories', 'Sign In']
    return (
      <div className="Header-topbar">
        <h1 className="Title">tawkify</h1>
      </div>
    )
  }
}

class Banner extends Component {
  render() {
    console.log(picture);
    return (
      <div>
        <p className ="Banner-text">
          We&apos;d like to get to know you better. Tell us about yourself and the sort of someone you&apos;d
          <br/> like to meet. Don&apos;t worry no one will see this besides the matchmakers at Tawkify.
        </p>
      </div>
    )
  }
}

class Description1 extends Component {
  render() {
    return (
      <div>
        <h1 className="Descrip-title">Tell us a bit about yourself</h1>
        <p className="Descrip-text">
          Tell us a bit about yourself and who you&apos;d like to meet. The more we know, the better. Be candid-this <br/>
          info is for our eyes only. Tawkify profiles and photos will forever be 100% confidential.
        </p>
      </div>
    )
  }
}

class Description3 extends Component {
  render() {
    return (
      <div>
        <h1 className="Descrip-title">Upload recent photos of yourself</h1>
        <p className="Descrip-text">
          We ask that you upload at least 2 pictures of yourself; but upload as many as you&apos;d like. We encourage <br/>
          you to review your pictures periodically to make sure they are up to date. Snapshots and Selfies just<br/>
          fine here. Remember this image is for our internal use and will nto be shared with potential matches -<br/>
          you will also be able to swap it out later if you wish.
        </p>
      </div>
    )
  }
}

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.list[0]};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
        <label>
          {this.props.question}
          <div>
          <select value={this.state.value} onChange={this.handleChange}>
            {this.props.list.map(value => <option key={value} value={value}>{value}</option>)}
          </select>
          </div>
          <small>{this.props.subtext}</small>
        </label>
    );
  }
}

class Loc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <label>
        LOCATION
        <div>
          <input type="int" value={this.state.value} onChange={this.handleChange} />
        </div>
        <small>Where are you located?</small>
      </label>
    );
  }
}

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <label>
        {this.props.question}
        <div>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </div>
        <small>{this.props.subtext}</small>
      </label>
    );
  }
}

class Birth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {month: '',
                  day: '',
                  year: ''};

    this.handleMonth = this.handleMonth.bind(this);
    this.handleDay = this.handleDay.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMonth(event) {
    this.setState({month: event.target.value});
  }

  handleDay(event) {
    this.setState({day: event.target.value});
  }

  handleYear(event) {
    this.setState({year: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <label>
        YOUR BIRTHDAY
        <div>
          <input type="int" value={this.state.value} onChange={this.handleMonth} />
          <input type="int" value={this.state.value} onChange={this.handleDay} />
          <input type="int" value={this.state.value} onChange={this.handleYear} />
        </div>
      </label>
    );
  }
}

class YesNo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Yes: true,
                  No: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleYesClick() {
    this.setState({Yes: true});
    this.setState({No: false})
  }

  handleNoClick() {
    this.setState({No: true});
    this.setState({Yes: false})
  }


}


export default App
