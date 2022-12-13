import React from 'react';
import styled from 'styled-components';
// import Chart from './Chart'

const CardContainer = styled.div`
    width: 500px;
    height: 400px;
    left: 252px;
    top: 191px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

`

const CardText = styled.div`
    padding: 1rem 2rem;
  

`

const Title = styled.p`
    font-weight: 700;
    font-size: 1rem;
    line-height: 30px;
    color: #5B5B5B;
    margin-bottom:0px;
`
const SubTitle = styled.p`
    font-weight: 00;
    font-size: 18px;
    color: #757575;
    margin: 0px;
`

const ScanAnalyzer = () => {
    return (
        <CardContainer>
            <CardText>
                <Title>Scan_Type :</Title>
                <SubTitle>APKPure_v3.18.12_apkpure.com.apk</SubTitle>
                
           
                <Title>Analyzer :</Title>
                <SubTitle>Static_Analzer</SubTitle>
                

            </CardText>
            {/* <Chart/> */}
               
                
        </CardContainer>
    );
}



export default ScanAnalyzer;