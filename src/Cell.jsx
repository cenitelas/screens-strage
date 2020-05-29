import React from "react";
import ReactPlayer from 'react-player'
export default class Cell extends  React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div   className="cell" style={{width:this.props.w*7.5+"rem",height:this.props.h*3.7+"rem"}}>
                <div onClick={()=>this.props.upScale(this.props.id)} className="cellAction"></div>
                <ReactPlayer className="player" url='https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1920_18MG.mp4' width="100%" height="100%" playing={true} controls={false}/>
            </div>
        )
    }

}