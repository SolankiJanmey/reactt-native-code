import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
  Platform,
} from 'react-native';
import styles from './styles';

export class Cat extends Component {
  state = {isHungry: true};

  render(props) {
    return (
      <View>
        <Text>
          I am {this.props.name}, and I am
          {this.state.isHungry ? ' hungry' : ' full'}!
        </Text>
        <Button
          onPress={() => {
            this.setState({isHungry: false});
          }}
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry ? 'Pour me some milk, please!' : 'Thank you!'
          }
        />
      </View>
    );
  }
}

class App1 extends Component {
  state = {
    email: '',
    password: '',
  };
  handleEmail = (text) => {
    this.setState({email: text, Error: false});
  };
  handlePassword = (text) => {
    this.setState({password: text, Error: false});
  };
  login = (email, pass) => {
    if (this.state.email != '') {
      //Check for the Name TextInput
      if (this.state.password != '') {
        //Check for the Email TextInput
        alert(
          'email: ' +
            this.state.email +
            '\n' +
            'password: ' +
            this.state.password,
        );
      } else {
        alert('Please Enter Email');
      }
    } else {
      alert('Please Enter Password');
    }
  };
  render() {
    console.log('Test');
    console.log('email', this.state.email);
    console.log('password', this.state.password);
    console.log('android version', Platform.Version);
    return (
      <>
        <ScrollView>
          <Cat name="Munkustrap" />
          <Cat name="Spot" />
          <ScrollView horizontal>
            <Image
              source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
              }}
              style={styles.image}
            />

            <Image
              source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
              }}
              style={styles.image}
            />
            <Image
              source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
              }}
              style={styles.image}
            />
          </ScrollView>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="red"
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            onChangeText={this.handleEmail}
            value="text"
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            onChangeText={this.handlePassword}
          />

          <TouchableOpacity style={styles.submitButton} onPress={this.login}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </ScrollView>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {
              title: 'J',
              data: [
                'Jackson',
                'James',
                'Jillian',
                'Jimmy',
                'Joel',
                'John',
                'Julie',
              ],
            },
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </>
    );
  }
}

export default App1;
