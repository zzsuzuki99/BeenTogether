import React, { Component } from "react";
import { View, Platform, StatusBar } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const paddingTop = Platform.OS === "android" ? StatusBar.currentHeight : 32;
    return (
      <View
        style={{
          width: "100%",
          height: 80
        }}
      >
        <View
          style={{
            marginTop: paddingTop,
            flex: 1,
            justifyContent: "center",
            paddingLeft: 16
          }}
        >
          <AntDesign
            backgroundColor="transparent"
            size={22}
            color="white"
            name="setting"
          />
        </View>
      </View>
    );
  }
}

export default HeaderComponent;
