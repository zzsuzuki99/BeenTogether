import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { BASKVILL, OPENSANS_SEMIBOLD, FIOLEXGIRLVH } from "../../assets/fonts";
const AnniversaryComponent = props => {
  return (
    <View
      style={{
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ScrollView
        style={{ width: 200, height: 150 }}
        horizontal={true}
        pagingEnabled={true}
      >
        <View
          style={{
            width: 600,
            height: "100%",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              width: 200,
              height: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 32, fontFamily: FIOLEXGIRLVH }}>
              {props.numberOfDaysMemory}
            </Text>
            <Text style={{ fontFamily: FIOLEXGIRLVH, fontSize: 20 }}>
              asdasdas
            </Text>
          </View>
          <View
            style={{
              width: 200,
              height: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 32, fontFamily: FIOLEXGIRLVH }}>
              {props.numberOfDaysMemory}
            </Text>
            <Text style={{ fontFamily: FIOLEXGIRLVH, fontSize: 20 }}>
              zxczxczxc
            </Text>
          </View>
          <View
            style={{
              width: 200,
              height: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 32, fontFamily: FIOLEXGIRLVH }}>
              {props.numberOfDaysMemory}
            </Text>
            <Text style={{ fontFamily: FIOLEXGIRLVH, fontSize: 20 }}>
              uiouioiuo
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AnniversaryComponent;
