import React from "react";
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 15px;
  width: 90%;
`;

const Content = styled.p`
  margin: 5%;
`;

const ApodCard = (props) => {
    return (
        <div>
            <Content>Date: {props.date}</Content>
            <Content>Title: {props.title}</Content>
            <Image src={props.url}/>
        </div>
    );    
}

export default ApodCard;