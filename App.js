import { StatusBar } from 'expo-status-bar';
import React,{useRef,useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated,Dimensions } from 'react-native';
import { withOrientation } from 'react-navigation';
import SlidingUpPanel from 'rn-sliding-up-panel'

export default function App() {
  const {width,height} = Dimensions.get('window')
  const ModalRef = useRef(null);
  const [dragRange,setDragRange] = useState({
    top:height-80,
    bottom:160
  })
  const _draggedValue = new Animated.Value(180)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>console.log("pressed")}>
        <Text>hello</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>console.log("second")}>
        <Text>second</Text>
      </TouchableOpacity>


      {/* <View style={{flex:1}}> */}
        <SlidingUpPanel
        ref={ModalRef}
        draggableRange={dragRange}
        animatedValue={_draggedValue}
        backdropOpacity={0}
        snappingPoints={[360]}
        height={height-100}
        friction={0.9}
        >
          <View style={{backgroundColor:'#efefef',borderRadius:24,height:height/2}}>
            <View style={{
              height:6,
              width:50,
              backgroundColor:'#666',
              borderRadius:6,
              marginTop:6,
              alignSelf:'center'
            }}></View>
            <Text style={{color:'#000000',alignSelf:'center',padding:30}}>payment information</Text>
          </View>

        </SlidingUpPanel>
      {/* </View> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
