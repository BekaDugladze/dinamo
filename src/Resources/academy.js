import React, { Component } from "react";
import './css/academy.css';
import acad from "./photo/acd.jpeg";

export default class Academy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MOT: 'but1',
            positions: 'but1',
        }
    }
    handleBut(but){
        this.setState({MOT: but});
    }
    handleTab(tab){
        this.setState({positions: tab});
    }
    render() {
        return(
            <div id="academy">
                <h1>Academy</h1>
                <div className="bar">
                    <ul>
                        <li><button onClick={() => {this.handleBut('but1')}}
                        style={{ background: this.state.MOT === 'but1' ? '#001F4E' : 'none',
                        color: this.state.MOT === 'but1' ? 'white' : '#001F4E'}}>About</button></li>
                        <li><button onClick={() => {this.handleBut('but2')}}
                        style={{ background: this.state.MOT === 'but2' ? '#001F4E' : 'none',
                        color: this.state.MOT === 'but2' ? 'white' : '#001F4E'}}>Coaches</button></li>
                        <li><button onClick={() => {this.handleBut('but3')}}
                        style={{ background: this.state.MOT === 'but3' ? '#001F4E' : 'none',
                        color: this.state.MOT === 'but3' ? 'white' : '#001F4E'}}>U19</button></li>
                    </ul>
                </div>
                { this.state.MOT === 'but1' ? 
                    <div className="academyDiv">
                        <img src={acad} alt="Academy of Dinamo Tbilisi, Football academy" />
                        <p>Dinamo Tbilisi Football Academy is named after legendary footballer Vitali Daraselia. Official opening ceremony of the academy took place on July 7, 2013. It is the best academy in Georgia with its infrastructure. The best adolescents are trained by high qualified Georgian and foreigner coaches. Dinamo academy teams of different ages regularly take part and succeed in international tournaments. They successfully play in Dinamo and national teams.<br></br>
                        <br></br>
                        <a href="https://maps.app.goo.gl/YHMkTtPniwi265N29" target="_blank" rel="noreferrer">62 Ljubljana str.</a>
                        <br></br>
                        Tel: 249 6777 (210):. Mob: 577 670725
                        <br></br>
                        <a href="mailto: academy@fcdinamo.ge">e-mail: academy@fcdinamo.ge</a></p>
                    </div>
                : null}
                {this.state.MOT === 'but2' ? 
                <div className="sorry">
                    <h1>Sorry! We are updating this content!</h1>
                </div>
                : null
                }
                {this.state.MOT === 'but3' ? 
                <>
                <div className="bar">
                <ul>
                    <li><button onClick={() => {this.handleTab('but1')}}
                    style={{ background: this.state.positions === 'but1' ? '#001F4E' : 'none',
                    color: this.state.positions === 'but1' ? 'white' : '#001F4E'}}>Goalkeepers</button></li>
                    <li><button onClick={() => {this.handleTab('but2')}}
                    style={{ background: this.state.positions === 'but2' ? '#001F4E' : 'none',
                    color: this.state.positions === 'but2' ? 'white' : '#001F4E'}}>Defenders</button></li>
                    <li><button onClick={() => {this.handleTab('but3')}}
                    style={{ background: this.state.positions === 'but3' ? '#001F4E' : 'none',
                    color: this.state.positions === 'but3' ? 'white' : '#001F4E'}}>Midfielders</button></li>
                    <li><button onClick={() => {this.handleTab('but4')}}
                    style={{ background: this.state.positions === 'but4' ? '#001F4E' : 'none',
                    color: this.state.positions === 'but4' ? 'white' : '#001F4E'}}>Forwards</button></li>
                </ul>
            </div>
                <div className="sorry">
                    <h1>Sorry! We are updating this content!</h1>
                </div>
                </>
                : null
                }
            </div>
        )
    }
}