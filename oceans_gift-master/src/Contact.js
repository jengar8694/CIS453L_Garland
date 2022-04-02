import React, { Component } from "react";
import styled from 'styled-components';


const Layout = styled.div`
    display: flex;
    flex-direction: row;
    row-gap: 20px;
    column-gap:60px;
    justify-content:center;`;
    

const Comments = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width:522px;`;

const Input = styled.input`
    width: 530px;
    background-color:#C1EAF6; `;

const Textarea= styled.textarea`
    width: 530px;
    height: 200px;
    background-color:#C1EAF6`;

const Button = styled.button`
    background-color:#C1EAF6;
    border-radius:20px;
    color:black;
    width: 173px;
    height: 40px;`;


const Location = styled.div`
    display: flex;
    flex-direction: column;
    width: 522px;
    height: 181px;`;

const Details = styled.p`
    width: 50%;`;


class Contact extends Component {
    render() {
        return(
            <Layout>
                    <Comments>
                        <label for="email">Email</label>
                        <Input type="text" id="email" size="40" maxLength="30"/>
                        <label for="subject">Subject</label>
                        <Input type="text" id="subject" size="15" maxLength="30"/>
                        <Textarea wrap="virtual" id="comments" rows="3"col="10" maxLength="100"/>
                        <br/>
                        <Button>SUBMIT</Button>
                    </Comments>
                <Location>
                    <Details>757-122-4562</Details>
                    <Details>3212 Atlantic Ave. Virginia Beach, VA 32451</Details>
                </Location>
            </Layout>
        );
    }
}

export default Contact;
