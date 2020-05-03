import React from 'react';
import './Business.css';

class Business extends React.Component {
	render() {
		return (
			<div className="Business">
  				<div className="image-container">
    					<img src={this.props.imageSrc} alt={this.props.name}/>
  				</div>
  					<h2>MarginOtto Pizzeria</h2>
  				<div className="Business-information">
    				<div className="Business-address">
      					<p>{this.props.address}</p>
      					<p>{this.props.city}</p>
      					<p>{this.props.state} {this.props.zipCode}</p>
    				</div>
    				<div className="Business-reviews">
      					<h3>{this.props.category}</h3>
      					<h3 className="rating">4.5 stars}</h3>
      					<p>{this.props.reviews} reviews</p>
    				</div>
  				</div>
			</div>
		);
	}
};

export default Business;