import React from 'react'
import { Button } from 'antd';
import {Row,Col, Icon} from 'antd';
import { Typography } from 'antd';
import Illustration from './illustration.svg';
import MyCarousel from '../MyCarousel';
import './page.css';
import HomeImg from './sketch.svg';
import ProfileImg from './creativity.svg';
import ColorImg from './rgb.svg';
import MyFooter from '../MyFooter';

const { Title, Paragraph } = Typography;

class Home extends React.Component{
    render(){
        return(
            <div >
                <Row guter={8}>
                <Col offset={2} span={20}>
                        <Row type="flex">
                            <Col xs={24} sm={24} md={24} lg={24} xl={11}>
                                <center><img src={Illustration} className="home-img"/>   </center>                 
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={13}>
                                <Title style={{fontSize : 70, marginBottom : 15, marginTop : 100, }}>Bersabda</Title>
                                <Paragraph style={{fontSize : 20, lineHeight : 2}}>Stay positive. A whole new world a new world, a new fantastic point of view. No one to tell us NO!</Paragraph>
                                <Button type="primary" style={{marginRight : 10, borderRadius : 100}}>Download CV</Button>
                                <Button style={{marginRight : 10, borderRadius : 100}}>More</Button>
                            </Col>
                        </Row>
                </Col>
                </Row>
                <br></br><br></br><br></br><br></br>
                <MyCarousel/>
                <div className="holder">                           
                    <Row guter={8}>
                        <Col offset={2} span={20}>
                                <Title level={1} style={{textAlign:'center'}}>What You Should Know</Title>
                                <br/><br/><br/>
                                <div className="something"> 
                                    <Row type="flex">
                                        <Col xs={24} sm={24} md={24} lg={12} xl={12} className="something-left">
                                            <Title level={2} style={{color:'white'}}>Bersabda Website</Title>
                                            <Paragraph style={{color:'white', lineHeight:2}}>I tried my best. I put everything inside this website. Even it's a prototype, but I tried as hard as I can to put everything inside this magnificent website.</Paragraph>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={12} xl={12} className="something-right">
                                            <div style={{marginBottom:30}}>
                                            <Row>
                                                <Col span={18} style={{paddingRight:30}}>
                                                    <Title level={4}>Lite Design</Title>
                                                    <Paragraph>Super minimalist experience of the website, and bring us to the step obove of beautiful</Paragraph>
                                                    <br/>   
                                                </Col>
                                                <Col span={6}>
                                                    <img src={HomeImg} width="80"/>
                                                </Col>
                                            </Row>                                      
                                            </div>
                                            <div style={{marginBottom:30}}>
                                            <Row>
                                                <Col span={6}>
                                                    <img src={ProfileImg} width="80"/>
                                                </Col>
                                                <Col span={18} style={{paddingLeft:30}}>
                                                    <Title level={4}>Easy to Use</Title>
                                                    <Paragraph>Less is more, we show you less, but we bring you more</Paragraph>
                                                    <br/>       
                                                </Col>
                                            </Row>                                      
                                            </div>
                                            <div>
                                            <Row>
                                                <Col span={18} style={{paddingRight:30}}>
                                                    <Title level={4}>Color</Title>
                                                    <Paragraph>Use soft and pale color pallete that will bring you to high definition of calm by using website</Paragraph>
                                                    <br/>
                                                </Col>
                                                <Col span={6}>
                                                    <img src={ColorImg} width="80"/>
                                                </Col>
                                            </Row>                                      
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                </div>
            </div>
        )
    }
}

export default Home;