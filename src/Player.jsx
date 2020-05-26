import React from "react";
import {ReactFlvPlayer} from 'react-flv-player'

export default class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            height:100,
            width:100
        }
    }

    scaleUp = ()=>{
        if(this.state.width>299){
            this.setState({height:100})
            this.setState({width:100})
        }else if(this.state.width>199){
            this.setState({height:this.state.height*1.5-0.01})
            this.setState({width:this.state.width*1.5-0.01})
        }else if(this.props.count>2){
            this.setState({height:this.state.height*2-0.01})
            this.setState({width:this.state.width*2-0.01})
        }
    }
    render() {
        return(
            <div onClick={()=>this.scaleUp()} className={"player"} style={{height:`${this.state.height/this.props.count}%`,width:`${this.state.width/this.props.count}%`}}>
                {/*<ReactFlvPlayer*/}
                {/*    url = {this.props.url}*/}
                {/*    isMuted={true}*/}
                {/*    height={"auto"}*/}
                {/*    width={"100%"}*/}
                {/*    hasAudio={false}*/}
                {/*/>*/}
            </div>
        )
    }

}