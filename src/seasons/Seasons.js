import React from "react";
import Spinner from "../utilities/Spinner";
import SeasonsDisplaySuccess from "./SeasonsDisplaySuccess";
import SeasonsDisplayError from "./SeasonsDisplayError";
import withBorder from "../utilities/withBorder";

class Seasons extends React.Component {
  constructor() {
    super();
    this.state = {
      season: null,
      errorMessage: "",
    };
  }

  getSeason(latitude, month) {
    const isFromMarchToOctober = month >= 2 && month <= 9;
    const isNorthernHemisphere = latitude > 0 && latitude < 90;
    const isWinter =
      (isNorthernHemisphere && !isFromMarchToOctober) ||
      (!isNorthernHemisphere && isFromMarchToOctober);
    return isWinter ? "winter" : "summer";
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const season = this.getSeason(
          pos.coords.latitude,
          new Date().getMonth()
        );
        this.setState({ season: season });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.season !== null && this.state.errorMessage === "") {
      return <SeasonsDisplaySuccess season={this.state.season} />;
    } else if (this.state.season === null && this.state.errorMessage !== "") {
      return <SeasonsDisplayError errorMessage={this.state.errorMessage} />;
    }
    return <Spinner message="Finding a current location..." />;
  }
}

export default withBorder(Seasons);
