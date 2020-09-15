import React from 'react';
// import components
import Header from './components/js/header';
import Section from './components/js/section';
import Footer from './components/js/footer';

// components
class App extends React.Component {
  render() {
    return (
      <div>
        <div><Header/></div>
        <div><Section/></div>
        <div><Footer/></div>
      </div>
    )
  }
}

export default App;
