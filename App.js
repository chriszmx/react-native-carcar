import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [manufacturers, setManufacturers] = useState([])
  async function getData() {
    const url = 'http://localhost:8100/api/manufacturers/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setManufacturers(data.manufacturers)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {/* {manufacturers?.map(item => (
        <Text key={item.id}>{item.name}</Text>
      ))} */}
      <View style={styles.container}>
        <Text style={{ color: '#49e88b', textShadowColor: '#49e88b', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 5, fontSize: 40 }}>CarCar</Text>
        <Image style={{
          width: 400,
          height: 400,
          objectFit: 'contain',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
          source={
            require('./red-car.png')
          } />
        <Text style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 25,
          textAlign: 'center',
          margin: 15
        }}>Welcome to <Text style={{ color: '#49e88b', textShadowColor: '#49e88b', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 5 }}>Car Car</Text> your source for the best cars at the lowest prices.</Text>

        <Text style={{ color: '#fff', textAlign: 'center', marginBottom: 30, marginTop: 20 }}>Lorem Ipsum kjasdd ajklsdhf jalkhf asjlkdh flakjsh dflaksj hdflkjah sldkjfh laskjdhf. aksjhdfkajhf ahs fljahks dflakjsh dfla.</Text>
        <TouchableOpacity
          style={styles.loginScreenButton}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Just kidding</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121012',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#49e88b',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#49e88b',
    width: '80%'
  },
  loginText: {
    color: '#121012',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold'
  }
});
