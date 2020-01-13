import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import FlexContainer from './components/FlexContainer';
import HexagonGrid from './components/HexagonGrid';
import IntroStatement from './components/IntroStatement';
import ResumeInfoBar from './components/ResumeInfoBar';
import FlexColumnContainer from "./components/FlexColumnContainer";
import FlexColumns from "./components/FlexColumns";
class App extends Component {
  state = {
    content: 'home'
  };
  render() {
    let content;
    switch (this.state.content) {
      case 'home':
        content = (
            <>
            <Header/>
            <FlexContainer>
              <HexagonGrid/>
            </FlexContainer>
            </>
            );
        break;
      default:
        console.log('ERROR');
    }
    return (
        <Wrapper>



                    {content}

            <ResumeInfoBar/>
        </Wrapper>
    );
  }
}

export default App;
