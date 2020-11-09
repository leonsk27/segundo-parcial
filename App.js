
import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, Button, Picker, Alert, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      altura: 0,
      peso: 0,
      edad: 0,
      sexo: 5,
      actividad: 1.2
    }
  }


  calcular = () => {
    let resultado = (10 * this.state.peso) + (6.25 * this.state.altura) - (5 * this.state.edad) + Number(this.state.sexo);
    resultado = resultado * this.state.actividad;
    alert(resultado)
  }
  render() {
    return (
      // <ImageBackground source={require('./assets/ejercicio.jpg')} style={styles.container}>
      <ImageBackground source={require('./assets/ejercicio3.jpg')} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}><Icon name="balance-scale" size={25}/> CALCULADORA DE BMR O TMB <Icon name="balance-scale" size={25}/></Text>
        </View>
        <View style={styles.body}>
  
          <View style={styles.horizontal}>
          <Text style={styles.configText}>Altura (m):</Text>
          <TextInput style={styles.configInput} placeholder="Ejemplo: 1.59"
            onChangeText={(altura) => this.setState({ altura })}></TextInput>
          </View>
  
          <View style={styles.horizontal}>
          <Text style={styles.configText}>Peso (Kg):</Text>
          <TextInput style={styles.configInput} placeholder="Ejemplo: 60.2"
          onChangeText={(peso) => this.setState({ peso })}></TextInput>
          </View>
  
          <View style={styles.horizontal}>
          <Text style={styles.configText}>Edad (años):</Text>
          <TextInput style={styles.configInput} placeholder="Ejemplo: 20"
          onChangeText={(edad) => this.setState({ edad })}></TextInput>
          </View>
  
          <View style={styles.horizontal, styles.configSelect}>
          <Text style={styles.configText}>Sexo:</Text>
          <Picker style={styles.configInput, styles.configPicker}
            selectedValue={this.state.sexo}
            onValueChange={
              (itemValor, itelIndex) => this.setState({ sexo: itemValor })
            }>
              <Picker.Item label="Hombre" value="5"/>
              <Picker.Item label="Mujer" value="-161"/>
          </Picker>
          </View>
  
          <View style={styles.horizontal, styles.configSelect}>
          <Text style={styles.configText}>Ejercicio:</Text>
          <Picker style={styles.configInput, styles.configPicker}
            selectedValue={this.state.actividad}
            onValueChange={
              (itemValor, itelIndex) => this.setState({ actividad: itemValor })
            }>
              <Picker.Item label="Ninguno" value="1.2"/>
              <Picker.Item label="Poco" value="1.375"/>
              <Picker.Item label="moderado" value="1.55"/>
              <Picker.Item label="Fuerte" value="1.725"/>
              <Picker.Item label="Muy fuerte" value="1.9"/>
          </Picker>
          </View>
  
  
          <View style={styles.final}>
            <Button title="CALCULAR" onPress={this.calcular}></Button>
          </View>
        </View>
      </ImageBackground>
      // </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: 360,
    height: 50,
    backgroundColor: '#159EEF',
    alignItems: "center"
  },
  body: {
    flex: 1
  },
  horizontal: {
    height: 100,
    flexDirection: 'row',
    marginTop: 20
  },
  configInput: {
    height: 30,
    marginLeft: 10,
    color: "#E7EEF2",
    fontWeight: "600",
    fontSize: 15,
    borderBottomColor: "white",
    borderRadius: 0,
    borderBottomWidth: 3
  },
  configText: {
    marginTop: 4,
    color: "#E7EEF2",
    fontWeight: "600",
    fontSize: 15
  },
  configSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 0
  },
  configPicker: {
    borderBottomColor: "white",
    borderRadius: 0,
    borderBottomWidth: 3,
    backgroundColor: "transparent",
    color: "#C4CEEC",
    fontSize: 15,
    fontWeight: "600",
    width: 150
  },
  titulo: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "700",
    color: "white"
  },
  configButton: {
    color: "#1242D0"
  },
  final: {
    marginTop: 20
  }
});

export default Principal