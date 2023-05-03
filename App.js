import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ListAutomobileScreen from './screens/ListAutomobileScreen';
import ScheduleServiceScreen from './screens/ScheduleServiceScreen';
import CarScreen from './screens/CarScreen';
import AddTechnicianScreen from './screens/AddTechnicianScreen';
import TechnicianListScreen from './screens/TechnicianListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Automobiles" component={ListAutomobileScreen} />
        <Stack.Screen name="Schedule Service" component={ScheduleServiceScreen} />
        <Stack.Screen name="Car List" component={CarScreen} />
        <Stack.Screen name="Add Technician" component={AddTechnicianScreen} />
        <Stack.Screen name="Technician List" component={TechnicianListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// import { StatusBar } from 'expo-status-bar';
// import { useEffect, useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

// export default function App() {
//   const [manufacturers, setManufacturers] = useState([])
//   async function getData() {
//     const url = 'http://localhost:8100/api/manufacturers/'
//     const response = await fetch(url)

//     if (response.ok) {
//       const data = await response.json()
//       setManufacturers(data.manufacturers)
//     }
//   }

//   useEffect(() => {
//     getData()
//   }, [])

//   return (
//     <>
//       <View style={styles.container}>
//         <Text style={{ color: '#49e88b', textShadowColor: '#49e88b', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 5, fontSize: 40 }}>CarCar</Text>
//         <Image style={{
//           width: 400,
//           height: 400,
//           objectFit: 'contain',
//           marginLeft: 'auto',
//           marginRight: 'auto'
//         }}
//           source={
//             require('./red-car.png')
//           } />
//         <Text style={{
//           color: '#fff',
//           fontWeight: 'bold',
//           fontSize: 25,
//           textAlign: 'center',
//           margin: 15
//         }}>Welcome to <Text style={{ color: '#49e88b', textShadowColor: '#49e88b', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 5 }}>Car Car</Text> your source for the best cars at the lowest prices.</Text>

//         <Text style={{ color: '#fff', textAlign: 'center', marginBottom: 30, marginTop: 20 }}>Lorem Ipsum kjasdd ajklsdhf jalkhf asjlkdh flakjsh dflaksj hdflkjah sldkjfh laskjdhf. aksjhdfkajhf ahs fljahks dflakjsh dfla.</Text>
//         <TouchableOpacity
//           style={styles.loginScreenButton}
//           underlayColor='#fff'>
//           <Text style={styles.loginText}>Just kidding</Text>
//         </TouchableOpacity>
//         <StatusBar style="auto" />
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#121012',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loginScreenButton: {
//     marginRight: 40,
//     marginLeft: 40,
//     marginTop: 10,
//     paddingTop: 10,
//     paddingBottom: 10,
//     backgroundColor: '#49e88b',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#49e88b',
//     width: '80%'
//   },
//   loginText: {
//     color: '#121012',
//     textAlign: 'center',
//     paddingLeft: 10,
//     paddingRight: 10,
//     fontWeight: 'bold'
//   }
// });
