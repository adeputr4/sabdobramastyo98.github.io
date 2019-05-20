import React, {Component} from 'react';
import MyCard from "../MyCard";
import { Card, Icon, Avatar, Row, Col } from 'antd';
import axios from 'axios';

class Portofolio extends Component {

    render() {
        return (
            <div>
                <Row guter={8}>
                <Col offset={2} span={20}>
                <Row>
                    <MyCard />
                </Row>
                </Col>
                </Row>
            </div>
        );
    }
}

export default Portofolio;
