import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Image, ImageBackground, ScrollView, Dimensions, TextInput, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Audio } from "expo-av";
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
import App2 from './document2';
import App3 from './Level6';
export default class App extends Component {
  state = {
    score: 0,
    pair: 0,
    press: 0,
    message: 'Check',
    recipient: ' ',
    check: '',
    checkCar: '',
    checkCat: '',
    mileCount: 0,
    // image: 'https://codehs.com/uploads/eadf4b6dd4c2ad0499370f899cf3693c',
    message1: 'What does GOHAN mean in English?',
    WelcomePageDisplay: 'flex',
    InfoPageDisplay: 'none',
    Document1: 'none',
    Document2: 'none',
    Level1Page1Display: 'none',
    Level1Page2Display: 'none',
    Level1Page3Display: 'none',
    Level2Page2Display: 'none',
    Level2Page3Display: 'none',
    Level2Page4Display: 'none',
    Level3Page1Display: 'none',
    Level3Page2Display: 'none',
    Level4Page1Display: 'none',
    Level4Page2Display: 'none',
    Level5Page1Display: 'none',
    Level5Page2Display: 'none',
    Level5Page3Display: 'none',
    Level5Page4Display: 'none',
    Level6Page1Display: 'none',
    CongratulaionPageDisplay: 'none',
    CongratulaionPage2Display: 'none',
    CongratulaionPage3Display: 'none',
    CongratulaionPage4Display: 'none',
    CongratulaionPage5Display: 'none',
  }
  chooseWinner = (winner) => {
    if (winner == 'Capitals') {
      this.setState({

        message1: 'Correct!',
      })
    } else if (winner == 'Rangers') {
      this.setState({

        message1: 'Incorrect!',
      })
    }
  }
  _handlePlaySoundAsync2 = async () => {
    await Audio.setIsEnabledAsync(true);
    let sound = new Audio.Sound();
    await sound.loadAsync({
      uri: 'https://codehs.com/uploads/198279e62b333ecafb2118976aaf23dc'

    });
    await sound.playAsync();
    this.setState({
      score: 0
    })
  };
  _handlePlaySoundAsync1 = async () => {
    await Audio.setIsEnabledAsync(true);
    let sound = new Audio.Sound();
    await sound.loadAsync({

      uri: 'https://codehs.com/uploads/e264406b586a3c363d0f29751f2cc9ab'
    });
    await sound.playAsync();
    this.setState({
      score: 1
    })
  };
  _handlePlaySoundAsync3 = async () => {
    await Audio.setIsEnabledAsync(true);
    let sound = new Audio.Sound();
    await sound.loadAsync({

      uri: 'https://codehs.com/uploads/25ac52bfb2d3b175631a05b8a00ceb67'
    });
    await sound.playAsync();
    this.setState({
      score: 1
    })
  };
  _handlePlaySoundAsync4 = async () => {
    await Audio.setIsEnabledAsync(true);
    let sound = new Audio.Sound();
    await sound.loadAsync({

      uri: 'https://codehs.com/uploads/597ced8cbd576a6f299474d44f2dc0f6'
    });
    await sound.playAsync();
    this.setState({
      score: 0
    })
  };
  _handlePlaySoundPlease = async () => {
    await Audio.setIsEnabledAsync(true);
    let sound = new Audio.Sound();
    await sound.loadAsync({
      uri: 'https://codehs.com/uploads/198586bbceff3ab102cea7e51328cd2e'
    });
    await sound.playAsync();
  };
  handleWelcomePagePress = () => this.setState(state => ({
    WelcomePageDisplay: 'none',
    InfoPageDisplay: 'flex',
    Document1: 'none',
    Document2: 'none',
    CongratulaionPageDisplay: 'none',
    CongratulaionPage2Display: 'none',
    CongratulaionPage3Display: 'none',
    CongratulaionPage4Display: 'none',
    CongratulaionPage5Display: 'none',
  }));
  updateDictionary1 = () => {
    this.setState({
      WelcomePageDisplay: 'none',
      InfoPageDisplay: 'none',
      Document1: 'flex',
      Document2: 'none',
    })
  }
  updateDictionary2 = () => {
    this.setState({
      WelcomePageDisplay: 'none',
      InfoPageDisplay: 'none',
      Document1: 'none',
      Document2: 'flex',
    })
  }
  handleInfoPagePressLevel1 = () => this.setState(state => ({
    WelcomePageDisplay: 'none',
    InfoPageDisplay: 'none',
    Level1Page1Display: 'flex',
    Level1Page2Display: 'none',
    Level1Page3Display: 'none',
    CongratulaionPageDisplay: 'none',
  }));
  handleLevel1Page1Press = () => this.setState(state => ({
    InfoPageDisplay: 'none',
    Level1Page1Display: 'none',
    Level1Page2Display: 'flex',
    Level1Page3Display: 'none',
    CongratulaionPageDisplay: 'none',
  }));
  handleLevel1Page2Press = () => this.setState(state => ({
    InfoPageDisplay: 'none',
    Level1Page1Display: 'none',
    Level1Page2Display: 'none',
    Level1Page3Display: 'flex',
    CongratulaionPageDisplay: 'none',
  }));
  handleLevel1Page3Press = () => this.setState(state => ({
    InfoPageDisplay: 'none',
    Level1Page1Display: 'none',
    Level1Page2Display: 'none',
    Level1Page3Display: 'none',
    CongratulaionPageDisplay: 'flex',
  }));
  handleInfoPagePressLevel2 = () => this.setState(state => ({
    InfoPageDisplay: 'none',
    Level2Page2Display: 'flex',
  }));
  handleInfoPagePressLevel3 = () => this.setState(state => ({
    InfoPageDisplay: 'none',
    Level3Page1Display: 'flex',
  }));
  handleInfoPagePressLevel4 = () => this.setState(state => ({
    InfoPageDisplay: 'none',
    Level4Page1Display: 'flex',
  }));
  handleInfoPagePressLevel5 = () => this.setState(state => ({
    WelcomePageDisplay: 'none',
    InfoPageDisplay: 'none',
    Level5Page1Display: 'flex',
    Level5Page2Display: 'none',
    Level5Page3Display: 'none',
    Level5Page4Display: 'none',
  }));

