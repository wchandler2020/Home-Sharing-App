import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Spinner from "../../utility/Spinner/Spinner";
import axios from "axios";
import Cities from "../../utility/City/Cities";
import Activities from "../../utility/Activity/Activities";
import BecomeAHost from "../../utility/PageDividers/BecomeAHost";
import Venues from "../../utility/Venues/Venues"

class Home extends Component {
    state = {
        cities: [],
        europeCities: {},
        asiaCities: {},
        usCities: {},
        activities: [],
        venues: []
    }



    async componentDidMount(){
        //const citiesURL = "http://localhost:8000/api/cities/";
        const citiesURL = `${window.apiHost}/cities/recommended`;
        const europeCities = `${window.apiHost}/cities/europe`;
        const asiaCities = `${window.apiHost}/cities/asia`;
        const usCities = `${window.apiHost}/cities/us`;
        const venueURL = `${window.apiHost}/venues/recommended`;
        const citiesPromises = [];
        

        citiesPromises.push(axios.get(citiesURL))
        citiesPromises.push(axios.get(europeCities))
        citiesPromises.push(axios.get(asiaCities))
        citiesPromises.push(axios.get(usCities))
        
        Promise.all(citiesPromises).then((data) => {
            const recommendedCities = data[0].data;
            const europeCities = data[1].data;
            const asiaCities = data[2].data;
            const usCities = data[3].data;

            this.setState({
                cities: recommendedCities,
                europeCities: europeCities,
                asiaCities: asiaCities,
                usCities: usCities
            })
        })
        const actvitiesURL = `${window.apiHost}/activities/today`;
        const cityVenues = await axios(venueURL);
        this.setState({
            venues: cityVenues.data
        })

        const activities = await axios(actvitiesURL);
        this.setState({
            activities: activities.data,
            
        })
    }
    
    render() {
        if(this.state.cities.length === 0 || this.state.venues.length === 0){
            return <Spinner />
        }
  
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="home col s12">
                            <div className="upper-fold-wrapper">
                                <div className="search-box">
                                            <SearchBox />
                                        </div>
                                    <div className="upper-fold">
                                        
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid lower-fold">
                    <div className="row">
                        <div className="col s12">
                            <Cities cities={this.state.cities} header="Recommended Destinations For You" />
                        </div>
                        <div className="col s12">
                            <Activities activities={this.state.activities} header="Happening Today"/>
                        </div>
                        <div className="col s12">
                            <Cities cities={this.state.europeCities.cities} header={this.state.europeCities.header} />
                        </div>
                        <div className="col s12">
                            <BecomeAHost />
                        </div>
                        <div className="col s12">
                            <Venues venues={this.state.venues.venues} header={this.state.venues.header}/>
                        </div>
                        <div className="col s12">
                            <Cities cities={this.state.asiaCities.cities} header={this.state.asiaCities.header} />
                        </div>
                        <div className="col s12">
                            <Cities cities={this.state.usCities.cities} header={this.state.usCities.header} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;
