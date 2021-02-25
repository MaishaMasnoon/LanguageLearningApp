import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Dimensions,StyleSheet } from 'react-native';
import Constants from 'expo-constants';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
// Note: the index will run out once it goes through the entire list of states
// that means it will no longer have anything to display
export default class App2 extends Component {
   state = {
        cities: ['dog', 'INU','cat', 'NEKO','red', 'AKA','fish', 'SAKANA','car', 'KARUMA','rice', 'GOHAN','apple', 'RINGO','mountain', 'YAMA','water', 'MIZU','tea', 'OCHA','thank you = ARIGATOU'],
        count: 0,
    }
    
    randomState = () => {
        this.setState({ 
            count: this.state.count + 1,
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.mainText}>
                        Digital FlashCards! 
                    </Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.randomState}
                >
                    <Text style={styles.buttonText}>
                        Learn A New Word!
                    </Text>
                </TouchableHighlight>
                
                <Text style={styles.paragraph}>
                    {this.state.cities[this.state.count]}
                </Text>
                <Text style={styles.subText}>
                        lower case: English
                    </Text>
                    <Text style={styles.subText}>
                        ALL UPPER CASE: Japanese Translation
                    </Text>
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: 'white',
        borderColor: 'navy',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'navy',
        fontSize: 15,
        textAlign: 'center',
    },
     mainText: {
        color: 'navy',
        fontSize: 36,
        textAlign: 'center',
        margin: 70,
    },
      subText: {
        color: 'navy',
        fontSize: 10,
        textAlign: 'center',
        marginTop: 15,
    },
    paragraph: {
        color: 'navy',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});