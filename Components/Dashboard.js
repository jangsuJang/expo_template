import { StatusBar } from "expo-status-bar";
import React, { cloneElement, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import SlidingUpPanel from "rn-sliding-up-panel";
import Carousel from "react-native-snap-carousel";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Dashboard = () => {
  const StartBtn = (props) => (
    <Button
      icon="camera"
      mode="outlined"
      style={{
        width: "100%",
        borderRadius: 20,
        padding: 14,
        flexDirection: "row",
      }}
      onPress={() => console.log("Pressed")}
    >
        <View style={{
        }}>
            <Text>{props.workoutType}</Text>
        </View>
        <View style={{
        }}>
            <Text>30 KM left</Text>
        </View>
    </Button>
  );

  const MainCard = () => (
    <Card
      style={{
        borderColor: "#000",
        marginTop: 20,
        borderRadius: 30,
        width: 360,
        height: 450,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.21,
        shadowRadius: 30.16,

        elevation: 20,
      }}
    >
      <Card.Title title="Archivement" />
      <Card.Content></Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      {/* <Card.Actions> </Card.Actions> */}
    </Card>
  );

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "#efefef",
      }}
    >
      {/* //header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop:15,
          paddingBottom:15
        }}
      >
        <Text
          style={{
            fontSize: 40,
          }}
        >
          DashBoard
        </Text>
        <TouchableOpacity>
          <Text>cardIcon</Text>
        </TouchableOpacity>
      </View>

      {/* //main card*/}
      <MainCard />
      {/* //main card*/}
      <View
        style={{
          height: 250,
          marginTop: 30,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <StartBtn workoutType="Walking" />
        <StartBtn workoutType="Stairing" />
        <StartBtn workoutType="Cycling" />
      </View>
    </View>
  );
};

export default Dashboard;
