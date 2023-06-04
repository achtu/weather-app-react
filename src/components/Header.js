import React from "react";
import { TbTemperatureCelsius } from 'react-icons/tb'
import { TbTemperatureFahrenheit } from 'react-icons/tb'
import { TbTemperature } from 'react-icons/tb'
import { TbLocationFilled } from 'react-icons/tb'


class Header extends React.Component{
    render(){
        return(
            <div className="header-wrap">
                <div className="f-c">
                <TbTemperature className="temp-i"/>
                <TbTemperatureCelsius className="temp-c-i"/>
                <TbTemperatureFahrenheit className="temp-f-i"/>
                </div>
                <div className="my-loc">
                    <TbLocationFilled/>
                    <p className="my-loc-p">my location</p>
                </div>
                
            </div>

        )
    }
}
export default Header;