import React, {Component} from 'react';
// import './Header.scss'

export default class Header extends Component{
    render(){
        return(
            <header className="mainHeader">
                <h1 className="title">Studio Ghibli</h1>
                <hr className="header-break" />
                <p className="subtitle">“We each need to find our own inspiration. Sometimes it’s not easy.”</p>
                <p className="subtitle-source">-Kiki’s Delivery Service (1989)</p>
            </header>
        )
    }
}
