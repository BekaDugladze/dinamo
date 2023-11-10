import React, { Component } from "react";
import './css/store.css';
import store from './photo/store.jpg';
import mali from './photo/mali.jpeg';
import one from './photo/1.jpeg';
import two from './photo/2.jpeg';
import thr from './photo/3.jpeg';
import fou from './photo/4.jpeg';

export default class Store extends Component{
    constructor(props) {
        super(props);
        this.state = {
            src: [one, mali, two, thr, fou],
            store: 0,
            anime: false,
        }
    }
    next = () => {
        this.setState(
            (prev) => ({
              store: (prev.store + 1) % this.state.src.length,
            }),
          );
      };
    
      prev = () => {
        this.setState(
            (prev) => ({
              store: (prev.store - 1 + this.state.src.length) % this.state.src.length,
            }),
          );
      };
    render() {
        return (
            <div id="store">
                <h1>Store & Media</h1>
                <div className="store">
                    <img src={store} alt="Dinamo Tbilisi Store" />
                    <p><a href="https://maps.app.goo.gl/egeDihMWhJzBR9UYA" target="_blank" rel="noreferrer">2 Tsereteli ave.  Dinamo Arena. Enter A, Store 3</a><br></br>
                    Tel: 218 1925<br></br>
                    Every Day: 10.00-19.00</p>
                </div>
                <div className="media">
                    <button onClick={this.prev}><span class="material-symbols-outlined">
arrow_back_ios
</span></button>
                    <img src={this.state.src[this.state.store]} alt="Dinamo Tbilisi Media" style={{animation: this.state.anime ? 'simple 1s' : 'none'}} />
                    <button onClick={this.next}><span class="material-symbols-outlined">
navigate_next
</span></button>
                </div>
            </div>
        )
    }
}
