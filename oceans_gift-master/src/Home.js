import React, { Component } from "react";
import store from './static/Store1.jpg';
import styled from 'styled-components';


const LogoContainer = styled.div`
    position:center;
    width: 792px;
    height: 690px;`;

class Home extends Component {
    render() {
        return(
            <LogoContainer>
                <img className="store" src={store} alt="Store front of Oceans"  width="792px"/>
            </LogoContainer>
        );
    }
}

export default Home;
