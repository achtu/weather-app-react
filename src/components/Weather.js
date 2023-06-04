import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather-card-wrap">
        { this.props.city && <div>
        <p className="location-disp">
           {this.props.city}, {this.props.country}
        </p>
        <p className="temperature-disp">Temperature <span className="temp-result">{this.props.temp}</span></p>
       
        <p className="sunset-disp">Sunset <span className="sunset-result">{this.props.sunset}</span></p>
        <p className="error-disp"> <span className="error-result">{this.props.error}</span></p>
        </div>
  }
      </div>
    );
  }
}
export default Weather;
