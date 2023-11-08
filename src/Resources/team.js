import React, {Component} from "react";
import './css/team.css';
import loria from './photo/loria.png';
import anzori from './photo/anzori.png';
import kalanda from './photo/kalanda.png';
import kamaru from './photo/kamaru.png';
import keresa from './photo/keresa.png';
import kirkita from './photo/kirkita.png';
import kobuchi from './photo/kobuchi.png';
import lakvexa from './photo/lakvexa.png';
import maisura from './photo/maisura.png';
import margvela from './photo/margvela.png';
import niguchi from './photo/niguchi.png';
import nikamali from './photo/nikamali.png';
import odisharia from './photo/odisharia.png';
import osiyma from './photo/osiyma.png';
import sabaxvadaga from './photo/sabaxvadaga.png';
import sxirtla from './photo/sxirtla.png';
import xara from './photo/xara.png';
import zoranmarusic from './photo/zoranmarusic.png';
import kara from './photo/kara.jpeg';
import zullo from './photo/zullo.png';
import dg from './photo/dg.png';
import xosh from './photo/xosh.png';
import taika from './photo/taika.png';
import saxva from './photo/saxva.png';
import odika from './photo/odika.png';
import mela from './photo/mela.png';
import gagno from './photo/gagno.png';
import chuq from './photo/chuq.png';
import buxa from './photo/buxa.png';
import bera from './photo/beradze.png';
import java from './photo/javakha.jpeg';
import jalaga from './photo/jalaga.png';
import domen from './photo/domen.jpeg';

