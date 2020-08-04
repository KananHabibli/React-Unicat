import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

import '../../assets/css/Map.css'

export class ContactMap extends Component {


    
    render() {
        const mapStyles = {
            width: '100%',
            height: '300px',
            minwidth: '50%'
          };
        return (
            <div className="contact_map">

                {/* Google Map */}
                <div class="map">
                    <div id="google_map" class="google_map">
                        <div class="map_container">
                            <Map
                            google={this.props.google}
                            zoom={8}
                            style={mapStyles}
                            initialCenter={{ lat: 40.3945713, lng: 49.7847483}}
                            />
                        </div>
                    </div>
                </div>
                
    
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCIwF204lFZg1y4kPSIhKaHEXMLYxxuMhA'
  })(ContactMap);
