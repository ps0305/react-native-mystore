import React, { Component } from "react";
import { View } from "react-native";

class FlexExamples extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <View
          style={{
            backgroundColor: "orange",
            flexBasis: 100
          }}
        />
        <View style={{ backgroundColor: "blue", flexBasis: 100 }} />
        <View style={{ backgroundColor: "green", flexBasis: 100 }} />
        <View
          style={{
            backgroundColor: "orange",
            flexBasis: 100
          }}
        />
        <View style={{ backgroundColor: "blue", flexBasis: 100 }} />
        <View style={{ backgroundColor: "green", flexBasis: 100 }} />
        <View
          style={{
            backgroundColor: "orange",
            flexBasis: 100
          }}
        />
        <View style={{ backgroundColor: "blue", flexBasis: 100 }} />
        <View style={{ backgroundColor: "green", flexBasis: 100 }} />
      </View>
    );
  }
}

export default FlexExamples;