  handleLevel5Page2Press = () => this.setState(state => ({
    WelcomePageDisplay: 'none',
    InfoPageDisplay: 'none',
    Level5Page1Display: 'none',
    Level5Page2Display: 'flex',
    Level5Page3Display: 'none',
    Level5Page4Display: 'none',
  }));
  handleLevel5Page3Press = () => this.setState(state => ({
    WelcomePageDisplay: 'none',
    InfoPageDisplay: 'none',
    Level5Page1Display: 'none',
    Level5Page2Display: 'none',
    Level5Page3Display: 'flex',
    Level5Page4Display: 'none',
  }));
  handleLevel5Page4Press = () => this.setState(state => ({
    WelcomePageDisplay: 'none',
    InfoPageDisplay: 'none',
    Level5Page1Display: 'none',
    Level5Page2Display: 'none',
    Level5Page3Display: 'none',
    Level5Page4Display: 'flex',
  }));
  handleLevel5Page5Press = () => this.setState(state => ({
    InfoPageDisplay: 'none',
    Level5Page1Display: 'none',
    Level5Page2Display: 'none',
    Level5Page3Display: 'none',
    Level5Page4Display: 'none',
    CongratulaionPage5Display: 'flex',
  }));
  handleInfoPagePressLevel6 = () => this.setState(state => ({
    WelcomePageDisplay: 'none',
    InfoPageDisplay: 'none',
    Level6Page1Display: 'flex',
    CongratulaionPage5Display: 'none',
  }));
  handleLevel6Page2Press = () => this.setState(state => ({
    WelcomePageDisplay: 'none',
    InfoPageDisplay: 'none',
    Level6Page1Display: 'none',
    CongratulaionPage5Display: 'flex',
  }));
  updateScoreCount1 = () => {
    this.setState({
      score: 1
    })
  }
  updateScoreCount2 = () => {
    this.setState({
      score: (0)
    })
  }
  updateScoreCount3 = () => {
    if (this.state.score == 1) {
      this.setState({
        pair: 1
      })
    }
  }
  updateCheckCount = () => {
    this.setState({
      press: this.state.press + 1
    })
    if (this.state.message == 'Check') {
      if (this.state.score == 1) {
        alert('Correct!')
        this.setState({
          message: 'Continue'
        })
      }
      else {
        alert('Not Correct!')
        this.setState({
          message: 'Continue'
        })
      }
      this.setState({
        score: (0)
      })
    }
    else if (this.state.press == 1) {
      this.setState(state => ({
        Level2Page2Display: 'none',
        Level2Page3Display: 'flex',
        Level2Page4Display: 'none',
      }));
      this.setState({
        message: 'Check'
      })
    }
    else if (this.state.press == 3) {
      this.setState(state => ({
        Level2Page2Display: 'none',
        Level2Page3Display: 'none',
        Level2Page4Display: 'flex',
      }));
      this.setState({
        message: 'Check'
      })
    }

  }
  updateCheckPair = () => {
    this.setState({
      press: this.state.press + 1

    })
    if (this.state.message == 'Check') {
      if (this.state.score == 1 && this.state.pair == 1) {
        alert('Correct!')
        this.setState({
          message: 'Continue'
        })
      }
      else {
        alert('Not Correct!')
        this.setState({
          message: 'Continue'
        })
      }
      this.setState({
        score: 0,
      })
    }
    else if (this.state.press == 5) {
      this.setState(state => ({
        Level2Page2Display: 'none',
        Level2Page3Display: 'none',
        Level2Page4Display: 'none',
        CongratulaionPage2Display: 'flex',
      }));
      this.setState({
        message: 'Check',
        score: 0,
        pair: 0,
        press: 0,
      })
    }
  }
  checkAnswer = () => {

    if (this.state.check == 'ringo') {
      alert('Correct Answer')
    }
    else if (this.state.checkCar == 'kuruma') {
      alert('Correct Answer')
    }
    else if (this.state.checkCat == 'neko') {
      alert('Correct Answer')
    }
    else {
      alert('Incorrect Answer')
    }
    this.setState({
      check: '',
      checkCar: '',
      checkCat: '',
    })
  }
  /*-------------------------------------EditLevel3---------------------------- */
  updateCheckCount1 = () => {
    this.setState({
      press: this.state.press + 1
    })
    if (this.state.message == 'Check') {
      if (this.state.score == 1) {
        alert('Correct!')
        this.setState({
          message: 'Continue'
        })
      }
      else {
        alert('Not Correct!')
        this.setState({
          message: 'Continue'
        })
      }
      this.setState({
        score: (0)
      })
    }
    else if (this.state.press == 1) {
      this.setState(state => ({
        Level3Page1Display: 'none',
        Level3Page2Display: 'flex',
      }));
      this.setState({
        message: 'Check'
      })
    }
    else if (this.state.press == 3) {
      this.setState(state => ({
        Level3Page1Display: 'none',
        Level3Page2Display: 'none',
        CongratulaionPage3Display: 'flex',
      }));
      this.setState({
        message: 'Check',
        press: 0,
        score: 0,
      })
    }

  }

  /*-------------------------------------EditLevel3---------------------------- */
  /*-------------------------------------EditLevel4---------------------------- */
  updateCheckCountLevel4 = () => {
    this.setState({
      press: this.state.press + 1,

    })
    if (this.state.message == 'Check') {
      if (this.state.score == 1) {
        alert('Correct!')
        this.setState({
          message: 'Continue'
        })
      }
      else if (this.state.recipient == 'Please') {
        alert('Correct!');
        this.setState({
          message: 'Continue'
        })
      }
      else {
        alert('Not Correct!')
        this.setState({
          message: 'Continue'
        })
      }
      this.setState({
        score: (0),
        recipient: ''
      })
    }
    else if (this.state.press == 1) {
      this.setState(state => ({
        Level4Page1Display: 'none',
        Level4Page2Display: 'flex',
        //CongratulaionPage4Display: 'flex',  
      }));
      this.setState({
        message: 'Check'
      })
    }
    else if (this.state.press == 3) {
      this.setState(state => ({
        Level4Page1Display: 'none',
        Level4Page2Display: 'none',
        CongratulaionPage4Display: 'flex',
      }));
      this.setState({
        message: 'Check',
        press: 0,
        score: 0,
      })
    }

  }

  /*-------------------------------------EditLevel4---------------------------- */


