import React, { Component } from "react";
import apparel from './static/apparel.jpg';
import gear from './static/board.jpg';
import souv from './static/souvenirs.jpg';
import towel from './static/towels.jpg';
import bev from './static/drinks1.jpg';
import styled from 'styled-components';

const Items = styled.div`
    display:flex;
    flex-direction: row;
    margin-left: 30px;
    justify-content: flex-start;
    width: 212px;
    height: 202px;
    row-gap:20px;
    column-gap:20px;`;

const Photo = styled.img`
    width:212px;
    height:202px;`;
    
class Merch extends Component {
    render() {
        return(
            <Items>
                <Photo className="merchandise" src={apparel} alt="beach outfit"></Photo>
                <Photo className="merchandise" src={gear} alt="boogie board" />
                <Photo className="merchandise" src={souv} alt="souvenir magnets" />
                <Photo className="merchandise" src={towel} alt="beach towels stacked" />
                <Photo className="merchandise" src={bev} alt="soda bottles" />
                </Items>
        );
    }
}

export default Merch;