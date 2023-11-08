import React, { Component } from "react";
import './css/history.css';
import two from './photo/1920.jpg'
import three from './photo/1930.jpeg'
import four from './photo/1940.jpeg'
import six from './photo/1960.jpeg'
import sev from './photo/1970.jpeg'
import nin from './photo/1990.jpeg'
import zer from './photo/2000.jpg'
import eig from './photo/din.jpeg'

export default class History extends Component {
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
        return (
            <div id="history">
                <h1>History</h1>
                <div className="bar">
                    <ul>
                        <li><button onClick={() => {this.handleBut('but1')}}
                        style={{ background: this.state.MOT === 'but1' ? '#001F4E' : 'none',
                        color: this.state.MOT === 'but1' ? 'white' : '#001F4E'}}>Club</button></li>
                        <li><button onClick={() => {this.handleBut('but2')}}
                        style={{ background: this.state.MOT === 'but2' ? '#001F4E' : 'none',
                        color: this.state.MOT === 'but2' ? 'white' : '#001F4E'}}>Trophies</button></li>
                        <li><button onClick={() => {this.handleBut('but3')}}
                        style={{ background: this.state.MOT === 'but3' ? '#001F4E' : 'none',
                        color: this.state.MOT === 'but3' ? 'white' : '#001F4E'}}>Top Scorers</button></li>
                    </ul>
                </div>
                {this.state.MOT === 'but1' ?
                <div className="historyDiv">
                    <div className="bar">
                        <ul>
                            <li><button onClick={() => {this.handleTab('but1')}}
                            style={{ background: this.state.positions === 'but1' ? '#001F4E' : 'none',
                            color: this.state.positions === 'but1' ? 'white' : '#001F4E'}}>1920s</button></li>
                            <li><button onClick={() => {this.handleTab('but2')}}
                            style={{ background: this.state.positions === 'but2' ? '#001F4E' : 'none',
                            color: this.state.positions === 'but2' ? 'white' : '#001F4E'}}>1930s</button></li>
                            <li><button onClick={() => {this.handleTab('but3')}}
                            style={{ background: this.state.positions === 'but3' ? '#001F4E' : 'none',
                            color: this.state.positions === 'but3' ? 'white' : '#001F4E'}}>1940-50s</button></li>
                            <li><button onClick={() => {this.handleTab('but4')}}
                            style={{ background: this.state.positions === 'but4' ? '#001F4E' : 'none',
                            color: this.state.positions === 'but4' ? 'white' : '#001F4E'}}>1960s</button></li>
                            <li><button onClick={() => {this.handleTab('but5')}}
                            style={{ background: this.state.positions === 'but5' ? '#001F4E' : 'none',
                            color: this.state.positions === 'but5' ? 'white' : '#001F4E'}}>1970s</button></li>
                            <li><button onClick={() => {this.handleTab('but6')}}
                            style={{ background: this.state.positions === 'but6' ? '#001F4E' : 'none',
                            color: this.state.positions === 'but6' ? 'white' : '#001F4E'}}>1980s</button></li>
                            <li><button onClick={() => {this.handleTab('but7')}}
                            style={{ background: this.state.positions === 'but7' ? '#001F4E' : 'none',
                            color: this.state.positions === 'but7' ? 'white' : '#001F4E'}}>1990s</button></li>
                            <li><button onClick={() => {this.handleTab('but8')}}
                            style={{ background: this.state.positions === 'but8' ? '#001F4E' : 'none',
                            color: this.state.positions === 'but8' ? 'white' : '#001F4E'}}>2000s</button></li>
                        </ul>
                    </div>
                    {this.state.positions === 'but1' ? <div className="hisInfo">
                    <img src={two} alt="dinamo 1920s" />
                    <p>The history of FC Dinamo Tbilisi begun from the autumn of 1925. Management of the sports society of Dinamo set out to form football club. In those days football was gradually becoming one of the most popular sports in the world.
                    <br></br>
                    In 1927 FC Dinamo Tbilisi established Juniors club "Norchi Dinamoeli" (young Dinamo). The club provided FC Dinamo Tbilisi with young skillful players. Numerous talented players graduated from the youngsters club, among them was the first goalkeeper who played for Dinamo in the USSR championship. The first captain - Shota Savgulidze, defender - Mikhail Minaev, forward - Vladimer Berdzenishvili and other famous players.
                    <br></br>
                    In early years in Georgia there was no official championships held, so the teams was playing friendly games amongst each other. The first match was played with Azerbaijan team Dinamo Baku on 26 January 1926. More experienced Azerbaijan squad won the match 1:0.
                    <br></br>
                    In this historical game following players starred: D.Tsomaia, A.Pochkhua, M.Blackman, I.Foidorov, N.Anakin, A.Gonel, A.Pivovarov, O.Goldobin, A.Galperin, S.Maslenikov, V.Tsomaia.
                    <br></br>
                    After 3 days Dinamo played against another Azerbaijan team, "Progress" and easily beat them 3:0. Despite the fact that in the middle years of 30s the physical preparation and skills of the Georgian players were perfect, the football federation of the Soviet Union placed FC Dinamo Tbilisi in the first league instead of superior one. Dinamo emerged as a winner in the match against, probably the best team in the USSR championship, Dinamo Moscow, score 9:5 in Tbilisi. Afterwards they beat Dinamo Leningrad 3:2.
                    <br></br>
                    The fact that Dinamo Tbilisi was not appreciated by the management of the Soviet Union football federation was clear. In the matches of first league Dinamo won 5 matches out of 6. And played draw against Stalinec Moscow.This was enough for Dinamo to qualify in the superior league.</p>
                    </ div> 
                    : null}
                    {this.state.positions === 'but2' ? <div className="hisInfo">
                    <img src={three} alt="dinamo 1930s" />
                    <p>The second championship started in autumn of 1936. Altogether Dinamo played 1424 matches in SU championship. The first match out of these 1424 was played against Dinamo Kiev 2:2. Goals: Nikolas Somov and Boris Paichadze; Team: A.Dorokhov, S.Shavgulidze (E.Nikolaishvili), B.Berdzenishvili, N.Anakin, V.Jorbenadze, G.Gagua, I.Panin, M.Berdzenishvili, B.Paichadze, M.Aslamazov and N.Somov.
                    <br></br>
The first victory in USSR championship was in the match against Spartak Moscow. On 25 September. Mikheil Berdzenishvili scored the victorious goal. In that season Dinamo took 3rd place. There was a good opportunity to become the champion, but after the loss against Krasnaia Zaria Leningrad 2:3 no chances remained. In that season Dinamo played unforgettable match in Moscow with Spartak. That was SU cup`s quarterfinal. Dinamo scored 3 goals in overtime!. They beat Spartak with the score 6:3.
<br></br>
In 1936 Dinamo qualified in SU cup`s final and unfortunately lost against Lokomotiv Moscow 0:2. Overall, in 30s Dinamo was one of the leaders of Soviet football. Club twice emerged as a vice-champion, once took third place and twice played in the final game of the Soviet Cup.
<br></br>
The first international match played with the team form Baskonia (Spain) in 1937. Despite the fact that Georgians were very enthusiastic to win, they lost the game against the experienced and modern style team 0:2.
<br></br>
"Crownless champions" - this was the epithet often used towards Dinamo players in the 30-40s: S.Shavgulidze, A.Dorokhov, S.Shudra, B.Frolov, M.Berdzenishvili, A.Kiknadze, V.Panjukov, V.Berezhnoi, G.Gagua, V.Jorbenadze, G.Jejelava.
</p>
                    </ div> 
                    : null}
                    {this.state.positions === 'but3' ? <div className="hisInfo">
                    <img src={four} alt="dinamo 1940-50s" />
                    <p>In the 50s a wonderful player Avtandil Ghoghoberidze led the team. He spent 14 years in Dinamo. He keeps the record of played games and scored goals for Dinamo with 341mathces and 127 goals. In the same period of time following players gloriously starred for Dinamo: G.Antadze, V.Marghania, N.Dziapshipa, M.Minaev, A.Zazroev, V.Eloshvili, A.Chkuaseli…
                    <br></br>
                    A prominent place in Dinamo history belongs to Andro Zhordania, an outstanding coach and selector who is considered as one of the founders of the club. "The Renaissance" of Dinamo traditions at the end of the 50s and preparation for big victories is also connected to his name. FC Dinamo`s Digomi practice ground is named after this legendary person.
                    </p>
                    </ div> 
                    : null}
                    {this.state.positions === 'but4' ? <div className="hisInfo">
                    <img src={six} alt="dinamo 1960s" />
                    <p>60s. The first big victory came in 1964 when Dinamo won the Soviet Union championship. The team had an unbeaten record of the last 15 matches in the championship. At the end Dinamo appeared to have a tie with Torpedo Moscow and the teams played additional match in Tashkent (Uzbekistan). The players held a great performance and won 4:1. Georgian Supporters called them "Golden Guys".
                    <br></br>
A popular French magazine "France Football" wrote: "Dinamo team has great players. Their technique, skills and playing intellect enables us to name them the best Eastern representatives of 'South American Football Traditions', if Dinamo were able to participate in the UEFA Champions Cup, we are certain, they would bring the hegemony of Spanish-Italian teams to an end."
<br></br>
Unfortunately no Soviet team appeared in the Champions Cup at that time…1964 Soviet Champions: S.Kotrikadze, B.Sichinava, G.Petriashvili, J.Zeinklishvili, G.Tskhovrebov, V.Rekhviashvili, G.Sichinava, S.Iamanidze, S.Metreveli, V.Barkaia, M.Meskhi, I.Datunashvili, A.Apshiev. Coach: Gavril Kachalin.
<br></br>
In the late 60s and early 70s Dinamo was completed with numerous skillful players, legendary Mikheil Meskhi, inimitable Slava Metreveli, the captain of Soviet Union national team Murtaz Khurtsilava, Revaz Dzodzuashvili, Kakhi Asatiani, Gocha Gavasheli, Guram Petriashvili, Piruz Kanteladze, brothers Nodia…
                    </p>
                    </ div> 
                    : null}
                    {this.state.positions === 'but5' ? <div className="hisInfo">
                    <img src={sev} alt="dinamo 1970s" />
                    <p>70s. The first appearance in UEFA tournament was on 13 September of 1973 against Dutch Twente Enschede. Dinamo won 3:2 in the UEFA debut match with 2 scored goals by Givi Nodia and one by David Kipiani. Following players appeared on the field in this historical match: D.Gogia, R.Dzodzuashvili, V.Chelidze, M.Khurtsilava, S.Khinchagashvili, G.Petriashvili, M.Machaidze, K.Asatiani, V.Gutsaev, L.Nodia, G.Nodia, D.Kipiani.
<br></br>
In 1973 FC Dinamo Tbilisi won their first International tournament in Spain. After beating Athletic Madrid and Benfica Lisbon, one of the best teams of that time, Dinamo won the trophy Columbus's Caravela.
<br></br>
In 1976 Nodar Akhalkatsi (further President of Georgian Football Federation) was appointed Dinamo Tbilisi head coach. It was under his leadership that the team achieved the biggest success. The head coach soon managed to create a real European team. "Great Team" - this is how Dinamo of the 1976-1982 used to addressed.
<br></br>
This team was one of the best in Europe. They were marked by mobile, fast and technical style of playing. Dinamo won the Soviet Union cup title in 1976. They defeated Ararat Erevan (Armenia) 3:0. Goals were scored by David Kipiani, Piruz Kanteladze (penalty) and Revaz Chelebadze. The team achieved the same success in 1979 when they beat Dinamo Moscow in the penalty series.
<br></br>
Dinamo Tbilisi won the SU champions title second time in 1978. In those years glorious players were in Dinamo: D.Gogia, V.Koridze, A.Chivadze, S.Khinchagashvili, D.Mujiri, T.Kostava, N.Khizanishvili, P.Kanteladze, G.Machaidze, M.Machaidze, V.Daraselia, D.Kipiani, V.Gutsaev, R.Shengelia, R.Chelebadze. In 1979 Dinamo Tbilisi played its first match in UEFA Champion's Cup tournament. First appearance was successful for Dinamo, they defeated European grand Liverpool (England).But unfortunately Dinamo did not qualify from the next round. Hamburger (Germany) appeared the winner in the next round.
                    </p>
                    </ div> 
                    : null}
                    {this.state.positions === 'but6' ? <div className="hisInfo">
                    <img src={eig} alt="dinamo 1980s" />
                    <p>80s. The highlight of Dinamo history was 13 May 1981 when they beat Carl Zeiss (DDR) in the Cup Winners` Cup final game 2:1 in Dusseldorf and brought the precious prize to Tbilisi. It was a fiesta not only for the team, but for whole Georgia as well.
<br></br>
Cup Winners` Cup winners: O.Gabelia, A.Chivadze, S.Khinchagashvili, N.Khizanishvili, G.Tavadze, V.Daraselia, Z.Svanadze, T.Sulakvelidze, V.Gutsaev, D.Kipiani, R.Shengelia, N.Kakilashvili, V.Zhvania. Goals scored by V.Gutsaev (1:1) and V.Daraselia (2:1). Helmut Schon, World Cup 1974 winner German National Team`s head coach said: "It is to be said directly, Dinamo deserved the victory. This team has top quality performers." FC Dinamo Tbilisi became eastmost European trophy holder team.
<br></br>
In 1982 Dinamo qualified to semifinal in Cup Winners` Cup tournament. In the 80s numerous skillful players appeared in the team, but various reasons they were not able to do their best: Grigol Tsaava, Mikheil Meskhi (junior), Otar Korghalidze, Gia Guruli, Mamuka Pantsulaia, Merab Zhordania, Levan Baratashvili and many other talented players.
<br></br>
Since 1983 crisis began in the history of Dinamo Tbilisi. It was hard for the club to qualify from the first rounds of the Soviet Cup. Bad performance in championship. From 1983 to1989 team appered only once on the UEFA tournaments.
<br></br>
Dinamo Tbilisi played its last game in Soviet Union championship on 27 October of 1989 against Dinamo Kiev. The fact that Dinamo played its first and last official matches in SU championship with Dinamo Kiev is kind of symbolic,even more so is that, both matches ended with draw 2:2.
                    </p>
                    </ div> 
                    : null}
                    {this.state.positions === 'but7' ? <div className="hisInfo">
                    <img src={nin} alt="dinamo 1990s" />
                    <p>90s. In 1990 Georgian Football Federation refuses to participate in Soviet Union championship. That mean that no Georgian Football Clubs would appear on Soviet tournaments. From that very moment newest history of FC Dinamo Tbilisi started.
<br></br>
The most titled football club in Georgia played its first match in Georgian National championship against Kolkheti Poti on 30 March of 1990. Surprisingly Dinamo loses the historical match with the score 0:1. In spite of the bad luck in the first round Dinamo proved its strength and appeared the winner of the first Georgian National championship. Club kept the title of the champion throughout the next 9 championships. First time club won the Georgian Cup in 1992. They beat Tskhumi Sokhumi in the final game.
<br></br>
In 1993 Dinamo makes double, became winner of Georgian Championship and Georgian Cup simultaneousely. Although, this was a great challenge, more important fact occurred in 1993. Dinamo played its first international official match representing independent Georgia. Dinamo won home match against Linfield (N.Ireland) 2:1 with goals of S.Arveladze and G.Inalishvili. The second leg in Belfast ended 1:1. Unfortunately Dinamo did not qualify to the next round. The club was suspended for two years from UEFA tournaments.
<br></br>
FC Dinamo Tbilisi continued to win Georgian championships and Georgian cup, but there was no luck on European tournaments.
<br></br>
In 1996 Dinamo qualified in 3 rounds of UEFA Cup. They beat Grevenmahcer (Luxemburg) 4:0 - 2:2, Molde (Norway) 2:1 - 0:0 and Torpedo (Russia) 1:0 - 1:1. Unfortunately club was not able to overcome Portuguese Boavista and left the tournament. This was the best result in Dinamo Tbilisi recent history (1990-2001). Later, the migration of the key players to Western European clubs caused negative results. It became harder and harder for the club to win Georgian Championship or Georgian Cup.
                    </p>
                    </ div> 
                    : null}
                    {this.state.positions === 'but8' ? <div className="hisInfo">
                    <img src={zer} alt="dinamo 2000s" />
                    <p>The famous businessman Badri Patarkatsishvili purchases FC Dinamo Tbilisi. In 2003 the club makes double and becomes the winner of Georgian Championship and Georgian Cup.
<br></br>
In 2004 Dinamo wins the Cup again and under the leadership of Croat coach Ivo Susak, wins CIS CUP in Moscow against Latvian Skonto FC (3:1). In the same year, Dinamo successfully overcomes UEFA Cup qualifying rounds, after defeating FC Bate Borisov (1:0; 3:2), SK Slavia Prague (2:0; 1:3) and Wisla Krakow (2:1, 3:4) and qualifies for the group stage, where the opponents of our team are Newcastle United FC, Sporting clube de Portugal, FC Sochaux and Panionios FC. But Dinamo loses in these four matches.
<br></br>
In next season Dinamo becomes the Champion. For the last time our team becomes a winner of Georgian Championship in 2008, when the head coach of Dinamo is Czech specialist, Dusan Uhrin.
<br></br>
In 2009 the club beats FC Olimpi and becomes the owner of Georgian Cup.
<br></br>
In January 2011, FC Dinamo Tbilisi is purchased by a businessman Roman Pipia. In this year, the club successfully plays UEFA Europa League qualifying rounds, but unfortunately Dinamo is not able to overcome AEK FC in play-off round.
<br></br>
After bad performance in Georgian championship of 2011-2012, Dinamo stays out of UEFA tournaments of current season.
<br></br>
The president of FC Dinamo Tbilisi from the first day has started the full modernization of the club.
<br></br>
The reconstruction of Digomi training ground has been conducted. Nowadays this training ground is one of the best in the region.
</p>
                    </ div> 
                    : null}
                </div>
                : null }
                 {this.state.MOT === 'but2' ? 
                <div className="sorry">
                    <h1>Sorry! We are updating this content!</h1>
                </div>
                : null
                }
                 {this.state.MOT === 'but3' ? 
                <div className="sorry">
                    <h1>Sorry! We are updating this content!</h1>
                </div>
                : null
                }
            </div>
        )
    }
}