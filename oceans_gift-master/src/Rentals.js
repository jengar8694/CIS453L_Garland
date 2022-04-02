import React, { Component } from "react";
import bike from './static/cruiserbike.jpg';
import surry from './static/surry.jpg';
import styled from 'styled-components';

const Table = styled.table`
    background:powderblue;
    height: 170px;
    width: 300px;`;

const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    align-content: stretch;`;

const Photo = styled.img`
width: 223px;
height: 223px;
left: 144px;
top: 289px;`;

const Reservation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    align-content: stretch;
    margin-right:50% ;
    margin-left: 10%; 
    row-gap: 10px;`;

const Group  = styled.div`
    display:flex;
    flex-direction:row;
    column-gap: 10px;`;

const Button = styled.button`
    background-color:powderblue;
    border-radius:20px;
    color:navyblue;`;

const Check = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: nowrap;
    column-gap: 30px;`;

const Text = styled.label`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    color:darkblue;
    background-color:powderblue;
    border-radius:8px;
    width: 193px;
    height: 35px;
    left: 122px;
    top: 691px;`;



class Rentals extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <div>
                    <h2>Bike Rentals</h2>
                    <br/>
                </div>
                <br/>
                <br/>
                    <Info>
                        <div>
                            <Photo src={bike} alt="Beach cruiser bike" />
                        </div>
                        <div>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Cruiser</th>
                                        <th></th>
                                        <th>Surry</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Adult / Child</td>
                                        <td></td>
                                        <td>Small / Large</td>
                                    </tr>
                                    <tr>
                                        <td>$10 / $8</td>
                                        <td>Hourly</td>
                                        <td>$25 / $35</td>
                                    </tr>
                                    <tr>
                                        <td>$25 / $20</td>
                                        <td>Daily</td>
                                        <td>$40 / $50</td>
                                    </tr>
                                    <tr>
                                        <td>$100 / $80</td>
                                        <td>Weekly</td>
                                        <td>-------</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div>
                            <Photo src={surry} alt="Surry bike" />
                        </div>
                 </Info>
             <div>
                        <p>Reserve Yours Today! Check below for availability.</p>
                 </div>
                 <Check>
                    <Reservation>
                        <Group>
                        <Text for="child" >Child bike:</Text>
                        <input type="text" id="child" size="3" maxLength={2}/>
                        </Group>
                        <Group>
                        <Text for="adult">Adult bike:</Text>
                        <input type="text" id="adult" size="3" maxLength={2}/>   
                        </Group>
                        <Group>
                        <Text for="sSurry">Small Surry:</Text>
                        <input type="text" id="sSurry" size="3" maxLength={2}/>   
                        </Group>
                        <Group>
                        <Text for="lSurry">Large Surry:</Text>
                        <input type="text" id="lSurry" size="3" maxLength={2}/> 
                        </Group> 
                    </Reservation>
                    <div id="submit">         
                        <input type="date"/>
                        <Button>SUBMIT</Button>
                    </div>
                 </Check>
            </div>
        );
    }
}

export default Rentals;