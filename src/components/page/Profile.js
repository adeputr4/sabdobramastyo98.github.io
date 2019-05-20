import React from 'react'
import { Typography, Row, Col } from 'antd';
import Illustration from './haha.png';
import './page.css';
import Sekolah from '../Sekolah';
import Skill from '../Skill';

const { Title, Paragraph } = Typography;

class Profile extends React.Component{
    render(){
        return(
            <div style={{marginBottom : 70}}>
            <Row guter={8}>
            <Col offset={2} span={20}>
                <Row>
                    <Col xs={48} sm={24} md={24} lg={24} xl={14} style={{paddingRight:50}}>
                        <Title style={{fontSize : 50, marginBottom:0}}>Hai!</Title>
                        <br/>
                        <Paragraph style={{fontSize : 15, marginTop:0, lineHeight:2, textAlign:'justify'}}>Sebenarya saya agak bingung halaman ini mau ditulis apa, mau dibentuk gimana, layoutnya mau gimana, bingung banget.
                        Akhirnya saya putuskan to write a simple short paragraph about myself. Sounds great.
                        </Paragraph>
                        <Paragraph style={{fontSize : 15, marginTop:0, lineHeight:2, textAlign:'justify'}}>Nama saya Sabdo Bramastyo, saya adalah seorang mahasiswa D3 Ilmu Komputer dan Sistem Informasi di Universitas Gadjah Mada.
                        Saya lahir pada 31 Desember 1998, usia saya sekarang 20 tahun, terlihat tua, memang tua, semoga berkah. 
                        Di jurusan ini, bagian yang lumayan paling saya kuasai adalah Front-End. Saya gemar mendevelop hal-hal pada Front-End, mengatur tampilan agar cantik dan membuat user interface agar mudah digunakan oleh user.
                        Saya gemar mengusung konsep lite, step above diatas minimalis ataupun flat. Lite design sangat sangat sederhana, banyak white area agar tampilan terkesan lega dan menggunkan warna-warna pale/pastel.
                        </Paragraph>
                        <Paragraph style={{fontSize : 15, marginTop:0, lineHeight:2, textAlign:'justify'}}>That's it. I got you another information on another tabs. 
                        </Paragraph>
                    </Col>
                    <Col xs={48} sm={24} md={24} lg={24} xl={10}>
                        <center><img src={Illustration} className="home-img"/></center>                    
                    </Col>
                </Row>                   
                </Col>
                </Row>
                <br/><br/><br/>
                <center>
                    <Sekolah/>
                </center>
                    
                    <Row guter={8}>
                        <Col offset={2} span={20}>
                            <Skill/>
                        </Col>
                    </Row>
                
            </div>
        )
    }
}

export default Profile;