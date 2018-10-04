import React from 'react';
import { Alert,View, Text, Button, StyleSheet ,TextInput,Image} from 'react-native';
import { createStackNavigator } from 'react-navigation';
class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Autenticacion de Usuario',
  };
  constructor() {
    super()
    this.state = {
      username: 'demo',
      password: 'demo'
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 10}}>
          <TextInput 
            onChangeText={(value) => this.setState({username: value})}
            placeholder="Ingresa tu correo-e!!"
          />
      </View>
      <View style={{marginBottom: 10}}>
          <TextInput
            onChangeText={(value) => this.setState({password: value})}
            placeholder="Ingresa tu constraseña. "
          />
      </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="LOGIN"
            color="#7B1FA2"
            onPress={() => { Alert.alert(this.state.username +"  "+this.state.password); }}
          />
        </View>
        <View  style={styles.buttonContainer} >
          <Button
            title="Registrate !!"
            color="#E1BEE7"
            onPress={() => this.props.navigation.navigate('Registro')}
          />
        </View>
        <View  style={styles.buttonContainer} >
          <Button
            title="GotoPrincipal"
            onPress={() => this.props.navigation.navigate('Principal')}
          />
        </View>
      </View>
    );
  }

}
class RegistroScreen extends React.Component {
  static navigationOptions = {
    title: 'Registro',
  };
  constructor() {
    super()
    this.state = {
      username: 'demo',
      password: 'demo',
      foto:'indefinido',
    }
}
  
  render() {
    return (
      <View style={styles.container}>
         <View style={{marginBottom: 10}}>
            <TextInput 
              onChangeText={(value) => this.setState({username: value})}
              placeholder="Ingresa tu correo-e!!"
            />
        </View>
          <View style={{marginBottom: 10}}>
              <TextInput
                onChangeText={(value) => this.setState({password: value})}
                placeholder="Ingresa tu constraseña. "
              />
          </View>
          <View style={{marginBottom:10}} >
              <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
               style={{width: 250, height: 250}} />
       </View>
          <View style={styles.buttonContainer}>
            <Button 
              title="REGISTRARME"
              color="#7B1FA2"
              onPress={() => { Alert.alert(this.state.username +"  "+this.state.password); }}
            />
          </View>
          
        <Button
          title="Go back"
          color="gray"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class PrincipalScreen extends React.Component {
  static navigationOptions = {
    title: 'Principal',
  };
  constructor() {
    super()
    this.state = {
      username: 'Usuario: Johanita',
      password: 'demo',
      foto:'https://facebook.github.io/react/logo-og.png',
    }
}
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom:10}} >
              <Image source={{uri: this.state.foto}}
               style={{width: 250, height: 250}} />
       </View>
          <View>
            <Text style={{fontSize:30}}>{this.state.username}</Text>
          </View> 
          <View style={styles.buttonContainer}>
            <Button 
              title="Ver Servicio"
              color="green"
              onPress={() => this.props.navigation.navigate('Servicio')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              title="Reservar"
              color="orange"
              onPress={() => this.props.navigation.navigate('Reserva')}
            />
          </View>
      </View>
    );
  }
}
class ServicioScreen extends React.Component {
  static navigationOptions = {
    title: 'Vista de Servicio',
  };
  constructor() {
    super()
    this.state = {
      username: 'Usuario: Johanita',
    }
}
  
  render() {
    return (
      <View style={styles.container}>
        
          <View>
            <Text >Vista del servicio</Text>
          </View> 
        
      </View>
    );
  }
}
class ReservaScreen extends React.Component {
  static navigationOptions = {
    title: 'Reserva',
  };
  constructor() {
    super()
    this.state = {
      username: 'Usuario: Johanita',
    }
}
  
  render() {
    return (
      <View style={styles.container}>
        
          <View>
            <Text >Reservar servicio</Text>
          </View> 
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    flexDirection:"column",
  },
  buttonContainer:{
    marginBottom:20,
  },
 
});
const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Registro: RegistroScreen,
    Principal:PrincipalScreen,
    Servicio:ServicioScreen,
    Reserva: ReservaScreen,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7B1FA2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}