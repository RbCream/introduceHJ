import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';



class App extends Component {
    render () {
      return (
      <div className="App">
       <Nav />
       <Main />
       <About />
       <Pf />
       <Footer />
      </div>
    );
  }
}

class Nav extends Component {
  render () {
    return (
    <nav className="Nav">
      <div className="Nav2" >
      <div className="logo">
       Introduce 11
      </div>
        <div className="N3">
          <ul className="N4">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
      </div>
      </div>
    </nav>
  );
}
}

class Main extends Component {
  render () {
    return (
    <div className="Main">
      Main
    </div>
  );
}
}

class About extends Component {
  render () {
    return (
    <div className="About">
      About
    </div>
  );
}
}

class Pf extends Component {
  render () {
    return (
    <div className="Pf">
      Pf
    </div>
  );
}
}

class Footer extends Component {
  render () {
    return (
    <div className="Footer">
      <div className="sort">
       <h1>Contact</h1>
       <img src="/img/github.svg" className="GITicon" alt="git"></img>
       <img src="/img/envelope.svg" className="envelope" alt="envelope"></img>     
       <img src="/img/envelope.svg" className="envelope" alt="envelope"></img>     
     
      </div>
      <h2>@naver.com</h2>

    </div>
  );
}
}


$(document).ready(function($) {

        $(".scroll_move").click(function(event){         

                event.preventDefault();

                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

        });

});


export default App;