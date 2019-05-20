import React, {Component} from 'react';
import { Typography } from 'antd';
import {Row,Col,Icon} from 'antd';
import Dedaun from './dedaun.svg';

const { Title, Paragraph } = Typography;

class Kontak extends Component {
    render() {
        return (
            <div>
                <Row guter={8}>
                        <Col offset={2} span={20}>
                            <Row type="flex">
                                <Col xs={24} sm={24} md={24} lg={24} xl={13}>
                                    <Title>Get In Touch</Title>
                                    <br/>
                                    <Paragraph>Have a such a great co</Paragraph>
                                    <br/>
                                    <Paragraph style={{fontSize:20}}><Icon type="mail" style={{marginRight:20}}/>sabdobramastyo98@gmail.com</Paragraph>
                                    <Paragraph style={{fontSize:20}}><Icon type="mobile" style={{marginRight:20}}/>0896 3348 9117</Paragraph>
                                    <Paragraph style={{fontSize:20}}><Icon type="environment" style={{marginRight:20}}/>Nganjuk, East Java, Indonesia</Paragraph>
                                    <br/>
                                    <Paragraph style={{fontSize:20}}><Icon type="github" style={{marginRight:20}}/>sabdobramastyo98</Paragraph>
                                    <Paragraph style={{fontSize:20}}><Icon type="instagram" style={{marginRight:20}}/>sabdobramastyo</Paragraph>
                                    <Paragraph style={{fontSize:20}}><Icon type="twitter" style={{marginRight:20}}/>@bersabdaaa</Paragraph>
                                    <Paragraph style={{fontSize:20}}><Icon type="facebook" style={{marginRight:20}}/>Sabdo Bramastyo</Paragraph>

                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={11}>
                                    <center><img src={Dedaun} className="home-img"/>   </center>                 
                                </Col>
                            </Row>                            
                        </Col>
                    </Row>
            </div>
        );
    }
}

export default Kontak;
