import React from 'react'
import {Row,Col, Icon} from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

class MyFooter extends React.Component{
    render(){
        return(
            <div >
                <div className="footer">
                    <Row guter={8}>
                        <Col offset={2} span={20}>
                        <Title level={2} style={{color:'white'}}>BERSABDA</Title>
                        <br/>
                            <Row type="flex">
                                <Col xs={24} sm={24} md={24} lg={8} xl={8} style={{paddingRight:60}}>
                                    <Paragraph style={{lineHeight:2, color:'#969696'}}>Bersabda Web adalah sebuah web react yang dibuat sepenuh hati untuk memenuhi kebutuhan tugas mata kuliah Praktikum Web 3</Paragraph>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={8} xl={8} style={{paddingRight:60}}>
                                    <Paragraph style={{lineHeight:2, color:'#969696'}}><b>ABOUT ME</b> <br/>A simple guy, live in a delicate world, love to eat any food, but survived</Paragraph>
                                </Col>                                
                                <Col xs={24} sm={24} md={24} lg={8} xl={8} style={{paddingRight:60}}>
                                    <Icon type="instagram" style={{fontSize:30, color:'#969696', marginRight:40}}/>
                                    <Icon type="twitter" style={{fontSize:30, color:'#969696', marginRight:40}}/>
                                    <Icon type="github" style={{fontSize:30, color:'#969696'}}/>
                                </Col>
                            </Row>
                            <br/><br/><br/>
                            <Row type="flex">
                                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                                    <Paragraph style={{color:'white', fontWeight:600, fontSize:15}}>HOME</Paragraph>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                                    <Paragraph style={{color:'white', fontWeight:600, fontSize:15}}>PROFILE</Paragraph>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                                    <Paragraph style={{color:'white', fontWeight:600, fontSize:15}}>PORTOFOLIO</Paragraph>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                                    <Paragraph style={{color:'white', fontWeight:600, fontSize:15}}>CONTACT</Paragraph>
                                </Col>
                            </Row>
                        </Col>
                    </Row>                
                </div>   
            </div>
        )
    }
}

export default MyFooter;