import React from "react";

export class Home extends React.Component {
    constructor(props){
      super();
      this.state= {
        age:props.initialAge,
        status:0,
        homeLink:props.initialLinkName
      };
      setTimeout(() => {
        this.setState({
          status:1
        });
      },3000);
      console.log("constructor");
    }
    componentWillMount(){
      console.log("Component will mount");
    }
    componentDidMount(){
      console.log("Component did mount");
    }
    componentWillReceiveProps(nextProps){
      console.log("Component will receive props",nextProps);
    }
    shouldComponentUpdate(nextProps,nextState){
      console.log("Shold Component Update",nextProps,nextState);
      /*
      if(nextState.status === 1){
        return false;
      } */
      return true;
    }
    componentWillUpdate(nextProps,nextState){
      console.log("components will Update",nextProps,nextState);
    }
    componentDidUpdate(prevProps,prevState){
      console.log("components did Update",prevProps,prevState);
    }
    componentWillUnmount(){
      console.log("Component will ummount");
    }
    onMakeOlder(){
      this.setState({
            age: this.state.age +3
      });
    }
    onChangeLink(){
      this.props.changeLink(this.state.homeLink);
    }
    onHandleChange(event){
        this.setState({
          homeLink:event.target.value
        });
    }
    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, your initialAge is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input className="form-control form-control-lg" type="text" value={this.state.homeLink}
                    onChange={(event)=>this.onHandleChange(event)}/>
                    <br/><br/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}
/*
Home.propTypes = {
  name: React.propTypes.string,
  age: React.propTypes.number
}; */
/*
setState:

*/
