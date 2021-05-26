import React from "react";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  DirectionsRenderer,
} from "react-google-maps";
import { withProps, compose, lifecycle } from "recompose";

const defaultMapOptions = {
  fullscreenControl: false,
  zoomControl: false,
  streetViewControl: false,
  mapTypeControl: false,
};

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyA4ZZNjoY-DK2odO_2ZHpp-ju479SYq29s&v=3.exp",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: "Castelnovi 1779,Cerro navia",
          destination: "La Martina 455,pudahuel",
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    },
  })
)((props) => (
  <GoogleMap
    defaultZoom={8}
    // defaultCenter={new window.google.maps.LatLng(-37.8136, 144.9631)}
    defaultOptions={defaultMapOptions}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

class Map extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MapWithADirectionsRenderer />
      </React.Fragment>
    );
  }
}

export default Map;
