import React, { Component } from 'react';
import './css/starting.css';
import stad from './photo/stad.png';
import logo from './photo/logo.png';
import team from './photo/team.png';
import acd from './photo/acd.jpeg';
import din from './photo/din.jpeg';
import store from './photo/store.jpg';
import mali from './photo/file.jpeg';
import arena from './photo/arena.jpg';
import loria from './photo/loria.png';
import sabu from './photo/saburtalo.png';
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


export default class Start extends Component{
    constructor(props) {
        super(props);
        this.state = {
            homeContent: [
                {
                    img: stad,
                    h: 'About Us'
                },
                {
                    img: team,
                    h: 'Team'
                },
                {
                    img: acd,
                    h: 'Academy'
                },
                {
                    img: din,
                    h: 'History'
                },
                {
                    img: store,
                    h: 'Store'
                },
                {
                    img: mali,
                    h: 'Media'
                },
                {
                    img: arena,
                    h: 'Contact'
                }
            ],
            
            currentIndex: 0,
            isAnimating: false,
            team: [
                {
                    nam: 'GIORGI LORIA',
                    src: loria,
                    pos: 'Goalkeeper'
                },
                {
                    nam: 'DAVIT KERESELIDZE',
                    pos: 'Goalkeeper',
                    src: keresa
                },
                {
                    nam: 'NIKOLOZ MALI',
                    pos: 'Defender',
                    src: nikamali
                },
                {
                    nam: 'ALEKSANDRE KALANDADZE',
                    pos: 'Defender',
                    src: kalanda
                },
                {
                    nam: 'SABA KHVADAIANI',
                    pos: 'Defender',
                    src: sabaxvadaga
                },
                {
                    nam: 'LUKA LAKVEKHELIANI',
                    pos: 'Defender',
                    src: lakvexa
                },
                {
                    nam: 'DAVIT KOBOURI',
                    pos: 'Defender',
                    src: kobuchi
                },
                {
                    nam: 'GIORGI MAISURADZE',
                    pos: 'Defender',
                    src: maisura
                },
                {
                    nam: 'GAGI MARGVELASHVILI',
                    pos: 'Defender',
                    src: margvela
                },
                {
                    nam: 'ANZOR MEKVABISHVILI',
                    pos: 'Midfielder',
                    src: anzori
                },
                {
                    nam: 'GIORGI KHARAISHVILI',
                    pos: 'Midfielder',
                    src: xara
                },
                {
                    nam: 'LEVAN OSIYMASHVILI',
                    pos: 'Midfielder',
                    src: osiyma
                },
                {
                    nam: 'BARNS OSEI',
                    pos: 'Midfielder',
                    src: niguchi
                },
                {
                    nam: 'TORNIKE KIRKITADZE',
                    pos: 'Midfielder',
                    src: kirkita
                },
                {
                    nam: 'LASHA ODISHARIA',
                    pos: 'Midfielder',
                    src: odisharia
                },
                {
                    nam: 'DAVIT SKHIRTLADZE (C)',
                    pos: 'Forward',
                    src: sxirtla
                },
                {
                    nam: 'USMANE CAMARA',
                    pos: 'Forward',
                    src: kamaru
                },
                {
                    nam: 'ZORAN MARUSIC',
                    pos: 'Forward',
                    src: zoranmarusic
                },
            ],
            teamIndex : 0,
            ul: false
        }
    }
    handleUl(){
        this.setState((prevState) => ({
            ul: !prevState.ul
        }))
    }
    team(){
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                teamIndex: Math.floor(Math.random() * team.length) % prevState.team.length
            }))
        }, 3000)
    }
    componentDidMount() {
        this.interval = setInterval(() => {
          this.setState(
            (prevState) => ({
              currentIndex: (prevState.currentIndex + 1) % this.state.homeContent.length,
              isAnimating: true
            }),
            () => {
              setTimeout(() => {
                this.setState({ isAnimating: false });
              }, 500); // 0.5s matches your animation duration
            }
          );
        }, 3500);
        this.team()
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    render(){
        const imageClass = this.state.isAnimating ? 'simple fade-out' : 'simple fade-in';
        return(
            <>
            <div className="header">
                <ul id='mediaUl' style={{display: this.state.ul ? 'flex' : 'none',
                animation: this.state.ul ? 'height 1s' : 'none'}}>
                    <li><a href='#abus'>About Us</a></li>
                    <li><a href='#team'>Team</a></li>
                    <li><a href='#academy'>Academy</a></li>
                    <li><a href=''>History</a></li>
                    <li><a href=''>Store</a></li>
                    <li><a href=''>Media</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
                <ul>
                    <li><a href='#abus'>About Us</a></li>
                    <li><a href='#team'>Team</a></li>
                    <li><a href='#academy'>Academy</a></li>
                    <li><a href=''>History</a></li>
                    <li><a href=''>Store</a></li>
                    <li><a href=''>Media</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
                <div className='mediaNav'>
                    <a href='#main'>
                        <span class="material-symbols-outlined">home</span>
                    </a>
                    <img src={logo} alt='Dinamo Tbilisi' />
                    <button onClick={() => {this.handleUl()}}>
                        <span class="material-symbols-outlined">menu</span>
                    </button>    
                </div>
            </div>
            <div className="cont" >
                <div className="main" id='main'>
                    <img src={this.state.homeContent[this.state.currentIndex].img} alt='Dinamo Tbilisi' className={imageClass}/>
                    <div className='afterMain'>
                        <div className="main-text">
                            <img className='logo' src={logo} alt='logo of Dinamo Tbilisi' />
                            <h1>{this.state.homeContent[this.state.currentIndex].h}</h1>
                        </div>
                        <div className='nextMatch'>
                            <h1>Next Match</h1>
                            <div className='teams'>
                                <div className='homeTeam'>
                                    <img id='homeTeam' src={logo} alt='dinamo Tbilisi' />
                                    <p>Dinamo Tbilisi</p>
                                </div>
                                <div className='homeTeam'>
                                    <img id='homeTeam' src={sabu} alt='saburtalo' />
                                    <p>Saburtalo</p>
                                </div>
                                <div className='homeTeam'>
                                    <h1>20:00</h1>
                                    <p>Tbilisi, Dinamo Arena</p>
                                    <p>23.10.2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='teamMember'>
                    <h1>SQUAD</h1>
                    <img className='member' src={this.state.team[this.state.teamIndex].src} alt={this.state.team[this.state.teamIndex].nam} />
                    <h2>{this.state.team[this.state.teamIndex].nam}</h2>
                    <h3>{this.state.team[this.state.teamIndex].pos}</h3>
                </div>
            </div>
            </>
        )
    }
}