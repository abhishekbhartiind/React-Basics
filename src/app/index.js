import React from 'react';
import {render} from 'react-dom';

import {Header} from './components/Header';
import {Home} from './components/Home'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      homeLink:"Home",
      homeMounted:true
    };
  }
  onGreet(){
    alert("Hello Friends!!");
  }
  onChangeLink(newName){
    this.setState({
      homeLink:newName
    });
  }
  onChangeHomeMount(){
    this.setState({
      homeMounted:! this.state.homeMounted
    });
  }
  render(){
    let homeCmp="";
    if(this.state.homeMounted){
      homeCmp=  (
        <Home
            name={"John"}
            initialAge={25}
            greet={this.onGreet}
            changeLink={this.onChangeLink.bind(this)}
            initialLinkName={this.state.homeLink}
            />
          );
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
              {homeCmp}
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
              <button onClick={this.onChangeHomeMount.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
          </div>
        </div>
      </div>
    );
  }
}
render(<App/>,window.document.getElementById('app'));
