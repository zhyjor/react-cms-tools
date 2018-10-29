import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'


export default class Header extends React.Component {
    componentWillMount() {
        this.setState({
            username: '河畔一角'
        })
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({ sysTime })
        },1000)
    }
    getWeatherAPIData(){
        let city = '北京';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col sapn="24">
                        <span>欢迎，河畔一角</span>
                        <a href="#:0">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}