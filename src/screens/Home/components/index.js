import React, { Component } from "react";
import { View, Text, StatusBar, ImageBackground } from "react-native";
import CircleAvatar from "../../../components/CircleAvatar";
import HeaderComponent from "../../../components/Header";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  BASKVILL,
  OPENSANS_SEMIBOLD,
  FIOLEXGIRLVH
} from "../../../assets/fonts";
import Wave from "../../../components/Wave";
import { getExternalImageResource } from "../../../utils/image";
import UserInfoComponent from "../../../components/UserInfo";

const HomePresentation = props => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri:
            "http://blog-app.ca-central-1.elasticbeanstalk.com/api/file/file-1543637871916.jpg"
        }}
        imageStyle={{ resizeMode: "stretch" }}
        style={{ flex: 1, height: null, width: null }}
      >
        <StatusBar translucent={true} backgroundColor={"transparent"} />
        <HeaderComponent />
        <Wave />
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <View
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 32, fontFamily: FIOLEXGIRLVH }}>
              {props.numberOfDaysMemory}
            </Text>
            <Text style={{ fontFamily: FIOLEXGIRLVH, fontSize: 20 }}>
              ngày yêu
            </Text>
          </View> */}
          {/* <View style={{ marginTop: 32 }}>
            <Text>159</Text>
            <Text>asdasd</Text>
          </View> */}
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 32
          }}
          onLayout={props.onInfoUserLayout}
        >
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: props.whileContainerHeight,
              backgroundColor: "white"
            }}
          />
          <View
            style={{
              alignItems: "center",
              flex: 1.7
            }}
          >
            {/* <UserInfoComponent
              isMale={true}
              name="Kris"
              zodiac={props.zodiacOfMale}
              age={props.ageOfMale}
              url="http://blog-app.ca-central-1.elasticbeanstalk.com/api/file/file-1543662185409.JPG"
            /> */}
          </View>
          {/* <View
            style={{
              margin: 0,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <AntDesign
              backgroundColor="transparent"
              size={22}
              color="red"
              name="heart"
            />
          </View> */}
          <View
            style={{
              alignItems: "center",
              flex: 1.7
            }}
          >
            {/* <UserInfoComponent
              name="Jenny"
              age={props.ageOfFemale}
              zodiac={props.zodiacOfFemale}
              url="http://blog-app.ca-central-1.elasticbeanstalk.com/api/file/file-1543662185409.JPG"
            /> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomePresentation;
