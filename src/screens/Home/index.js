import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import HomePresentation from "./components";
import { AVATAR_SIZE } from "../../assets/dimens";
import moment from "moment";
import * as Zodiac from "../../constants/Zodiac";
import ImagePicker from "react-native-image-picker";
import {
  getExternalImageResource,
  getBase64ImageResource
} from "../../utils/image";
import RNFetchBlob from "rn-fetch-blob";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whileContainerHeight: 0,
      numberOfDaysMemory: this.getNumberOfDaysMemory("23-06-2018"),
      dateOfBirthMale: "11-02-1995",
      dateOfBirthFemale: "05-07-1995",
      avatarSourceFemale: null
    };
  }

  componentDidMount() {
    const dirs = RNFetchBlob.fs.dirs;

    var pathFemaleImage = dirs.DCIMDir + "/imageFemale.png";
    var pathMaleImage = dirs.DCIMDir + "/imageMale.png";
    RNFetchBlob.fs.readFile(pathFemaleImage, "base64").then(res => {
      const source = getBase64ImageResource({ type: "image/jpeg", data: res });
      console.log("123456>>>", source);
      this.setState({
        avatarSourceFemale: source
      });
    });
    RNFetchBlob.fs.readFile(pathMaleImage, "base64").then(res => {
      const source = getBase64ImageResource({ type: "image/jpeg", data: res });
      this.setState({
        avatarSourceMale: source
      });
    });
  }

  getNumberOfDaysMemory(dateMemory) {
    const currentDate = moment();
    const dateMemoryMoment = moment(dateMemory, "DD-MM-YYYY");
    const numberOfDaysMemory = currentDate.diff(dateMemoryMoment, "days");
    return numberOfDaysMemory + 1;
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

  onAvatarFemaleChange() {
    const options = {
      title: "Select Avatar",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        // var Base64Code = re.split("data:image/png;base64,"); //base64Image is my image base64 string
        console.log("123456>>>", response);
        const dirs = RNFetchBlob.fs.dirs;

        var path = dirs.DCIMDir + "/imageFemale.png";
        RNFetchBlob.fs.writeFile(path, response.data, "base64").then(res => {
          console.log("File : ", res);
        });

        const source = getBase64ImageResource(response);
        this.setState({
          avatarSourceFemale: source
        });
      }
    });
  }

  onAvatarMaleChange() {
    const options = {
      title: "Select Avatar",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const dirs = RNFetchBlob.fs.dirs;

        var path = dirs.DCIMDir + "/imageMale.png";
        RNFetchBlob.fs.writeFile(path, response.data, "base64").then(res => {
          console.log("File : ", res);
        });
        const source = getBase64ImageResource(response);
        this.setState({
          avatarSourceMale: source
        });
      }
    });
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
        onAvatarMaleChange={this.onAvatarMaleChange.bind(this)}
        onAvatarFemaleChange={this.onAvatarFemaleChange.bind(this)}
        avatarSourceMale={this.state.avatarSourceMale}
        avatarSourceFemale={this.state.avatarSourceFemale}
      />
    );
  }
}

export default HomeScreen;
