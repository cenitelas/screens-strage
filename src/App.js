import React from 'react';
import './App.css';
import Cell from "./Cell";

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cells:[]
        }
    }

    componentDidMount() {
        let cells = this.state.cells;
        for(let i=0;i<16;i++){
            cells.push({id:i+1,w:4,h:3.9,child:{}})
        }
        this.setState({cells:cells})
    }

    upScale = (id)=> {
        let cells = this.state.cells;
        let count_size2 = cells.filter(i => i.w === 8);
        let scaleObj = cells.filter(i => i.id === id)[0];
        if(scaleObj.w<5) {
            cells.map((item, i) => {
                item.w = 4;
                item.h = 3.9;
            })
            switch (count_size2.length) {
                case 0:
                    if (count_size2.filter(i => i.id === id).length > 0) {
                        break;
                    }
                    scaleObj.w = 8;
                    scaleObj.h = 9.2;
                    cells.splice(cells.indexOf(scaleObj), 1);
                    cells.unshift(scaleObj);
                    cells.map((item, i) => {
                        if (i > 0) {
                            item.h = 4.6
                        }
                        if (i > 4) {
                            item.w = 3.2;
                            item.h = 3.6;
                        }
                        if (i > 9) {
                            item.w = 2.6659;
                            item.h = 2.8;
                        }
                    })
                    break;
                case 1: {
                    if (count_size2.filter(i => i.id === id).length > 0) {
                        break;
                    }
                    count_size2[0].w = 8;
                    count_size2[0].h = 9.2;
                    scaleObj.w = 8;
                    scaleObj.h = 9.2;
                    cells.splice(cells.indexOf(count_size2[0]), 1);
                    cells.splice(cells.indexOf(scaleObj), 1);
                    cells.unshift(scaleObj);
                    cells.unshift(count_size2[0]);
                    cells.map((item, i) => {
                        if (i > 1) {
                            item.w = 2.285;
                            item.h = 3.2
                        }
                    })
                    break
                }

                case 2:
                    this.upScale(id);
                    break

            }
        }else if(scaleObj.w===8) {
                cells.map((item, i) => {
                    item.w = 4;
                    item.h = 3.9;
                })
                scaleObj.w = 11.66;
                scaleObj.h = 12.655;
                cells.splice(cells.indexOf(scaleObj), 1);
                cells.unshift(scaleObj);
                cells.map((item, i) => {
                    if (i > 0) {
                        item.w = 2.166;
                        item.h = 2.5322;
                    }
                    if (i > 10) {
                        item.w = 3.2;
                        item.h = 2.9;
                    }
                })
        }else{
            cells.map((item, i) => {
                item.w = 4;
                item.h = 3.9;
            })
        }

        this.setState({cells:cells})
    }

    render() {
        return (
            <div className="screen">
                {this.state.cells.map((item,i)=>{
                    return <Cell id={item.id} w={item.w} h={item.h} child={item.child} key={i} upScale={this.upScale}/>
                })}
            </div>
        );
    }
}
