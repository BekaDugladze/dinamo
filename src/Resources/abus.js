import React, { Component } from "react";
import './css/abus.css';
import fifia from './photo/fifia.jpeg';
import bejo from './photo/bejo.jpeg';
import io from './photo/io.jpeg';
import ira from './photo/ira.jpeg';
import nato from './photo/nato.jpeg';
import tea from './photo/tea.jpeg';
import rati from './photo/rati.png';
import nino from './photo/nino.jpeg';
import zaza from './photo/zaza.jpeg';
import zuka from './photo/zuka.jpeg';
import valera from './photo/valera.jpeg';
import struc from './photo/struc.jpg';
import trd from './photo/trd.jpeg';
import trf from './photo/trf.jpeg';
import trg from './photo/trg.jpeg';
import trh from './photo/trh.jpeg';
import stad from './photo/stad.png';

export default class Abus extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active: 'tab1',
            staff: [
                {
                    src: zaza,
                    nam: 'Zaza Dolidze',
                    pos: 'CEO'
                },
                {
                    src: tea,
                    nam: 'Tea Shamatava',
                    pos: 'Deputy CEO. TMS Manager'
                },
                {
                    src: nino,
                    nam: 'Nino Giorgidze',
                    pos: 'Lawyer. Licensing Manager'
                },
                {
                    src: nato,
                    nam: 'Nato Pipia',
                    pos: 'Financial Planning & Reporting Manager'
                },
                {
                    src: bejo,
                    nam: 'Bezhan Partsvania',
                    pos: 'Security Officer'
                },
                {
                    src: ira,
                    nam: 'Irakli Bukhali',
                    pos: 'Media Manager. Supporter Liaison Office'
                },
                {
                    src: rati,
                    nam: 'Rati Terashvili',
                    pos: 'Social Media Administrator. Disabled Supporter Liaison Office'
                },
                {
                    src: valera,
                    nam: 'Valeri Gagua',
                    pos: 'Head of Youth Development Programs'
                },
                {
                    src: zuka,
                    nam: 'Zuka Rukhadze',
                    pos: 'Head of communications. Football Social Responsibility Officer'
                },
                {
                    src: io,
                    nam: 'Ioane kikabidze',
                    pos: 'Dinamo 2. Supporter liaison officer'
                },
            ],
            src: [trd, trf,trg,trh],
            index: 0,
            but: 'but1'
            }
    }
    setActive(tab){
        this.setState({active: tab});
    }
    setBut(but){
        this.setState((prevState) => (
            {index: (prevState.index + 1) % this.state.src.length,
            but: but}
        ));
    }
    render(){
        return(
            <div className="aboutUs" id="abus">
            <h1>About Us</h1>
            <div className="infoAbout">
                <div className="navAbout">
                    <ul>
                        <li
                        style={{background: this.state.active === 'tab1' ? 'white' : 'none'}}>
                            <button 
                        onClick={() => {this.setActive('tab1')}}
                        style={{
                            color: this.state.active === 'tab1' ? '#001F4E' : 'white'}}>President</button></li>
                        <li
                        style={{background: this.state.active === 'tab2' ? 'white' : 'none'}}>
                            <button
                        onClick={() => {this.setActive('tab2')}}
                        style={{
                            color: this.state.active === 'tab2' ? '#001F4E' : 'white'}}>Managment</button></li>
                        <li
                        style={{background: this.state.active === 'tab3' ? 'white' : 'none'}}>
                            <button
                        onClick={() => {this.setActive('tab3')}}
                        style={{
                            color: this.state.active === 'tab3' ? '#001F4E' : 'white'}}>Structure</button></li>
                        <li
                        style={{background: this.state.active === 'tab4' ? 'white' : 'none'}}>
                            <button
                        onClick={() => {this.setActive('tab4')}}
                        style={{
                            color: this.state.active === 'tab4' ? '#001F4E' : 'white'}}>Training Ground</button></li>
                        <li
                        style={{background: this.state.active === 'tab5' ? 'white' : 'none'}}>
                            <button
                        onClick={() => {this.setActive('tab5')}}
                        style={{
                            color: this.state.active === 'tab5' ? '#001F4E' : 'white'}}>Stadium</button></li>
                       </ul>
                </div>
                { this.state.active === 'tab1' ? 
                <div className="textAbout">
                    <img src={fifia} alt="Roman Fifia" />
                    <p>Roman Pipia - The president of FC Dinamo Tbilisi since January, 2011 .
                    <br></br>
                        Date of Birth – 08-04-1966
                        <br></br>
                        The president of FC Dinamo Tbilisi from the first day has started the full modernization of the club.
                        <br></br>
                        The reconstruction of Digomi training ground has been conducted. Nowadays this training ground is one of the best in the region.
                        <br></br>
                        The stadium Dinamo Arena was reconstructed as well. The field surface was changed with new specially adapted surface for our climate. The reconstruction works are still underway and after its end - Dinamo Arena will become the sports center of the capital.
                        <br></br>
                        Renovated Youths Football Academy began its functioning.
                        <br></br>
                        The most important basis is laid for the future prosperity in Dinamo.</p>
                </div>
                :<></>}
                {this.state.active === 'tab2' ? 
                <div className="teamDivab">
                 {this.state.staff.map((staffer) => (
                    <div>
                        <div className="footballer">
                            <img src={staffer.src} alt={staffer.nam} />
                            <h3>{staffer.nam}</h3>
                            <p>{staffer.pos}</p>
                        </div>
                    </div> 
                 ))
                }   
                </div>
                : <></>}
                {this.state.active === 'tab3' ? 
                <div className="divAbout">
                    <img src={struc} alt='structure of Dinamo' />
                </div> 
                : <></>}
                {this.state.active === 'tab4' ? 
                <div className="divAbout">
                    <img src={this.state.src[this.state.index]} alt='structure of Dinamo' />
                    <button onClick={() => {this.setBut('but1')}} className="manual"><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                </div> 
                : <></>}
                {this.state.active === 'tab5' ? 
                <div className="divAbout">
                    <img src={stad} alt='Dinamo Arena' />
                    <p className="arenaP">Address: 2, Tsereteli Ave.<br></br>
                        Postal Code: 0112<br></br>
                        City: Tbilisi<br></br>
                        Phone: +995 (32) 250 50 04<br></br>
                        The Ticket Office: +995 (32) 218 26 27; +995 (32) 218 27 26<br></br>
                        Fax: +995 (32) 2507983<br></br>
                        E-mail: info@dinamoarena.ge<br></br>
                        Built: 1936 <br></br>
                        Architect: Gia Kurdiani, Archil Kurdiani <br></br>
                        Capacity: 54 139 <br></br>
                        Surface: Grass <br></br>
                        Facts: Opened -1936; Reconstruction -1976; Renewed - 2006; Dinamo Arena – Named after Boris Paitchadze Stadium - 2011.<br></br>
                        <br></br>
                        Dinamo Arena | Rules and Regulations
                        <br></br>
                        The following is prohibited inside the venue:
                        <br></br>
                        1. To be in possession of any of the following items:
                        <br></br>
                        Weapons of any kind.<br></br>
                        Glass and metal containers of any kind (bottles, cans, etc).<br></br>
                        Banners and flags that are larger than 2m x 1.5m in size.<br></br>
                        Megaphones or gas horns.<br></br>
                        All kinds of pyrotechnics and other flammable materials.<br></br>
                        Laser devices.<br></br>
                        Any other object which may pose a safety hazard to spectators or event participants.<br></br>
                        2. To stand on the seats.
                        <br></br>
                        3. To use banners, clothes or other accessories that have political, discriminatory or offensive content.
                        <br></br>
                        4. To enter the field of play (the pitch or the running track).
                        <br></br>
                        5. To bring unauthorised advertising or commercial items into the stadium, or to attempt to sell unauthorised goods.
                        <br></br>
                        6. To conduct unauthorised televised or radio broadcasting.
                        <br></br>
                        7. To block entrances and exits, stairs, or any other pedestrian access routes.
                        <br></br>
                        8. To be inside the stadium whilst intoxicated.
                        <br></br>
                        9. To occupy any seat other than the one stated on the ticket.
                        <br></br>
                        10. To refuse to produce the ticket if requested by a steward or a law enforcement agent.
                        <br></br>
                        11. Throwing anything on competition ground (field, running tracks)
                        <br></br>
                        Abrogation of above mentioned demands will be finished with the arrest of disturber and taking measures established by Georgian legislation. Among them in case fining the third person (Georgian Football Federation or/and other person) because of the accused he will be obliged to pay compensation.
                        <br></br>
                        The above mentioned regulations are renewable and might be corrected.
                        <br></br>
                        <br></br>
                        Dinamo Arena - History
                        <br></br>
                        Construction of the stadium started in autumn 1929 although the project was soon suspended. The Construction was renewed in 1933 (chief architect-Archil Kurdiani). Finally it finished on October 12, 1935 and envisaged 23 000 spectators.
                        In 1960-1962 the stadium was reconstructed (architect-Archil Kurdiani) and the number of spectators increased to 36 000. After reconstruction the stadium was officially opened on July 27, 1962. Dinamo Tbilisi hosted FC Dinamo Leningrad in Soviet championship XIII round and defeated it with minimal score 1:0. (Pereturin scored auto-goal).
                        In 1969-1976 Dinamo Arena was reconstructed again (architects-Archil Kurdiani and Gia Kurdiani, constructor-Shalva Gazashvili). Interface of the stadium has changed and number of subscribers increased to 78 000. During reconstruction period FC Dinamo Tbilisi played home matches at Locomotive stadium. On September 19, 1976the stadium was officially opened with 1/16 final match of Cup Winners’ Cup. Dinamo Tbilisi hosted Welsh Cardiff and defeated to with the score 3:0. (Gutsaev, Kipiani and Kanteladze scored in this match).
                        The final reconstruction of the stadium was held in 2006 (architects-Gia Kurdiani and Archil Kurdiani Junior) and number of spectators was changed to 55 000. The stadium was opened with European championship qualifying match. On September 6, 2006 Georgian national team hosted French national team and was defeated with the score 3:0. In 2012 the turf of Dinamo Arena was changed. Energy and irrigation systems were also fully rehabilitated. The new lighting was made that satisfies demands of high standards. VIP box has fully changed and fixed according to UEFA standards.
                        <br></br>
                        Official name of the stadium:
                        1935 - 1936 Dinamo Stadium
                        1937 - 1953 Beria  Dinamo Stadium
                        1954 - 1968 Dinamo Stadium
                        1976 - 1990 Lenin Dinamo Stadium
                        1990 - 2011 Boris Paitchadze National Stadium
                        From 2011  - Boris Paitchadze Dinamo Arena
                        <br></br>        
                        The maximal number of spectators at Dinamo Arena was recorded on November 7, 1979. 130 000 spectators attended UEFA Champions League 1/8 final match in which Dinamo Tbilisi hosted Hamburger SV. The match finished 2-3. Gutsaev, Keegan, Hrubesch, Kipiani and Buljan scored goals.</p>    
                </div> 
                : <></>}
            </div>
            </div>
        )
    }
}