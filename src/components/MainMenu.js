import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button, Icon } from 'antd';
import {Link} from 'react-router-dom';
import Logo from './logo.png';

class Navbar extends Component {
    state = {
        current: 'mail',
        visible: false
    };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <nav className="menuBar">
                <div className="logo">
                    <Link to='/home' style={{textDecoration:'none'}}>Bersabda</Link>
                </div>
                <div className="menuCon">
                    <div className="rightMenu">
                        <LeftMenu />
                    </div>
                    <Button className="barsMenu" type="primary">
                        <span className="barsBtn">
                            <Icon type="star" theme="filled" />
                        </span>
                    </Button>
                    <Drawer
                        title="Other Menu"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                    {/*  di sini isikan apa yang dimasukkan kedalam drawer  */}
                    </Drawer>
                </div>
            </nav>
        );
    }
}
export default Navbar;