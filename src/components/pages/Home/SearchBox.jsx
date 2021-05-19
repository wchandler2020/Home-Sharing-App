import React, { Component } from 'react'

class SearchBox extends Component {
    state = {
        where: "",
        checkIn: "",
        checkOut: "",
        numberOfGuests: ""
    }

    changeWhere = (e) => this.setState({where: e.target.value});
    checkOut = (e) => this.setState({checkIn: e.target.value});
    checkIn = (e) => this.setState({checkOut: e.target.value});
    changeGuest = (e) => this.setState({numberOfGuests: e.target.value})
    render() {
        return (
            <div className="home-search-box col m4">
                <h1>Book unique places to stay and things to do.</h1>
                <div className="form">
                    <form action="" className="search-box-form">
                        <div className="col m12">
                        <div className="form-label">Where To</div>
                            <div className="input-field" id="where">
                                <input type="text" onChange={this.changeWhere} value={this.state.where} placeholder="Anywhere"/>
                            </div>
                        </div>
                        <div className="col m6">
                            <div className="form-label">Check In</div>
                            <div className="input-field" id="where">
                                <input type="date" onChange={this.checkIn} value={this.state.checkIn} placeholder="Check In"/>
                            </div>
                        </div>
                        <div className="col m6">
                            <div className="form-label">Check Out</div>
                            <div className="input-field" id="where">
                                <input type="date" onChange={this.checkOut} value={this.state.checkOut} placeholder="Check In"/>
                            </div>
                        </div>
                        <div className="col m12">
                        <div className="form-label">Number Of Guests</div>
                            <div className="input-field" id="where">
                                <input type="number" onChange={this.changeGuest} value={this.state.numberOfGuests} placeholder="Number Of Guests"/>
                            </div>
                        </div>
                        <div className="col m12 submit-btn">
                            <div className="input-field" id="submit-btn">
                                <input type="submit" className="btn-large waves-effect waves-light red accent-2"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBox
