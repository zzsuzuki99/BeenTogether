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
import { getExternalImageResource } from "../../../utils/image";
import UserInfoComponent from "../../../components/UserInfo";
import AnniversaryComponent from "../../../components/Anniversary";

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
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
           <AnniversaryComponent />
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
          {/* <View
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
            <UserInfoComponent
              isMale={true}
              avatarSource={props.avatarSourceMale}
              name="Kris"
              zodiac={props.zodiacOfMale}
              onAvatarChange={props.onAvatarMaleChange}
              age={props.ageOfMale}
              url="http://blog-app.ca-central-1.elasticbeanstalk.com/api/file/file-1543637871916.jpg"
            />
          </View>
          <View
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
          </View>
          <View
            style={{
              alignItems: "center",
              flex: 1.7
            }}
          >
            <UserInfoComponent
              name="Jenny"
              age={props.ageOfFemale}
              avatarSource={props.avatarSourceFemale}
              onAvatarChange={props.onAvatarFemaleChange}
              zodiac={props.zodiacOfFemale}
              url="http://blog-app.ca-central-1.elasticbeanstalk.com/api/file/file-1543662185409.JPG"
            />
          </View> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomePresentation;
