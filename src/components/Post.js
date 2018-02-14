import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitulo}>{this.props.titulo}</Text>
        <Text style={styles.txtAutor}>{this.props.autor}</Text>
        <View style={styles.descricao}>
          <Text style={styles.txtDescricao}>{this.props.descricao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
  },
  txtTitulo: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtAutor: {
    color: "#999999",
    marginBottom: 10,
  },
  descricao: {
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingTop: 10,
  },
  txtDescricao: {
    color: "#666666",
  }
});
