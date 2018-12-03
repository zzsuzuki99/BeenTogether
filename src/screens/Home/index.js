import React, { Component } from "react";
import { View, Text } from "react-native";
import HomePresentation from "./components";
import { AVATAR_SIZE } from "../../assets/dimens";
import moment from "moment";
import * as Zodiac from "../../constants/Zodiac";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whileContainerHeight: 0,
      numberOfDaysMemory: this.getNumberOfDaysMemory("23-06-2018"),
      dateOfBirthMale: "11-02-1995",
      dateOfBirthFemale: "05-07-1995"
    };
  }

  getNumberOfDaysMemory(dateMemory) {
    const currentDate = moment();
    const dateMemoryMoment = moment(dateMemory, "DD-MM-YYYY");
    const numberOfDaysMemory = currentDate.diff(dateMemoryMoment, "days");
    return numberOfDaysMemory;
  }

  onInfoUserLayout(e) {
    this.setState({
      whileContainerHeight: e.nativeEvent.layout.height - AVATAR_SIZE / 2
    });
  }

  getZodiacSign(dateOfBirth) {
    const date = moment(dateOfBirth, "DDMMYYYY");
    const day = parseInt(date.format("D"));
    const month = parseInt(date.format("M"));
    console.log(
      "Get Zodiac>>>>",
      day,
      month,
      typeof month,
      month === 2,
      day <= 18
    );
    if ((month === 1 && day <= 20) || (month === 12 && day >= 22)) {
      return Zodiac.CAPRICORN;
    } else if ((month === 1 && day >= 21) || (month === 2 && day <= 18)) {
      return Zodiac.AQUARIUS;
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return Zodiac.PISCES;
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
      return Zodiac.ARIES;
    } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
      return Zodiac.TAURUS;
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return Zodiac.GEMINI;
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      return Zodiac.CANCER;
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) {
      return Zodiac.LEO;
    } else if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
      return Zodiac.VIGRO;
    } else if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
      return Zodiac.LIBRA;
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
      return Zodiac.SCORPIO;
    } else if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
      return Zodiac.SAGITTARIUS;
    }
    return Zodiac.CAPRICORN;
  }

  getAge(dateOfBirth) {
    const currentDate = moment();
    const newDate = moment(dateOfBirth, "DDMMYYYY");
    const age = currentDate.diff(newDate, "years");
    return age;
  }

  render() {
    return (
      <HomePresentation
        onInfoUserLayout={this.onInfoUserLayout.bind(this)}
        whileContainerHeight={this.state.whileContainerHeight}
        numberOfDaysMemory={this.state.numberOfDaysMemory}
        ageOfMale={this.getAge(this.state.dateOfBirthMale)}
        ageOfFemale={this.getAge(this.state.dateOfBirthFemale)}
        zodiacOfMale={this.getZodiacSign(this.state.dateOfBirthMale)}
        zodiacOfFemale={this.getZodiacSign(this.state.dateOfBirthFemale)}
      />
    );
  }
}

export default HomeScreen;
