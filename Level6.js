import React, { Component } from 'react';
import { AppRegistry, Dimensions, TextInput, Text, View, Image, TouchableHighlight, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App3 extends Component {
   state = {
        mileCount: 0,
         check: '',
    }
    
 updateMileCount = () => {
        if (this.state.mileCount > -1) {
            this.setState({ 
                mileCount: (this.state.mileCount + 1)
            })
        } else {
            this.setState({ 
                mileCount: 'You finished!',
                message2: 'No more miles!'
            })
        }
    }
  checkAnswer = () => {
      
      if(this.state.mileCount == '5'){
        alert('Correct Answer')
      }
   
      else{
        alert('Incorrect Answer')
      }
      this.setState({
        check: ''
        //mileCount: 0,
      })
    }

    render() {
        return (
            <View style={styles.container}>                
              <TouchableHighlight
                style={styles.button}
                onPress = {this.updateMileCount}
              >
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>
                   Click here to add 1 until you reach your answer
                  </Text>
                </View>
              </TouchableHighlight>      
                <View style={styles.mileCountContainer}>
                  <Text style={styles.stateText}>
                    {this.state.mileCount}
                  </Text>
                  
                </View>                  
                <View style={styles.buttonContainer}> 
                <Text style={{fontSize: 100, fontWeight: 'bold', marginRight: 'auto', marginLeft: 'auto', marginBottom: 70}}> 

                  五
                 
                </Text>
                <TouchableHighlight
                  style={styles.currencyButton}
                  onPress={this.checkAnswer}
                  underlayColor="#C7DEF6"
                >
                  <Text style={styles.currency}>
                    Check Answer
                  </Text>
                </TouchableHighlight>
                <Text>
                     What number does this Japanese character represent? 
                  </Text>
              </View>
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
         justifyContent: 'center',
    },

    button: {
        flex: 1,
    },
    buttonView: {
         height: deviceHeight/12,
        width: deviceWidth,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'skyblue',
        fontSize: 14,
        textAlign: 'center',
    },
    mileCountContainer: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
    },
    stateText: {
        fontSize: 50,
        color: 'black',
        textAlign: 'center',
    },
    currency: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    currencyButton: {
        backgroundColor: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        height: deviceHeight/10,
        width: deviceWidth/2.5,        
        borderWidth: 3,
        borderColor: '#581845'
    },
});