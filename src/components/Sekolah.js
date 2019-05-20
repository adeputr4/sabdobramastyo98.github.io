import React from 'react'
import { Typography, Progress, Row, Col } from 'antd';
import './page/page.css';

const { Title, Paragraph } = Typography;

class Sekolah extends React.Component{
    render(){
        return(<div style={{width:'100%', backgroundColor:'#7663b2', paddingTop:50, paddingBottom:50}}>
        <Row guter={8}>
          <Col offset={2} span={20}>
          <Title style={{color:'#fff'}}>Riwayat Pendidikan</Title>
          <br></br><br></br>
          <Row type="flex">
              <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <div className="sekolah">
                  <img src="https://image.flaticon.com/icons/svg/167/167725.svg"/>
              </div>
              <Title level={4} style={{color:'#fff'}}>SDN Sukorejo 2 Nganjuk</Title > 
              <Paragraph style={{color:'#fff', marginBottom:30}}>2005-2011</Paragraph>                  
              </Col>
              <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <div className="sekolah">
                  <img src="https://image.flaticon.com/icons/svg/167/167753.svg"/>
              </div>     
              <Title level={4} style={{color:'#fff'}}>SMPN 3 Nganjuk</Title >   
              <Paragraph style={{color:'#fff', marginBottom:30}}>2011-2014</Paragraph>              
              </Col>
              <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <div className="sekolah">
                  <img src="https://image.flaticon.com/icons/svg/167/167729.svg"/>
              </div>         
              <Title level={4} style={{color:'#fff'}}>SMAN 1 Nganjuk</Title >   
              <Paragraph style={{color:'#fff', marginBottom:30}}>2014-2017</Paragraph>            
              </Col>
              <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <div className="sekolah">
                  <img src="https://image.flaticon.com/icons/svg/167/167718.svg"/>
              </div>                   
              <Title level={4} style={{color:'#fff'}}>Universitas Gadjah Mada</Title >   
              <Paragraph style={{color:'#fff', marginBottom:30}}>2017-Sekarang</Paragraph>  
              </Col>
          </Row>
          </Col>
        </Row>
      </div>
      )
    }
}

export default Sekolah;