import React from "react";
import styled from 'styled-components';

const Content = styled.p`
  margin: 5%;
`;

const InfoCard = (props) => {
    return (
        <div>
            <Content>{props.explanation}</Content>
            <Content>Copyright: {props.copyright}</Content>
        </div>
    );    
}

export default InfoCard;