  render() {
    return (
      <View style={styles.container}>
        {/*--------------------------------WELCOME PAGE-------------------------------------------*/}
        <View style={{ display: this.state.WelcomePageDisplay }}>

          <ImageBackground
            style={styles.background}
            source={{ uri: 'https://codehs.com/uploads/7d79e25b649488e2d6d074e067089e55' }}
          //source={{ uri: 'https://codehs.com/uploads/f5bc3fda7b685663829494f5a0afeba5' }}
          >
            <View style={styles.titleBox}>
              <Text style={styles.titleText}>
                Learn Japanese with
                        </Text>
              <Text style={styles.titleText}>
                Maruko
                        </Text>
            </View>
            <TouchableHighlight
              style={styles.n1}
              onPress={this.handleWelcomePagePress}
            >
              <Text style={styles.next}>
                Start
                        </Text>
            </TouchableHighlight>
          </ImageBackground>
        </View>
        {/*------------------------------------Info Page-----------------------------------------*/}
        <View style={{ display: this.state.InfoPageDisplay }}>
          <View style={styles.container2}>
            <View style={styles.titleBox2}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableHighlight
                  onPress={this.handleWelcomePagePress}
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/035d39641032510a9199cb180b2453b2' }}
                    style={{ height: 30, width: 30, marginTop: 10 }}
                  />

                </TouchableHighlight>
                <TouchableHighlight
                  onPress={this.updateDictionary1}
                >

                  <Image
                    source={{ uri: 'https://codehs.com/uploads/85686b1ceeb1e76a4d1dcb097d38ecff' }}
                    style={{ height: 30, width: 30, marginLeft: 7, marginTop: 10 }}
                  />

                </TouchableHighlight>
                <TouchableHighlight
                  onPress={this.updateDictionary2}
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/31c77972a6ff96de1f133dd140f47c1c' }}
                    style={{ height: 30, width: 30, marginLeft: 7, marginRight: 200, marginTop: 10 }}
                  />

                </TouchableHighlight>
              </View>
            </View>
            <ImageBackground
              style={styles.background1}
              source={{ uri: 'https://codehs.com/uploads/894726454b33c713e24abf28e007d45b' }}

            >
              <TouchableHighlight
                onPress={() => this.handleInfoPagePressLevel1()}
              >
                <View style={styles.learnAlphabets}>
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/976e0870bd8b03dee2a9e15f8ab9127b' }}
                    style={{ height: 60, width: 60, marginLeft: 10, marginRight: 10 }}
                  />
                  <Text style={styles.alphabetsText}>
                    Level 1
                                </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.handleInfoPagePressLevel2}
              >
                <View style={styles.learnAlphabets}>
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/188a4783c57a0db77d410b6218c6e78a' }}
                    style={{ height: 60, width: 60, marginLeft: 10, marginRight: 10 }}
                  />
                  <Text style={styles.alphabetsText}>
                    Level 2
                                </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.handleInfoPagePressLevel3}
              >
                <View style={styles.learnAlphabets}>
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/37bceb7de2b67373d35de04563721f12' }}
                    style={{ height: 60, width: 60, marginLeft: 10, marginRight: 10 }}
                  />
                  <Text style={styles.alphabetsText}>
                    Level 3
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.handleInfoPagePressLevel4}
              >
                <View style={styles.learnAlphabets}>
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/df923e339b17346aedacd9937b47529f' }}
                    style={{ height: 60, width: 60, marginLeft: 10, marginRight: 10 }}
                  />
                  <Text style={styles.alphabetsText}>
                    Level 4
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.handleInfoPagePressLevel5}
              >
                <View style={styles.learnAlphabets}>
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/bb3a6f932fcd24e7c262a9b0dd4ac583' }}
                    style={{ height: 60, width: 60, marginLeft: 10, marginRight: 10 }}
                  />
                  <Text style={styles.alphabetsText}>
                    Level 5
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.handleInfoPagePressLevel6}
              >
                <View style={styles.learnAlphabets}>
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/bb3a6f932fcd24e7c262a9b0dd4ac583' }}
                    style={{ height: 60, width: 60, marginLeft: 10, marginRight: 10 }}
                  />
                  <Text style={styles.alphabetsText}>
                    Level 6
                  </Text>
                </View>
              </TouchableHighlight>
            </ImageBackground>
          </View>
        </View>
        {/*----------------------------------Document1---------------------------- */}

        <View style={{ display: this.state.Document1 }}>
          <View style={styles.titleBox2}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableHighlight
                onPress={this.handleWelcomePagePress}
              >
                <Image
                  source={{ uri: 'https://codehs.com/uploads/035d39641032510a9199cb180b2453b2' }}
                  style={{ height: 30, width: 30, marginTop: 10 }}
                />

              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.updateDictionary1}
              >

                <Image
                  source={{ uri: 'https://codehs.com/uploads/85686b1ceeb1e76a4d1dcb097d38ecff' }}
                  style={{ height: 30, width: 30, marginLeft: 5, marginTop: 10 }}
                />

              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.updateDictionary2}
              >
                <Image
                  source={{ uri: 'https://codehs.com/uploads/31c77972a6ff96de1f133dd140f47c1c' }}
                  style={{ height: 30, width: 30, marginLeft: 5, marginRight: 200, marginTop: 10 }}
                />

              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.container}>
            <ScrollView>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>
                  English Word: Dog
                        </Text>
                <Text style={styles.text}>
                  Japanese Translation: Inu
                        </Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>
                  English Word: Cat
                        </Text>
                <Text style={styles.text}>
                  Japanese Translation: Neko
                        </Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>
                  English Word: Apple
                        </Text>
                <Text style={styles.text}>
                  Japanese Translation: Ringo
                        </Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>
                  English Word: Car
                        </Text>
                <Text style={styles.text}>
                  Japanese Translation: Karuma
                        </Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>
                  English Word: Rice
                        </Text>
                <Text style={styles.text}>
                  Japanese Translation: Gohan
                        </Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>
                  English Word: Water
                        </Text>
                <Text style={styles.text}>
                  Japanese Translation: Mizu
                        </Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>
                  English Word: Tea
                        </Text>
                <Text style={styles.text}>
                  Japanese Translation: Ocha
                        </Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>
                  English Word: Mountain
                        </Text>
                <Text style={styles.text}>
                  Japanese Translation: Yama
                        </Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>
                  English Word: Fish
                        </Text>
                <Text style={styles.text}>
                  Japanese Translation: Sakana
                        </Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>
                  English Word: Thank you
                        </Text>
                <Text style={styles.text}>
                  Japanese Translation: Arigato
                        </Text>
              </View>
            </ScrollView>
          </View>
        </View>
        {/*------------------------------------Document2-------------------------- */}
        <View style={{ display: this.state.Document2 }}>
          <View style={styles.titleBox2}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableHighlight
                onPress={this.handleWelcomePagePress}
              >
                <Image
                  source={{ uri: 'https://codehs.com/uploads/035d39641032510a9199cb180b2453b2' }}
                  style={{ height: 30, width: 30, marginTop: 10 }}
                />

              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.updateDictionary1}
              >

                <Image
                  source={{ uri: 'https://codehs.com/uploads/85686b1ceeb1e76a4d1dcb097d38ecff' }}
                  style={{ height: 30, width: 30, marginLeft: 7, marginTop: 10 }}
                />

              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.updateDictionary2}
              >
                <Image
                  source={{ uri: 'https://codehs.com/uploads/31c77972a6ff96de1f133dd140f47c1c' }}
                  style={{ height: 30, width: 30, marginLeft: 7, marginRight: 200, marginTop: 10 }}
                />

              </TouchableHighlight>
            </View>
          </View>
          <App2 />
        </View>

        {/*----------------------------------------------Level 1 Page 1--------------------------------------------------------------------------------*/}
        <View style={{ display: this.state.Level1Page1Display }}>
          <ImageBackground
            style={styles.background}
            source={{ uri: 'https://codehs.com/uploads/ac712afe19d9d2e5314aa98b5d7e4d4b' }}
          >
            <View style={styles.question}>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 40, fontWeight: 'bold', color: 'white', marginTop: 10 }}>

                *DUO-JINGO!*
                    </Text>

              <Text style={{ fontFamily: 'Fantasy', fontSize: 28, color: 'yellow', marginTop: 20 }}>
                Topic: Colors! (Level 1)
                    </Text>

            </View>

            <View style={styles.alphabet1}>
              <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, marginRight: 10, borderRadius: 10 }}
                onPress={() => {
                  alert('"Incorrect. Please try again"')
                }}
              >
                <Image
                  source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX9+ADGA7bsAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII=' }}
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 10, borderRadius: 10 }}
                />
              </TouchableHighlight>

              <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, borderRadius: 10 }}
                onPress={() => {
                  alert('"Incorrect. Please try again"')
                }}
              >
                <Image
                  source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUdBfvknNIoAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC' }}
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderRadius: 10 }}
                />
              </TouchableHighlight>
            </View>



            <View style={styles.alphabet2}>
              <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, marginRight: 10, borderRadius: 10 }}
                onPress={() => {
                  alert('"Incorrect. Please try again"')
                }}
              >
                <Image
                  source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAMAAABThUXgAAAAA1BMVEUAhUJ5XHFoAAAAQklEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMC7AbBeAAEQPda+AAAAAElFTkSuQmCC' }}
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderRadius: 10 }}
                />
              </TouchableHighlight>

              <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, borderRadius: 10 }}
                onPress={() => {
                  alert('"Correct!"')
                }}
              >
                <Image
                  source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAUVBMVEX+AAD////9AALuW1vfWVj0Bwe4XXfWAC7eWVn8///ChpvWWnDpXV3sW1zwVljfhIG8WXfWACnfVVK1XXbWACP1AADHWWzaWl3fU1fUhIf6//s8rxfNAAABpUlEQVR4nO3QSVLCAABE0SQCAooDzt7/oMYUVYr/ACx8b9Hrrj+MnNmNu2Hc39weDlec3N2Pw/jwuJ6G2TIMx7nJ5no9TdMwfbv0n8ubptXc5GlpIsnJ0mSjyRlNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqTWpo8v4jxy3Fusn992/5Y/XPb949x+Bz54wvImSbQBDKVugAAAABJRU5ErkJggg==' }}
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderRadius: 10 }}
                />
              </TouchableHighlight>
            </View>

            <View >
              <Text style={styles.questionText}>
                Please select the color 'aka'
                    </Text>
            </View>



            {/*Bottom nav bar shows on each screen*/}
            <View style={styles.navbarContainer}>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleInfoPagePressLevel1}
              >
                <Text style={styles.navButtonText}>
                  1
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel1Page1Press}
              >
                <Text style={styles.navButtonText}>
                  2
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel1Page2Press}
              >
                <Text style={styles.navButtonText}>
                  3
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel1Page3Press}
              >
                <Text style={styles.navButtonText}>
                  4
                        </Text>
              </TouchableHighlight>


            </View>
          </ImageBackground>
        </View>

        {/*----------------------------------------------Level 1 Page2------------------------------------------------------------------------*/}

        <View style={{ display: this.state.Level1Page2Display }}>
          <ImageBackground
            style={styles.background}
            source={{ uri: 'https://codehs.com/uploads/ac712afe19d9d2e5314aa98b5d7e4d4b' }}
          >
            <View style={styles.question}>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 40, fontWeight: 'bold', color: 'white', marginTop: 10 }}>

                *DUO-JINGO!*
                    </Text>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 28, color: 'yellow', marginTop: 20 }}>
                Topic: Foods! (Level 1)
                    </Text>
            </View>

            <View style={styles.alphabet1}>
              <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, marginRight: 10, borderRadius: 10 }}
                onPress={() => {
                  alert('"Incorrect. Please try again"')
                }}
              >
                <Image
                  source={{ uri: 'https://codehs.com/uploads/212918dbe0cb479a10649841aaea9afb' }}
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderRadius: 10 }}
                />
              </TouchableHighlight>

              <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, borderRadius: 10 }}
                onPress={() => {
                  alert('"Incorrect. Please try again"')
                }}
              >
                <Image
                  source={{ uri: 'https://codehs.com/uploads/a3b1dc2ec82dab3622e8f60d7b7ecade' }}
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderRadius: 10 }}
                />
              </TouchableHighlight>
            </View>



            <View style={styles.alphabet2}>
              <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, marginRight: 10, borderRadius: 10 }}
                onPress={() => {
                  alert('"Correct!"')
                }}
              >
                <Image
                  source={{ uri: 'https://codehs.com/uploads/689fcbab3a9e1e41d502097a54d792ff' }}
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderRadius: 10 }}
                />
              </TouchableHighlight>

              <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, borderRadius: 10 }}
                onPress={() => {
                  alert('"Incorrect. Please try again"')
                }}
              >
                <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/1200px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg' }}
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderRadius: 10 }}
                />
              </TouchableHighlight>
            </View>

            <View style={{ fontSize: 25, fontWeight: 'bold', color: 'yellow' }}>
              <Text style={styles.questionText}>
                Which picture is a 'ringo' ?
                    </Text>
            </View>
            {/*Bottom nav bar shows on each screen*/}
            <View style={styles.navbarContainer}>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleInfoPagePressLevel1}
              >
                <Text style={styles.navButtonText}>
                  1
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel1Page1Press}
              >
                <Text style={styles.navButtonText}>
                  2
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel1Page2Press}
              >
                <Text style={styles.navButtonText}>
                  3
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel1Page3Press}
              >
                <Text style={styles.navButtonText}>
                  4
                        </Text>
              </TouchableHighlight>


            </View>
          </ImageBackground>
        </View>
        {/*----------------------------------------------Level 1 Page 3--------------------------------------------------------------*/}
        <View style={{ display: this.state.Level1Page3Display }}>
          <ImageBackground
            style={styles.background}
            source={{ uri: 'https://codehs.com/uploads/ac712afe19d9d2e5314aa98b5d7e4d4b' }}
          >
            <View style={styles.question}>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 40, fontWeight: 'bold', color: 'White', marginTop: 10 }}>

                *DUO-JINGO!*
                    </Text>

              <Text style={{ fontFamily: 'Fantasy', fontSize: 28, color: 'yellow', marginTop: 20 }}>
                Topic: Animals! (Level 1)
                    </Text>

            </View>

            <View style={styles.alphabet1}>
              <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, marginRight: 10, borderRadius: 10 }}
                onPress={() => {
                  alert('"Incorrect. Please try again"')
                }}
              >
                <Image
                  source={{ uri: 'https://codehs.com/uploads/c169b57c32129ac198a39fa8de047fed' }}
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.8, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderRadius: 10 }}
                />
              </TouchableHighlight>

              <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, borderRadius: 10 }}
                onPress={() => {
                  alert('"Correct!"')
                }}
              >
                <Image
                  source={{ uri: 'https://codehs.com/uploads/7a9b9ed2bad66f02d126befaec19c0d1' }}
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.8, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderRadius: 10 }}
                />
              </TouchableHighlight>
            </View>



            <View style={styles.alphabet2}>
              <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, marginRight: 10, borderRadius: 10 }}
                onPress={() => {
                  alert('"Incorrect. Please try again"')
                }}
              >
                <Image
                  source={{ uri: 'https://codehs.com/uploads/651c0d68b8f26b47e490a0c269f2db40' }}
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.8, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderRadius: 10 }}
                />
              </TouchableHighlight>

              <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, borderRadius: 10 }}
                onPress={() => {
                  alert('"Incorrect. Please try again"')
                }}
              >
                <Image
                  source={{ uri: 'https://codehs.com/uploads/982b8026f86539b86473c4ea9367168d' }}
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.8, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderRadius: 10 }}
                />
              </TouchableHighlight>
            </View>

            <View style={{ fontSize: 25, fontWeight: 'bold', color: 'yellow' }}>
              <Text style={styles.questionText}>
                Please select the 'neko'
                    </Text>

            </View>
            {/*Bottom nav bar shows on each screen*/}
            <View style={styles.navbarContainer}>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleInfoPagePressLevel1}
              >
                <Text style={styles.navButtonText}>
                  1
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel1Page1Press}
              >
                <Text style={styles.navButtonText}>
                  2
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel1Page2Press}
              >
                <Text style={styles.navButtonText}>
                  3
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel1Page3Press}
              >
                <Text style={styles.navButtonText}>
                  4
                        </Text>
              </TouchableHighlight>


            </View>
          </ImageBackground>
        </View>
        {/*----------------------------------------------Level 1 Congratulations--------------------------------------------------*/}
        <View style={{ display: this.state.CongratulaionPageDisplay }}>
          <ImageBackground
            style={styles.background}
            source={{ uri: 'https://i.pinimg.com/originals/c3/86/e5/c386e5e3d57b76dd6438cc26fc74d23f.jpg' }}
          >

            <View style={styles.question}>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 40, fontWeight: 'bold', color: 'lightgreen', }}>

                *DUO-JINGO!*
                    </Text>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 15, fontWeight: 'bold', color: 'lightgreen', marginTop: 20, }}>
                ------Free mobile language learning app-------
                    </Text>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 30, color: 'yellow', marginTop: 20 }}>
                Congratulations!
                    </Text>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 15, fontWeight: 'bold', alignText: 'center', color: 'yellow', marginTop: 15 }}>
                YOU COMPLETED LEVEL 1
                    </Text>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 15, fontWeight: 'bold', alignText: 'center', color: 'yellow', marginTop: 0 }}>
                ELEMENTARY JAPANESE
                    </Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableHighlight
                onPress={this.handleWelcomePagePress}
              >
                <Image
                  source={{ uri: 'https://previews.123rf.com/images/tillhunter/tillhunter1706/tillhunter170600262/80033273-japanese-kanji-victory.jpg' }}
                  style={{ height: 130, width: 130 }}
                />
              </TouchableHighlight>


            </View>

            <View style={styles.textContainer}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'yellow' }}>
                Please select the above kanji
                    </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'yellow' }}>
                to continue
                    </Text>

            </View>
            {/*Bottom nav bar shows on each screen*/}
            <View style={styles.navbarContainer}>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleInfoPagePressLevel1}
              >
                <Text style={styles.navButtonText}>
                  1
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel1Page1Press}
              >
                <Text style={styles.navButtonText}>
                  2
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel1Page2Press}
              >
                <Text style={styles.navButtonText}>
                  3
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel1Page3Press}
              >
                <Text style={styles.navButtonText}>
                  4
                        </Text>
              </TouchableHighlight>


            </View>
          </ImageBackground>
        </View>

        {/*----------------------------------------------Level 2 Page 1--------------------------------------------------------------------------------*/}
        <View style={{ display: this.state.Level2Page2Display }}>
          <View style={styles.mainContainer}>
            <ImageBackground
              style={styles.background}
              source={{ uri: 'https://codehs.com/uploads/924a0e5c8fb12b162395bd05207f1646' }}
            >

              <View style={styles.question}>
                <Text style={styles.appName}>
                  *DUO-JINGO!*
                            </Text>
                <Text style={styles.topic}>
                  Topic: Selecting Alphabet
                            </Text>
              </View>
              <View style={styles.alphabet1}>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 30, marginRight: 10, borderRadius: 10 }}
                  onPress={this.updateScoreCount1}
                  //onPress={this._handlePlaySoundAsync1}
                  underlayColor="white"
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/b15339e2b56c50e32db5d0ab0d5b3cac' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, }}

                  />
                </TouchableHighlight>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 30, borderRadius: 10 }}
                  onPress={this.updateScoreCount2}
                  underlayColor="white"
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/6e40169b734d62d88cacd2dbb371d0ab' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, }}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.alphabet2}>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, marginRight: 10, borderRadius: 10 }}
                  underlayColor="white"
                  onPress={this.updateScoreCount2}
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/1c78159cc20c0bd709c42a0ee5d79a86' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, }}
                  />
                </TouchableHighlight>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, borderRadius: 10 }}
                  underlayColor="white"
                  onPress={this.updateScoreCount2}
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/9ca6d80e2cfa5414c1a75a2f9c097587' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, }}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.ques}>
                <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 20, color: '#3F51B5' }}>
                  Select the correct character for "ho"
                            </Text>
              </View>
              <View style={styles.navButton}>
                <TouchableHighlight style={styles.checkButton}

                  onPress={this.updateCheckCount}
                  underlayColor="#009688"
                >

                  <Text style={styles.checkText}>
                    {this.state.message}
                  </Text>

                </TouchableHighlight>
              </View>
            </ImageBackground>
          </View>
        </View>
        {/*-----------------------------------------Level2 page 2---------------------------------------------------------------------------------*/}
        <View style={{ display: this.state.Level2Page3Display }}>
          <View style={styles.mainContainer}>
            <ImageBackground
              style={styles.background}
              source={{ uri: 'https://codehs.com/uploads/924a0e5c8fb12b162395bd05207f1646' }}
            >

              <View style={styles.question}>
                <Text style={styles.appName}>
                  *DUO-JINGO!*
                        </Text>
                <Text style={styles.topic}>
                  Topic: Selecting Alphabets
                        </Text>
              </View>
              <View style={styles.alphabet1}>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 30, marginRight: 10, borderRadius: 10 }}
                  onPress={this.updateScoreCount2}
                  underlayColor="white"
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/e71514187c2103d43f5743038015484f' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, }}
                  />
                </TouchableHighlight>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 30, borderRadius: 10 }}
                  onPress={this.updateScoreCount1}
                  underlayColor="white"
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/21585ed429fc72a9eccc538c7dc2b4a9' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, }}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.alphabet2}>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, marginRight: 10, borderRadius: 10 }}
                  underlayColor="white"
                  onPress={this.updateScoreCount2}
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/06e82dfe1378347e57b15cf9169312fa' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, }}
                  />
                </TouchableHighlight>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, borderRadius: 10 }}
                  underlayColor="white"
                  onPress={this.updateScoreCount2}
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/f4196b7175422b83c304b6f3af7e0d80' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, }}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.ques}>
                <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 20, color: 'black' }}>
                  Select the correct character for "shi"
                        </Text>
              </View>
              <View style={styles.navButton}>
                <TouchableHighlight style={styles.checkButton}

                  onPress={this.updateCheckCount}
                  underlayColor="#009688"
                >

                  <Text style={styles.checkText}>
                    {this.state.message}
                  </Text>

                </TouchableHighlight>
              </View>
            </ImageBackground>
          </View>
        </View>
        {/*-----------------------------------------Level 2page 3---------------------------------------------------------------------------------*/}
        <View style={{ display: this.state.Level2Page4Display }}>
          <View style={styles.mainContainer}>
            <ImageBackground
              style={styles.background}
              source={{ uri: 'https://codehs.com/uploads/924a0e5c8fb12b162395bd05207f1646' }}
            >

              <View style={styles.question}>
                <Text style={styles.appName}>
                  *DUO-JINGO!*
                        </Text>
                <Text style={styles.topic}>
                  Topic: Forming Words
                        </Text>

              </View>
              <View style={styles.alphabet1}>
                <TouchableHighlight
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 30, marginRight: 10, borderRadius: 10, }}
                  onPress={this.updateScoreCount1}
                  underlayColor="white"
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/1a38a58658ef6be4126f0ade95e21c35' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, }}
                  />
                </TouchableHighlight>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 30, borderRadius: 10 }}
                  onPress={this.updateScoreCount2}
                  underlayColor="white"
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/03707325b3231cc800bb94191a282e07' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, }}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.alphabet2}>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, marginRight: 10, borderRadius: 10 }}

                  underlayColor="white"
                  onPress={this.updateScoreCount2}
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/46cf41a5bc1d3c48e4d128fef73e58fd' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, }}
                  />
                </TouchableHighlight>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, borderRadius: 10 }}

                  underlayColor="white"
                  onPress={this.updateScoreCount3}
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/7eac8ab54dacaf88bed4f9ab7a0dce1d' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, }}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.ques}>
                <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 20, color: 'maroon' }}>
                  Tap the pairs to make "One"
                        </Text>
              </View>
              <View style={styles.navButton}>
                <TouchableHighlight style={styles.checkButton}
                  onPress={this.updateCheckPair}
                  underlayColor="#009688"
                >
                  <Text style={styles.checkText}>
                    {this.state.message}
                  </Text>
                </TouchableHighlight>
              </View>
            </ImageBackground>
          </View>
        </View>
        {/*----------------------------------------------Level 2 Congratulations--------------------------------------------------*/}
        <View style={{ display: this.state.CongratulaionPage2Display }}>
          <ImageBackground
            style={styles.background}
            source={{ uri: 'https://i.pinimg.com/originals/c3/86/e5/c386e5e3d57b76dd6438cc26fc74d23f.jpg' }}
          >

            <View style={styles.question}>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 40, fontWeight: 'bold', color: 'maroon', }}>

                *DUO-JINGO!*
                    </Text>

              <Text style={{ fontFamily: 'Fantasy', fontSize: 15, fontWeight: 'bold', alignText: 'center', color: 'black', marginTop: 15 }}>
                YOU COMPLETED LEVEL 2
                    </Text>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 15, fontWeight: 'bold', alignText: 'center', color: 'black', marginTop: 0 }}>
                ELEMENTARY JAPANESE
                    </Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableHighlight
                onPress={this.handleWelcomePagePress}
              >
                <Image
                  source={{ uri: 'https://previews.123rf.com/images/tillhunter/tillhunter1706/tillhunter170600262/80033273-japanese-kanji-victory.jpg' }}
                  style={{ height: 130, width: 130 }}
                />
              </TouchableHighlight>


            </View>

            <View style={styles.textContainer}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'maroon' }}>
                Please select the above kanji
                    </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'maroon' }}>
                to continue
                    </Text>

            </View>
          </ImageBackground>
        </View>




        {/*-----------------------------------------Level 3page 1---------------------------------------------------------------------------------*/}
        <View style={{ display: this.state.Level3Page1Display }}>
          <View style={styles.mainContainer}>
            <ImageBackground
              style={styles.background}
              source={{ uri: 'https://codehs.com/uploads/a2e90ab137071406dacc9e7c2fcec4d4' }}
            >

              <View style={styles.question}>
                <Text style={styles.appName}>
                  *DUO-JINGO!*
                        </Text>
                <Text style={styles.topic}>
                  Topic: Listening
                        </Text>

              </View>
              <View style={styles.alphabet1}>
                <TouchableHighlight
                  style={{ height: deviceHeight / 5, width: deviceHeight / 4.2, marginTop: 30, margin: 5, borderRadius: 10, }}
                  onPress={this._handlePlaySoundAsync2}
                  underlayColor="white"
                >
                  <View
                    style={{ height: deviceHeight / 5, width: deviceHeight / 4, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderColor: 'black', borderWidth: 2, borderRadius: 7 }}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>

                      それ
                    </Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 4.2, marginTop: 30, margin: 5, borderRadius: 10 }}
                  onPress={this._handlePlaySoundAsync1}
                  underlayColor="white"
                >
                  <View
                    style={{ height: deviceHeight / 5, width: deviceHeight / 4, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderColor: 'black', borderWidth: 2, borderRadius: 7 }}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>
                      はい
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>

              <View style={styles.ques}>
                <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 20, color: 'maroon' }}>
                  Select the word "Yes"
                        </Text>
              </View>
              <View style={styles.navButton}>
                <TouchableHighlight style={styles.checkButton}
                  onPress={this.updateCheckCount1}
                  underlayColor="#009688"
                >
                  <Text style={styles.checkText}>
                    {this.state.message}
                  </Text>
                </TouchableHighlight>
              </View>
            </ImageBackground>
          </View>
        </View>
        {/*-----------------------------------------Level 3page 2---------------------------------------------------------------------------------*/}
        <View style={{ display: this.state.Level3Page2Display }}>
          <View style={styles.mainContainer}>
            <ImageBackground
              style={styles.background}
              source={{ uri: 'https://codehs.com/uploads/a2e90ab137071406dacc9e7c2fcec4d4' }}
            >

              <View style={styles.question}>
                <Text style={styles.appName}>
                  *DUO-JINGO!*
                        </Text>
                <Text style={styles.topic}>
                  Topic: Listening
                        </Text>

              </View>
              <View style={styles.alphabet1}>
                <TouchableHighlight
                  style={{ height: deviceHeight / 5, width: deviceHeight / 4, marginTop: 30, borderRadius: 10, }}
                  onPress={this._handlePlaySoundAsync3}
                  underlayColor="white"
                >
                  <View
                    style={{ height: deviceHeight / 5, width: deviceHeight / 4, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderColor: 'black', borderWidth: 2, borderRadius: 7 }}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>

                      あの
                    </Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 30, borderRadius: 10 }}
                  onPress={this._handlePlaySoundAsync4}
                  underlayColor="white"
                >
                  <View
                    style={{ height: deviceHeight / 5, width: deviceHeight / 4, backgroundColor: 'white', opacity: 0.6, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderColor: 'black', borderWidth: 2, borderRadius: 7 }}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>

                      この
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>

              <View style={styles.ques}>
                <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 20, color: 'maroon' }}>
                  Select the word "that"
                        </Text>
              </View>
              <View style={styles.navButton}>
                <TouchableHighlight style={styles.checkButton}
                  onPress={this.updateCheckCount1}
                  underlayColor="#009688"
                >
                  <Text style={styles.checkText}>
                    {this.state.message}
                  </Text>
                </TouchableHighlight>
              </View>
            </ImageBackground>
          </View>
        </View>
        {/*----------------------------------------------Level 3 Congratulations--------------------------------------------------*/}
        <View style={{ display: this.state.CongratulaionPage3Display }}>
          <ImageBackground
            style={styles.background}
            source={{ uri: 'https://i.pinimg.com/originals/c3/86/e5/c386e5e3d57b76dd6438cc26fc74d23f.jpg' }}
          >

            <View style={styles.question}>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 40, fontWeight: 'bold', color: 'maroon', }}>

                *DUO-JINGO!*
                    </Text>


              <Text style={{ fontFamily: 'Fantasy', fontSize: 15, fontWeight: 'bold', alignText: 'center', color: 'black', marginTop: 15 }}>
                YOU COMPLETED LEVEL 3
                    </Text>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 15, fontWeight: 'bold', alignText: 'center', color: 'black', marginTop: 0 }}>
                ELEMENTARY JAPANESE
                    </Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableHighlight
                onPress={this.handleWelcomePagePress}
              >
                <Image
                  source={{ uri: 'https://previews.123rf.com/images/tillhunter/tillhunter1706/tillhunter170600262/80033273-japanese-kanji-victory.jpg' }}
                  style={{ height: 130, width: 130 }}
                />
              </TouchableHighlight>


            </View>

            <View style={styles.textContainer}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'maroon' }}>
                Please select the above kanji
                    </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'maroon' }}>
                to proceed
                    </Text>

            </View>
          </ImageBackground>
        </View>


        {/*----------------------------------Level4Page1------------------------------ */}<View style={{ display: this.state.Level4Page1Display }}>
          <View style={styles.mainContainer}>
            <ImageBackground
              style={styles.background}
              source={{ uri: 'https://codehs.com/uploads/508dbfebefb45b03ccec2925c2e0ff34' }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View style={{ height: deviceHeight / 50, width: deviceWidth / 2.1, backgroundColor: '#22FD5C', borderRadius: 5 }}>
                </View>
                <View style={{ height: deviceHeight / 50, width: deviceWidth / 2.5, backgroundColor: '#22FD5C', borderRadius: 5 }}>
                </View>
              </View>

              <View style={styles.question1}>
                <Text style={styles.topic}>
                  Tap what you hear
                </Text>
                <TouchableHighlight
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, margin: 5, borderRadius: 100, }}
                  onPress={this._handlePlaySoundPlease}
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/355b10d6536ddc2b71663357c178d25d' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderRadius: 100 }}
                  />
                </TouchableHighlight>
              </View>

              <View style={styles.alphabet1}>
                <TouchableHighlight
                  style={{ height: deviceHeight / 5, width: deviceHeight / 4.2, marginTop: 30, margin: 5, borderRadius: 10, }}
                  onPress={this.updateScoreCount1}
                  underlayColor="white"
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/3db400dbca61fc64f24e58316eb6c26e' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 4.2, backgroundColor: 'white', opacity: 0.8, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderColor: 'black', borderWidth: 2, borderRadius: 7 }}
                  />
                </TouchableHighlight>
                <TouchableHighlight style={{ height: deviceHeight / 5, width: deviceHeight / 4.2, marginTop: 30, margin: 5, borderRadius: 10 }}
                  onPress={this.updateScoreCount2}
                  underlayColor="white"
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/c60c7d5219040f015f7c2f8828b3ecbd' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 4.2, backgroundColor: 'white', opacity: 0.8, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderColor: 'black', borderWidth: 2, borderRadius: 7 }}
                  />
                </TouchableHighlight>
              </View>

              <View style={styles.navButton}>
                <TouchableHighlight style={styles.checkButton}
                  onPress={this.updateCheckCountLevel4}
                  underlayColor="#009688"
                >
                  <Text style={styles.checkText}>
                    {this.state.message}
                  </Text>
                </TouchableHighlight>
              </View>
            </ImageBackground>
          </View>
        </View>

        {/*-------------------------------------Level 4 Page 2-------------------------*/}
        <View style={{ display: this.state.Level4Page2Display }}>
          <View style={styles.mainContainer}>
            <ImageBackground
              style={styles.background}
              source={{ uri: 'https://codehs.com/uploads/508dbfebefb45b03ccec2925c2e0ff34' }}
            >

              <View style={styles.question1}>
                <Text style={styles.topic}>
                  Write what you hear
                </Text>
                <TouchableHighlight
                  style={{ height: deviceHeight / 5, width: deviceHeight / 5, marginTop: 10, margin: 5, borderRadius: 100, }}
                  onPress={this._handlePlaySoundPlease}
                >
                  <Image
                    source={{ uri: 'https://codehs.com/uploads/355b10d6536ddc2b71663357c178d25d' }}
                    style={{ height: deviceHeight / 5, width: deviceHeight / 5, shadowOffset: { height: 3, width: 0 }, shadowColor: 'black', shadowOpacity: 0.9, shadowRadius: 5, borderRadius: 100 }}
                  />
                </TouchableHighlight>
              </View>

              <View style={styles.alphabet1}>


                <TextInput style={{ textShadow: 2, fontSize: 20, borderBottom: 'solid', borderBottomWidth: 2, borderColor: 'black', height: deviceHeight / 10, width: deviceWidth / 1.5, textAlign: 'center' }}
                  onChangeText={(recipient) => this.setState({ recipient })}
                  value={this.state.recipient}
                />

              </View>

              <View style={styles.navButton}>
                <TouchableHighlight style={styles.checkButton}
                  onPress={this.updateCheckCountLevel4}
                  underlayColor="#009688"
                >
                  <Text style={styles.checkText}>
                    {this.state.message}
                  </Text>
                </TouchableHighlight>
              </View>
            </ImageBackground>
          </View>
        </View>


        {/*----------------------------------------------Level 4 Congratulations--------------------------------------------------*/}
        <View style={{ display: this.state.CongratulaionPage4Display }}>
          <ImageBackground
            style={styles.background}
            source={{ uri: 'https://i.pinimg.com/originals/c3/86/e5/c386e5e3d57b76dd6438cc26fc74d23f.jpg' }}
          >

            <View style={styles.question}>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 40, fontWeight: 'bold', color: 'maroon', }}>

                *DUO-JINGO!*
                    </Text>


              <Text style={{ fontFamily: 'Fantasy', fontSize: 15, fontWeight: 'bold', alignText: 'center', color: 'black', marginTop: 15 }}>
                YOU COMPLETED LEVEL 4
                    </Text>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 15, fontWeight: 'bold', alignText: 'center', color: 'black', marginTop: 0 }}>
                ELEMENTARY JAPANESE
                    </Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableHighlight
                onPress={this.handleWelcomePagePress}
              >
                <Image
                  source={{ uri: 'https://previews.123rf.com/images/tillhunter/tillhunter1706/tillhunter170600262/80033273-japanese-kanji-victory.jpg' }}
                  style={{ height: 130, width: 130 }}
                />
              </TouchableHighlight>


            </View>

            <View style={styles.textContainer}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'maroon' }}>
                Please select the above kanji
                    </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'maroon' }}>
                to proceed
                    </Text>

            </View>
          </ImageBackground>
        </View>
        {/*-------------------------------Level 6------------------------------------ */}
        <View style={{ display: this.state.Level6Page1Display }}>
          <View style={styles.background}>
            <App3 />

            <View style={styles.navbarContainer}>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleInfoPagePressLevel6}
              >
                <Text style={styles.navButtonText}>
                  1
              </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel6Page2Press}
              >
                <Text style={styles.navButtonText}>
                  2
              </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        {/*----------------------------------Level 5 Page1---------------------------- */}
        <View style={{ display: this.state.Level5Page1Display }}>
          <ImageBackground
            style={styles.background}
            source={{ uri: 'https://codehs.com/uploads/a2e90ab137071406dacc9e7c2fcec4d4' }}
          >

            <View style={styles.textContainer}>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 28, color: 'white', marginTop: 20 }}>
                Topic: Colors! (Level 5)
                    </Text>

            </View>

            <View style={styles.buttonContainer}>

              <Image
                source={{ uri: 'https://codehs.com/uploads/4558b4e664b6f5bb4b614cb6ac4b9022' }}
                style={{ height: 120, width: 120, borderRadius: 10 }}
              />

            </View>

            <TouchableHighlight
              style={styles.currencyButton}
              onPress={this.checkAnswer}
              underlayColor="#C7DEF6"
            >
              <Text style={styles.currency}>
                Check Answer
                  </Text>
            </TouchableHighlight>



            <View style={styles.textContainer}>
              <Text style={styles.bottomText}>
                Type 'apple' in Japanese
                </Text>
              <TextInput style={styles.textInput}
                onChangeText={(check) => this.setState({ check })}
                value={this.state.check}
              />

            </View>
            {/*Bottom nav bar shows on each screen*/}
            <View style={styles.navbarContainer}>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleInfoPagePressLevel5}
              >
                <Text style={styles.navButtonText}>
                  1
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page2Press}
              >
                <Text style={styles.navButtonText}>
                  2
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page3Press}
              >
                <Text style={styles.navButtonText}>
                  3
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page4Press}
              >
                <Text style={styles.navButtonText}>
                  4
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page5Press}
              >
                <Text style={styles.navButtonText}>
                  5
                        </Text>
              </TouchableHighlight>


            </View>
          </ImageBackground>
        </View>
        {/*----------------------------------Level 5 Page2---------------------------- */}
        <View style={{ display: this.state.Level5Page2Display }}>
          <ImageBackground
            style={styles.background}
            source={{ uri: 'https://codehs.com/uploads/a2e90ab137071406dacc9e7c2fcec4d4' }}
          >

            <View style={styles.textContainer}>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 28, color: 'white', marginTop: 20 }}>
                Topic: Colors! (Level 5)
                    </Text>

            </View>

            <View style={styles.buttonContainer}>

              <Image
                source={{ uri: 'https://codehs.com/uploads/329ec0de53c000c0597eae549544f684' }}
                style={{ height: 52, width: 120, borderRadius: 10 }}
              />

            </View>

            <TouchableHighlight
              style={styles.currencyButton}
              onPress={this.checkAnswer}
              underlayColor="#C7DEF6"
            >
              <Text style={styles.currency}>
                Check Answer
                  </Text>
            </TouchableHighlight>



            <View style={styles.textContainer}>
              <Text style={styles.bottomText}>
                Type 'car' in Japanese
                </Text>
              <TextInput style={styles.textInput}
                onChangeText={(checkCar) => this.setState({ checkCar })}
                value={this.state.checkCar}
              />

            </View>
            {/*Bottom nav bar shows on each screen*/}
            <View style={styles.navbarContainer}>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleInfoPagePressLevel5}
              >
                <Text style={styles.navButtonText}>
                  1
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page2Press}
              >
                <Text style={styles.navButtonText}>
                  2
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page3Press}
              >
                <Text style={styles.navButtonText}>
                  3
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page4Press}
              >
                <Text style={styles.navButtonText}>
                  4
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page5Press}
              >
                <Text style={styles.navButtonText}>
                  5
                        </Text>
              </TouchableHighlight>

            </View>
          </ImageBackground>
        </View>
        {/*----------------------------------Level 5 Page3---------------------------- */}
        <View style={{ display: this.state.Level5Page3Display }}>
          <ImageBackground
            style={styles.background}
            source={{ uri: 'https://codehs.com/uploads/a2e90ab137071406dacc9e7c2fcec4d4' }}
          >

            <View style={styles.textContainer}>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 28, color: 'white', marginTop: 20 }}>
                Topic: Colors! (Level 5)
                    </Text>

            </View>

            <View style={styles.buttonContainer}>

              <Image
                source={{ uri: 'https://codehs.com/uploads/0d00419e19f4bee51dd7c1fb85477f7c' }}
                style={{ height: 120, width: 120, borderRadius: 10 }}
              />

            </View>

            <TouchableHighlight
              style={styles.currencyButton}
              onPress={this.checkAnswer}
              underlayColor="#C7DEF6"
            >
              <Text style={styles.currency}>
                Check Answer
                  </Text>
            </TouchableHighlight>



            <View style={styles.textContainer}>
              <Text style={styles.bottomText}>
                Type 'cat' in Japanese
                </Text>
              <TextInput style={styles.textInput}
                onChangeText={(checkCat) => this.setState({ checkCat })}
                value={this.state.checkCat}
              />

            </View>
            {/*Bottom nav bar shows on each screen*/}
            <View style={styles.navbarContainer}>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleInfoPagePressLevel5}
              >
                <Text style={styles.navButtonText}>
                  1
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page2Press}
              >
                <Text style={styles.navButtonText}>
                  2
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page3Press}
              >
                <Text style={styles.navButtonText}>
                  3
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page4Press}
              >
                <Text style={styles.navButtonText}>
                  4
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page5Press}
              >
                <Text style={styles.navButtonText}>
                  5
                        </Text>
              </TouchableHighlight>


            </View>
          </ImageBackground>
        </View>
        {/*--------------------------------Level5 Page4------------------------------ */}
        <View style={{ display: this.state.Level5Page4Display }}>
          <ImageBackground
            style={styles.background}
            source={{ uri: 'https://codehs.com/uploads/a2e90ab137071406dacc9e7c2fcec4d4' }}
          >

            <View style={styles.titleBox}>
              <Text style={{ textAlign: 'center', fontSize: 50, fontWeight: 'bold', color: 'white', marginTop: 45 }}>
                {this.state.message1}
              </Text>
            </View>
            <Image
              source={this.state.image}
              style={{ height: 185, width: 120, marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto' }}
            />
            <View style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}>
              <TouchableHighlight
                onPress={() => this.chooseWinner('Capitals')}
              >
                <View style={styles.button}>
                  <Text style={{ color: 'white' }}>

                    Rice
                                </Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => this.chooseWinner('Rangers')}
              >
                <View style={styles.button}>
                  <Text style={{ color: 'white' }}>
                    Fish
                                </Text>
                </View>
              </TouchableHighlight>
            </View>

            {/*Bottom nav bar shows on each screen*/}
            <View style={styles.navbarContainer}>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleInfoPagePressLevel5}
              >
                <Text style={styles.navButtonText}>
                  1
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page2Press}
              >
                <Text style={styles.navButtonText}>
                  2
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page3Press}
              >
                <Text style={styles.navButtonText}>
                  3
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page4Press}
              >
                <Text style={styles.navButtonText}>
                  4
                        </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.navButton1}
                onPress={this.handleLevel5Page5Press}
              >
                <Text style={styles.navButtonText}>
                  5
                        </Text>
              </TouchableHighlight>
            </View>
          </ImageBackground>
        </View>
        {/*---------------------------------Level5 Congratulation-------------------- */}
        <View style={{ display: this.state.CongratulaionPage5Display }}>
          <ImageBackground
            style={styles.background}
            source={{ uri: 'https://i.pinimg.com/originals/c3/86/e5/c386e5e3d57b76dd6438cc26fc74d23f.jpg' }}
          >

            <View style={styles.question}>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 40, fontWeight: 'bold', color: 'maroon', }}>

                *DUO-JINGO!*
                    </Text>


              <Text style={{ fontFamily: 'Fantasy', fontSize: 15, fontWeight: 'bold', alignText: 'center', color: 'black', marginTop: 15 }}>
                YOU COMPLETED THE LEVEL
                    </Text>
              <Text style={{ fontFamily: 'Fantasy', fontSize: 15, fontWeight: 'bold', alignText: 'center', color: 'black', marginTop: 0 }}>
                ELEMENTARY JAPANESE
                    </Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableHighlight
                onPress={this.handleWelcomePagePress}
              >
                <Image
                  source={{ uri: 'https://previews.123rf.com/images/tillhunter/tillhunter1706/tillhunter170600262/80033273-japanese-kanji-victory.jpg' }}
                  style={{ height: 130, width: 130 }}
                />
              </TouchableHighlight>


            </View>

            <View style={styles.textContainer}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'maroon' }}>
                Please select the above kanji
                    </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'maroon' }}>
                to proceed
                    </Text>

            </View>

          </ImageBackground>

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: 'white',
  },
  appName: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15
  },
  topic: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  background: {
    alignItems: 'center',
    height: deviceHeight,
    justifyContent: 'space-around',
  },
  background1: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
  },
  question: {
    alignItems: 'center',
  },
  questionText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white'
  },

  navbarContainer: {
    height: deviceHeight / 6,
    width: deviceWidth,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderTopColor: 'white',
    borderBottomColor: 'black',
  },
  navButton1: {
    height: deviceHeight / 14,
    width: deviceWidth / 10,
    backgroundColor: 'white',
    borderColor: 'lightblue',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  alphabet1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alphabet2: {
    flexDirection: 'row',
  },

  navButton: {
    height: deviceHeight / 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkButton: {
    height: deviceHeight / 13,
    width: deviceWidth,
    marginTop: 45,
    backgroundColor: 'silver',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkText: {
    fontWeight: 'bold',
    fontSize: 20,

  },
  titleBox: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'maroon',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },

  n1: {
    backgroundColor: 'black',
    height: 50,
    width: deviceWidth - 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    borderRadius: 20,
  },
  next: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  container2: {
    // flex: 1,
    backgroundColor: 'white',
  },
  titleBox2: {
    backgroundColor: 'black',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /*titleText2: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },*/
  textContainer: {
    alignItems: 'center',
  },
  learnAlphabets: {
    shadowOffset: { height: 3, width: 0 },
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 5,
    backgroundColor: 'black',
    opacity: 0.6,
    margin: 10,
    height: 80,
    width: deviceWidth - 20,
    alignItems: 'center',
    //  justifyContent: 'left',
    borderRadius: 5,
    flexDirection: 'row',
  },
  alphabetsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textInput: {
    textAlign: 'center',
    backgroundColor: 'white',
    height: deviceHeight / 10,
    width: deviceWidth / 2,
    fontSize: deviceHeight / 15,
    borderWidth: 1,
    borderColor: '#6B3074',
    marginTop: 10,
  },
  currencyButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight / 10,
    width: deviceWidth / 2.5,
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#581845',
    borderRadius: 10,

  },
  bottomText: {
    fontFamily: 'Fantasy',
    fontSize: 27,
    color: 'white',
    marginTop: 30,
  },
  button: {
    height: 35,
    width: 100,
    backgroundColor: 'black',
    margin: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Document1
  itemContainer: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 2,
    borderColor: 'purple',
    backgroundColor: 'pink',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    marginBottom: 2,
  }
});