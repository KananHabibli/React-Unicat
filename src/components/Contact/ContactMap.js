import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

import '../../assets/css/Map.css'

const ContactMap = props => {
    return (
        <div className="contact_map">

            {/* Google Map */}
            <div className="map">
                <div id="google_map" className="google_map">
                    <div className="map_container">
                        <Map
                        google={props.google}
                        zoom={8}
                        style={{
                            width: '100%',
                            height: '300px',
                            minWidth: '50%'
                            }}
                        initialCenter={{ lat: 40.3945713, lng: 49.7847483}}
                        />
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCIwF204lFZg1y4kPSIhKaHEXMLYxxuMhA'
  })(ContactMap);
