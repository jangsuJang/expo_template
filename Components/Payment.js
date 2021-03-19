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
import { withOrientation } from "react-navigation";
import SlidingUpPanel from "rn-sliding-up-panel";
import Carousel from "react-native-snap-carousel";

const Payment = () => {
  const { width, height } = Dimensions.get("window");
  const ModalRef = useRef(null);
  const [dragRange, setDragRange] = useState({
    top: height / 2,
    bottom: 70,
  });
  const _draggedValue = new Animated.Value(30);
  const printHello = () => {
    console.log("hellott");
  };

  //Carousel data
  const carouselRef = useRef(null);
  const ttt = "helelfjalsk";
  const cards = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
  ];

  //parameter of render must be item
  const cardRender = ({ item }) => {
    return (
      <TouchableWithoutFeedback>
        <Text
          style={{
            width: 360,
            height: 240,
            borderRadius: 10,
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "#000",
            backgroundColor: "#efefef",
          }}
        >
          {item.id}
        </Text>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View>
      <View
        style={{
          flex: 1,
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 0.5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderStyle: "solid",
            borderColor: "#000",
            // borderWidth: 5,
            width: 360,
            flexDirection:'column'
          }}
        >
          <Text>payment method</Text>
          <Carousel
            layout={"tinder"}
            ref={carouselRef}
            data={cards}
            renderItem={cardRender}
            sliderWidth={width}
            itemWidth={width}
            swipeThreshold={100}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.4}
            containerCustomStyle={{
              overflow: "visible",
              marginVertical: 30,
            }}
            contentContainerCustomStyle={{
              paddingTop: 14,
            }}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 0.5,
        }}
      >
        <TouchableOpacity onPress={printHello}>
          <Text>second</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 5,
          alignItems:'center'
        }}
      >
        <View
        style={{
          width:300,
        }}>
        <SlidingUpPanel
          ref={ModalRef}
          draggableRange={dragRange}
          animatedValue={_draggedValue}
          backdropOpacity={0}
          containerStyle={{
            backgroundColor: "#efefef",
            borderRadius: 24,
            borderStyle: "solid",
            borderColor: "#000",
            borderWidth: 1,
            width: 300,
            // alignSelf:'flex-start',
            // alignContent:'flex-start',
            alignItems: "center",
            // justifyContent: 'flex-start',
          }}
          onBottomReached={printHello}
          height={height / 2}
          friction={0.9}
        >
          <View
            style={{
              height: 6,
              width: 50,
              backgroundColor: "#666",
              borderRadius: 6,
              marginTop: 12,
              alignSelf: "center",
            }}
          ></View>
          <Text style={{ color: "#000000", alignSelf: "center", padding: 10 }}>
            payent information
          </Text>
        </SlidingUpPanel>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     paddingTop:50,
  //     paddingHorizontal:14,
  //   },
});

export default Payment;
