import React from 'react'
import { Typography, Progress, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

class Skill extends React.Component{
    render(){
        return(
            <div className="skill" style={{marginTop:100}}>
            <Title style={{textAlign:'center'}}>Kemampuan</Title>
            <br></br>
            <Row type="flex">
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{paddingLeft:30,paddingRight:30,paddingTop:10,paddingBottom:10}}>
                        <Title level={4}>UI/UX</Title >  
                        <Progress percent={90} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{paddingLeft:30,paddingRight:30,paddingTop:10,paddingBottom:10}}>
                        <Title level={4}>Laravel</Title >  
                        <Progress percent={82} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{paddingLeft:30,paddingRight:30,paddingTop:10,paddingBottom:10}}>
                        <Title level={4}>Java</Title >  
                        <Progress percent={78} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{paddingLeft:30,paddingRight:30,paddingTop:10,paddingBottom:10}}>
                        <Title level={4}>Android</Title >  
                        <Progress percent={80} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{paddingLeft:30,paddingRight:30,paddingTop:10,paddingBottom:10}}>
                        <Title level={4}>C++</Title >  
                        <Progress percent={80} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{paddingLeft:30,paddingRight:30,paddingTop:10,paddingBottom:10}}>
                        <Title level={4}>PHP</Title >  
                        <Progress percent={77} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{paddingLeft:30,paddingRight:30,paddingTop:10,paddingBottom:10}}>
                        <Title level={4}>HTML</Title >  
                        <Progress percent={90} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{paddingLeft:30,paddingRight:30,paddingTop:10,paddingBottom:10}}>
                        <Title level={4}>React JS</Title >  
                        <Progress percent={70} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{paddingLeft:30,paddingRight:30,paddingTop:10,paddingBottom:10}}>
                        <Title level={4}>Bootstrap</Title >  
                        <Progress percent={87} />
                </Col>
            </Row>
        </div>
      )
    }
}

export default Skill;