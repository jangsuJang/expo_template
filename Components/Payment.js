import { StatusBar } from 'expo-status-bar';
import React,{cloneElement, useRef,useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated,Dimensions } from 'react-native';
import { withOrientation } from 'react-navigation';
import SlidingUpPanel from 'rn-sliding-up-panel'


const Payment = () =>{
  const {width,height} = Dimensions.get('window')
  const ModalRef = useRef(null);
  const [dragRange,setDragRange] = useState({
    top:height/2,
    bottom:70
  })
  const _draggedValue = new Animated.Value(30)
  const printHello = ()=>{console.log("hellott")}
    return(
      <View>
      <View style={{
        flex:1,
        borderStyle:'solid',
        borderColor:"#000",
        borderWidth:0.5,
        // alignItems:'center'
        justifyContent:'center'

      }}>
        <TouchableOpacity onPress={()=>console.log("first")}>
          <Text>hello</Text>
        </TouchableOpacity>

      </View>
      <View style={{
        flex:1,
        borderStyle:'solid',
        borderColor:"#000",
        borderWidth:0.5,
      }}>
        <TouchableOpacity onPress={printHello}>
          <Text>second</Text>
        </TouchableOpacity>
      </View>


      <View style={{
        borderStyle:'solid',
        borderColor:"#000",
        borderWidth: 0.5,
        width:300,


      }}>
      <SlidingUpPanel
      ref={ModalRef}
      draggableRange={dragRange}
      animatedValue={_draggedValue}
      backdropOpacity={0}
      containerStyle={{
        backgroundColor:'#efefef',
        borderRadius:24,
        borderStyle:'solid',
        borderColor:"#000",
        borderWidth:1,
        width:300,
        // alignSelf:'flex-start',
        // alignContent:'flex-start',
        alignItems: 'center',
        // justifyContent: 'flex-start',
      }}
      onBottomReached={printHello}
      height={height/2}
      friction={0.9}
      >
        <View style={{
          height:6,
          width:50,
            backgroundColor:'#666',
            borderRadius:6,
            marginTop:12,
            alignSelf:'center'
          }}></View>
          <Text style={{color:'#000000',alignSelf:'center',padding:10}}>payent information</Text>
      </SlidingUpPanel>
      </View>
      </View>
    )
}

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