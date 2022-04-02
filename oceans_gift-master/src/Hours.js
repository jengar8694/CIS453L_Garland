import React, { Component } from "react";
import map from './static/map.jpg';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;`;

const Hour = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;`;

const Location =styled.div`
    display: flex;
    flex-direction: column;`;

class Hours extends Component {
    render () {
        return(
            <Container>
                <Hour>
                    <h2> Hours of Operation</h2>
                    <h3>In Season ( May - September)</h3>
                    <p>Monday - Thursday    7:00am - 11:00pm</p>
                    <p>Friday - Sunday        7:00am - 3:00 am</p>
                    <h3>Off Season ( October - April )</h3>
                    <p>Monday - Thursday     10:00am - 8:00pm</p>
                    <p>Friday - Sunday        8:00am - 9:00 pm</p>
                </Hour>
                <Location>
                    <h2>Location</h2>
                    <div>
                    <img className="map" src={map} alt="google map location"/>
                    </div>
                    <div>
                        <h3>3212 Atlantic Ave. Virginia Beach, VA 32451</h3>
                    </div>
                </Location>
            </Container>
        );
    }
}

export default Hours;