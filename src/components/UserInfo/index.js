import React, { Component } from "react";
import { View, Text } from "react-native";
import { BASKVILL, OPENSANS_SEMIBOLD, FIOLEXGIRLVH } from "../../assets/fonts";
import CircleAvatar from "../../components/CircleAvatar";
import { getExternalImageResource } from "../../utils/image";
import { AVATAR_SIZE } from "../../assets/dimens";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Zodiac from "../../constants/Zodiac";
const getZodiacText = zodiac => {
  switch (zodiac) {
    case Zodiac.CAPRICORN:
      return "Ma kết";
    case Zodiac.AQUARIUS:
      return "Bảo Bình";
    case Zodiac.PISCES:
      return "Song Ngư";
    case Zodiac.ARIES:
      return "Bạch Dương";
    case Zodiac.TAURUS:
      return "Kim Ngưu";
    case Zodiac.GEMINI:
      return "Song Tử";
    case Zodiac.CANCER:
      return "Cự Giải";
    case Zodiac.LEO:
      return "Sư Tử";
    case Zodiac.VIGRO:
      return "Xử Nử";
    case Zodiac.LIBRA:
      return "Thiên Bình";
    case Zodiac.SCORPIO:
      return "Bò Cạp";
    case Zodiac.SAGITTARIUS:
      return "Nhân Mã";
    default:
      return "Bảo Bình";
  }
};

const getZodiacIcon = zodiac => {
  switch (zodiac) {
    case Zodiac.CAPRICORN:
      return "zodiac-capricorn";
    case Zodiac.AQUARIUS:
      return "zodiac-aquarius";
    case Zodiac.PISCES:
      return "zodiac-pisces";
    case Zodiac.ARIES:
      return "zodiac-aries";
    case Zodiac.TAURUS:
      return "zodiac-taurus";
    case Zodiac.GEMINI:
      return "zodiac-gemini";
    case Zodiac.CANCER:
      return "zodiac-cancer";
    case Zodiac.LEO:
      return "zodiac-leo";
    case Zodiac.VIGRO:
      return "zodiac-virgo";
    case Zodiac.LIBRA:
      return "zodiac-libra";
    case Zodiac.SCORPIO:
      return "zodiac-scorpio";
    case Zodiac.SAGITTARIUS:
      return "zodiac-sagittarius";
    default:
      return "zodiac-aquarius";
  }
};

const UserInfoComponent = props => {
  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
        flex: 1
      }}
    >
      <CircleAvatar
        customStyles={{ size: AVATAR_SIZE }}
        image={props.avatarSource}
        onPress={props.onAvatarChange}
      />

      <Text style={{ fontFamily: FIOLEXGIRLVH, fontSize: 25 }}>
        {props.name}
      </Text>
      <View style={{ flexDirection: "row", marginTop: 4 }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: props.isMale ? "#00A6FF" : "#FF0099",
            paddingHorizontal: 8,
            borderRadius: 8
          }}
        >
          <Foundation
            backgroundColor="transparent"
            size={22}
            color="white"
            name={props.isMale ? "male-symbol" : "female-symbol"}
          />
          <Text
            style={{ marginLeft: 4, color: "white", fontFamily: FIOLEXGIRLVH }}
          >
            {props.age}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#C300FF",
            flexDirection: "row",
            borderRadius: 8,
            marginLeft: 8,
            paddingHorizontal: 4
          }}
        >
          <MaterialCommunityIcons
            backgroundColor="transparent"
            size={22}
            color="white"
            name={getZodiacIcon(props.zodiac)}
          />
          <Text
            style={{ marginLeft: 4, color: "white", fontFamily: FIOLEXGIRLVH }}
          >
            {getZodiacText(props.zodiac)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserInfoComponent;
