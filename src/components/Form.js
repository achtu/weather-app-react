import React from "react";
import { BsSearchHeart } from 'react-icons/bs'

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.weatherMethod}>
                <div className="form-wrap">
                <BsSearchHeart className="search-i"/>
                <input type="text" name="city" placeholder="Sarch for a city" className="city-input"/>
                <button className="form-btn">Get</button>
                </div>
            </form>
        )
    }
}
export default Form;