export default class Team extends Component{
    constructor(props) {
        super(props);
        this.state = {
            goalkeeper: [
                {
                    nam: 'GIORGI LORIA',
                    src: loria,
                    pos: 'Goalkeeper',
                    age: 37,
                    n: 17,
                    nationality: 'Georgian'
                },
                {
                    nam: 'DAVIT KERESELIDZE',
                    pos: 'Goalkeeper',
                    src: keresa,
                    age: 24,
                    n: 1,
                    nationality: 'Georgian'
                },
            ],
            defender: [
                
                {
                    nam: 'NIKOLOZ MALI',
                    pos: 'Defender',
                    src: nikamali,
                    age: 24,
                    n: 2,
                    nationality: 'Georgian'
                },
                {
                    nam: 'ALEKSANDRE KALANDADZE',
                    pos: 'Defender',
                    src: kalanda,
                    age: 22,
                    n: 3,
                    nationality: 'Georgian'
                },
                {
                    nam: 'SABA KHVADAIANI',
                    pos: 'Defender',
                    src: sabaxvadaga,
                    age: 20,
                    n: 4,
                    nationality: 'Georgian'
                },
                {
                    nam: 'LUKA LAKVEKHELIANI',
                    pos: 'Defender',
                    src: lakvexa,
                    age: 25,
                    n: 21,
                    nationality: 'Georgian'
                },
                {
                    nam: 'DAVIT KOBOURI',
                    pos: 'Defender',
                    src: kobuchi,
                    age: 25,
                    n: 24,
                    nationality: 'Georgian'
                },
                {
                    nam: 'GIORGI MAISURADZE',
                    pos: 'Defender',
                    src: maisura,
                    age: 21,
                    n: 31,
                    nationality: 'Georgian'
                },
                {
                    nam: 'GAGI MARGVELASHVILI',
                    pos: 'Defender',
                    src: margvela,
                    age: 27,
                    n: 33,
                    nationality: 'Georgian'
                },
            ],
            midfielder: [
                {
                    nam: 'ANZOR MEKVABISHVILI',
                    pos: 'Midfielder',
                    src: anzori,
                    age: 22,
                    n: 5,
                    nationality: 'Georgian'
                },
                {
                    nam: 'GIORGI KHARAISHVILI',
                    pos: 'Midfielder',
                    src: xara,
                    age: 27,
                    n: 12,
                    nationality: 'Georgian'
                },
                {
                    nam: 'LEVAN OSIYMASHVILI',
                    pos: 'Midfielder',
                    src: osiyma,
                    age: 21,
                    n: 16,
                    nationality: 'Georgian'
                },
                {
                    nam: 'BARNS OSEI',
                    pos: 'Midfielder',
                    src: niguchi,
                    age: 28,
                    n: 18,
                    nationality: 'Ghanaian'
                },
                {
                    nam: 'TORNIKE KIRKITADZE',
                    pos: 'Midfielder',
                    src: kirkita,
                    age: 27,
                    n: 23,
                    nationality: 'Georgian'
                },
                {
                    nam: 'LASHA ODISHARIA',
                    pos: 'Midfielder',
                    src: odisharia,
                    age: 21,
                    n: 39,
                    nationality: 'Georgian'
                },
            ],
            forward:[
                {
                    nam: 'DAVIT SKHIRTLADZE (C)',
                    pos: 'Forward',
                    src: sxirtla,
                    age: 30,
                    n: 7,
                    nationality: 'Georgian'
                },
                {
                    nam: 'USMANE CAMARA',
                    pos: 'Forward',
                    src: kamaru,
                    age: 25,
                    n: 28,
                    nationality: 'Guinean'
                },
                {
                    nam: 'ZORAN MARUSIC',
                    pos: 'Forward',
                    src: zoranmarusic,
                    age: 30,
                    n: 32,
                    nationality: 'Serbian'
                },
            ],
            MOT: 'but1',
            positions: 'but1',
            coaches: [
                {
                    nam: 'ANDRES CARRASCO',
                    pos: 'Head Coach',
                    img: kara,
                    age: 45,
                    nat: 'Spain'
                },
                {
                    nam: 'SIMONE ZULLO',
                    pos: 'Head Coach Assistant',
                    age: 37,
                    img: zullo,
                    nat: 'Italy'
                },
                {
                    nam: 'GIORGI JAVAKHISHVILI',
                    pos: 'Head Coach Assistant',
                    img: java,
                    age: 29,
                    nat: 'Georgia'
                },
                {
                    nam: 'EVGENI TAIKEVICH',
                    pos: 'Goalkeeper Coach',
                    img: taika,
                    age: 34,
                    nat: 'Belarus'
                },
                {
                    nam: 'OTAR GAGNIDZE',
                    pos: 'Phisical Coach',
                    img: gagno,
                    age: 38,
                    nat: 'Georgia'
                },
                {
                    nam: 'DOMENICO GIORDANO',
                    pos: 'Phisical Coach',
                    img: domen,
                    age: 35,
                    nat: 'Italy'
                },
                {
                    nam: 'DAVIT GELASHVILI',
                    pos: 'Match Analyst',
                    img: dg,
                    age: 30,
                    nat: 'Georgia'
                },
            ],
            staff: [
                {
                    nam: 'BESIK BERADZE',
                    pos: 'Administrator',
                    img: bera,
                    age: 55,
                    nat: 'Georgia'
                },
                {
                    nam: 'SHALVA MELADZE',
                    pos: 'Administrator',
                    age: 42,
                    img: mela,
                    nat: 'Georgia'
                },
                {
                    nam: 'DAVIT KHARABADZE',
                    pos: 'Phisician',
                    img: chuq,
                    age: 42,
                    nat: 'Georgia'
                },
                {
                    nam: 'ALEXANDR ODINTSOV',
                    pos: 'Physician-Rehabilitologist',
                    img: odika,
                    age: 34,
                    nat: 'Belarus'
                },
                {
                    nam: 'VALERI JALAHONIA',
                    pos: 'Masseur',
                    img: jalaga,
                    age: 45,
                    nat: 'Georgia'
                },
                {
                    nam: 'IRAKLI SAKHVADZE',
                    pos: 'Masseur',
                    img: saxva,
                    age: 44,
                    nat: 'Georgia'
                },
                {
                    nam: 'NIKOLOZ KHOSHTARIA',
                    pos: 'Operator',
                    img: xosh,
                    age: 33,
                    nat: 'Georgia'
                },
                {
                    nam: 'IRAKLI BUKHALI',
                    pos: 'Media Officer',
                    img: buxa,
                    age: 42,
                    nat: 'Georgia'
                },
            ],
        }
    }
    handleBut(but){
        this.setState({MOT: but});
    }
    handleTab(tab){
        this.setState({positions: tab});
    }
    render() {
        return (
            <div id="team">
            <h1>Team</h1>
            <div className="bar">
                <ul>
                    <li><button onClick={() => {this.handleBut('but1')}}
                    style={{ background: this.state.MOT === 'but1' ? '#001F4E' : 'none',
                    color: this.state.MOT === 'but1' ? 'white' : '#001F4E'}}>Main</button></li>
                    <li><button onClick={() => {this.handleBut('but2')}}
                    style={{ background: this.state.MOT === 'but2' ? '#001F4E' : 'none',
                    color: this.state.MOT === 'but2' ? 'white' : '#001F4E'}}>Dinamo 2</button></li>
                </ul>
            </div>
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
            <div className="teamDiv">
                {this.state.MOT === 'but1' && this.state.positions === 'but1' ? 
                    this.state.goalkeeper.map((footballer, index) => (   
                    <div key={index} className="footballer"
                    style={{animation: this.state.positions === 'but1' ? 'simple 1s' : 'out 1s'}}>
                        <img src={footballer.src} alt={footballer.nam}/>
                        <h2>(N:{footballer.n})  {footballer.nam}</h2>
                        <p>Age: {footballer.age} </p>
                        <p>{footballer.nationality}</p>
                    </div> 
                ))
                : null}
                {this.state.MOT === 'but1' && this.state.positions === 'but2' ? 
                    this.state.defender.map((footballer, index) => (   
                    <div key={index} className="footballer" 
                    style={{animation: this.state.positions === 'but2' ? 'simple 1s' : 'none'}}>
                        <img src={footballer.src} alt={footballer.nam}/>
                        <h2>(N:{footballer.n})  {footballer.nam}</h2>
                        <p>Age: {footballer.age} </p>
                        <p>{footballer.nationality}</p>
                    </div> 
                ))
                : null}
                {this.state.MOT === 'but1' && this.state.positions === 'but3' ? 
                    this.state.midfielder.map((footballer, index) => (   
                    <div key={index} className="footballer" 
                    style={{animation: this.state.positions === 'but3' ? 'simple 1s' : 'none'}}>
                        <img src={footballer.src} alt={footballer.nam}/>
                        <h2>(N:{footballer.n})  {footballer.nam}</h2>
                        <p>Age: {footballer.age} </p>
                        <p>{footballer.nationality}</p>
                    </div> 
                ))
                : null}
                {this.state.MOT === 'but1' && this.state.positions === 'but4' ? 
                    this.state.forward.map((footballer, index) => (   
                    <div key={index} className="footballer" 
                    style={{animation: this.state.positions === 'but4' ? 'simple 1s' : 'none'}}>
                        <img src={footballer.src} alt={footballer.nam}/>
                        <h2>(N:{footballer.n})  {footballer.nam}</h2>
                        <p>Age: {footballer.age} </p>
                        <p>{footballer.nationality}</p>
                    </div> 
                ))
                : null}
                {this.state.MOT === 'but2' && this.state.positions ? 
                    < div className="sorry">
                    <h1>Sorry! We are updating this content!</h1>
                    </div>
                : null}
            </div>
                <h1>Coaches</h1>
            <div className="teamDiv">
                {this.state.MOT === 'but1' ? 
                    this.state.coaches.map((footballer, index) => (   
                    <div key={index} className="footballer" 
                    style={{animation: this.state.positions === 'but4' ? 'simple 1s' : 'none'}}>
                        <img src={footballer.img} alt={footballer.nam}/>
                        <h2>(N:{footballer.n})  {footballer.nam}</h2>
                        <p>{footballer.pos}</p>
                        <p>Age: {footballer.age} </p>
                        <p>{footballer.nat}</p>
                    </div> 
                ))
                : null}
            </div>
            <h1>Staff</h1>
            <div className="teamDiv">
                {this.state.MOT === 'but1' ? 
                    this.state.staff.map((footballer, index) => (   
                    <div key={index} className="footballer" 
                    style={{animation: this.state.positions === 'but4' ? 'simple 1s' : 'none'}}>
                        <img src={footballer.img} alt={footballer.nam} />
                        <h2>(N:{footballer.n})  {footballer.nam}</h2>
                        <p>{footballer.pos}</p>
                        <p>Age: {footballer.age} </p>
                        <p>{footballer.nat}</p>
                    </div> 
                ))
                : null}
            </div>
            </div>
        )
    }
}