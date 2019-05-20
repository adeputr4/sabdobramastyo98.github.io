import React from 'react';
import { Card, Row, Col } from 'antd';
import axios from 'axios';

const { Meta } = Card;


export default class MyCard extends React.Component {
    state = {
        portofolio: []
    }

    componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/sabdobramastyo98/myapi/portofolio`)
        .then(res => {
            const portofolio = res.data;
            this.setState({ portofolio });
        })
    }

    render() {
        return(
                <div>
                        {this.state.portofolio.map(porto =>
                            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                            <center>
                            <Card 
                                style={{ width: 300 , margin : 20}}
                                cover={<img alt="example" src={porto.link} />}
                            >
                                <Meta
                                    title= {porto.title}
                                    description={porto.desc}
                                />
                            </Card>
                            </center>
                            </Col>
                        )}
                </div>
        )
    }
}