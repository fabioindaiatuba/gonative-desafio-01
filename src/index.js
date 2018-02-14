import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import Post from 'components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#FFFFFF',
  },
  txtTitulo: {
    borderTopColor: '#EEEEEE',
    borderTopWidth: 1,
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        titulo: "Primeiro post",
        autor: "Fabio Gonçalves",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 2,
        titulo: "Segundo Post",
        autor: "Fabio Gonçalves",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 3,
        titulo: "Terceiro Post",
        autor: "Fabio Gonçalves",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtTitulo}>GoNative App</Text>
        </View>
        <ScrollView >
          { this.state.posts.map(post =>
            <Post key={post.id} titulo={post.titulo} autor={post.autor} descricao={post.descricao} />)
          }
        </ScrollView>
      </View>
    );
  }
}
