import React, { Component } from 'react';
import axios from "axios";
import Point from './Point';
import {Link} from "react-router-dom";
import Map from "../../utility/GoogleMap/Map";
class SingleVenue extends Component {

    state = {
        singleVenue: {},
        points: []
    }

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

    async componentDidMount(){
        const vId = this.props.match.params.vid
        const url = `${window.apiHost}/venue/${vId}`;
        const axiosResponse = await axios.get(url);
        const singleVenue = axiosResponse.data;
        const pointsUrl = `${window.apiHost}/points/get`;
        const pointsAxiosResponse = await axios.get(pointsUrl);
        
        const points = singleVenue.points.split(',').map((point,i)=>{
            return(<Point key={i} pointDesc={pointsAxiosResponse.data} point={point} /> )
        })
        this.setState({
            singleVenue: singleVenue,
            points: points
        })
    }

    changeNumberOfGuests = (e)=>{this.setState({numberOfGuests: e.target.value})}
    changeCheckIn = (e)=>{this.setState({checkIn: e.target.value})}
    changeCheckOut = (e)=>{this.setState({checkOut: e.target.value})}
    reserveNow = (e) => {
        console.log("it is working")
    }
    render() {
        const sv = this.state.singleVenue;
        return(
            <>
            <div className="row single-venue">
                <div className="text-container">
                <h1 className="main-header">5050 Sea Haven * Oceanfront * Walk to Restaurant & Avalon Pier</h1>
                <p>2 reviews Kill Devil Hills, North Carolina, United States</p>
                </div>
                <div className="col s12 image-grid-container">
                    <Link to="/" className="image_1 image">
                        <img src={sv.imageUrl} />
                    </Link>
                    <Link to="/" className="image_2 image">
                        <img src={sv.imageUrl} />
                    </Link>
                    <Link to="/" className="image_3 image">
                        <img src={sv.imageUrl} />
                    </Link>
                    <Link to="/" className="image_4 image">
                        <img src={sv.imageUrl} />
                    </Link>
                    <Link to="/" className="image_5 image">
                        <img src={sv.imageUrl} />
                    </Link>
                </div>
                <div className="col s8 location-details offset-s2">
                    <div className="col s8 left-details">
                        <div className="location">{sv.location}</div>
                        <div className="title">{sv.title}</div>
                        <div className="guests">{sv.guests}</div>

                        <div className="divider"></div>

                        {this.state.points}

                        <div className="details">{sv.details}</div>
                        <div className="amenities">{sv.amenities}</div>
                    </div>

                    <div className="col s4 right-details">
                        <div className="price-per-day">${sv.pricePerNight} <span>per day</span></div>
                        <div className="rating">{sv.rating}</div>
                        <div className="col s6">
                            Check-In
                            <input type="date" onChange={this.changeCheckIn} value={this.state.checkIn} />
                        </div>
                        <div className="col s6">
                            Check-Out
                            <input type="date" onChange={this.changeCheckOut} value={this.state.checkOut} />
                        </div>     

                        <div className="col s12">
                            <select className="browser-default" onChange={this.changeNumberOfGuests} value={this.state.numberOfGuests}>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guest</option>
                                <option value="3">3 Guest</option>
                                <option value="4">4 Guest</option>
                                <option value="5">5 Guest</option>
                                <option value="6">6 Guest</option>
                                <option value="7">7 Guest</option>
                                <option value="8">8 Guest</option>
                            </select>
                        </div>
                        <div className="col s12 center">
                            {/* {this.props.auth.token ?
                                <button onClick={this.reserveNow} className="btn red accent-2">Reserve</button>   
                            : <div>You must <span className="text-link" onClick={()=>{this.props.openModal('open',<Login />)}}>Log in</span> to reserve</div>
                            } */}
                            <button onClick={this.reserveNow} className="btn red accent-2">Reserve</button>   
                        </div>            
                    </div>
                </div>
            </div>
            <hr className="divider"/>
                <div className="map-wrapper">
                    <h1 >Location</h1>
                    <div className="row single-venue-location">
                        <Map />
                    </div>
                    <div className="map-description">
                        <h2>Kill Devil Hills, North Carolina, United States</h2>
                        <p>Local Attractions are on no shortage on the Outer Banks and they are so close by! Climb the sand dunes and fly your kite at Jockey’s
                            Ridge State Park. Visit the site of the first powered flights by Orville and Wilbur Wright at the Wright Brothers National Memorial. 
                            Take a deep sea fishing charter boat from Oregon Inlet. Climb the Bodie Island Lighthouse or take a scenic drive through the Cape 
                            Hatteras National Seashore. Stroll to the end of the 1,000 foot long..{" "}
                            <a href="" className="show-more">Show More <i class="material-icons">arrow_drop_down</i></a>
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default SingleVenue
