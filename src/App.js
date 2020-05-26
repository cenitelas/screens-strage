import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from "./Player";
const paterns = {
    2:2,
    5:4
}
export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            urls: ["http://85.29.136.125:8080/96fe67d18a54fe175acdaa326efea8d3/flv/sb3r0Aa/WZzzpg5d8dZY/s.flv"],
            count: 1
        }
    }


    addPlayer = ()=>{
        var urls = this.state.urls;
        urls.push("http://85.29.136.125:8080/96fe67d18a54fe175acdaa326efea8d3/flv/sb3r0Aa/WZzzpg5d8dZY/s.flv")
        if(paterns.hasOwnProperty(urls.length))
        this.setState({count:paterns[urls.length]});
        this.setState({urls: urls})
    }
    render() {
        return (
            <>
                <button onClick={()=>this.addPlayer()}>ADD PLAYER</button>
                <div className="App">
                    {this.state.urls.map((item,i)=>{
                        return <Player count={this.state.count} url={item} key={i}/>
                    })}
                </div>
            </>
        );
    }
}
