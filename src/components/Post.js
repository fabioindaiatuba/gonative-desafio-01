import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
  },
  txtTitulo: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtAutor: {
    color: '#999999',
    marginBottom: 10,
  },
  descricao: {
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingTop: 10,
  },
  txtDescricao: {
    color: '#666666',
  },
});

const Post = props => (
  <View style={[styles.container, props.style]}>
    <Text style={styles.txtTitulo}>{props.titulo}</Text>
    <Text style={styles.txtAutor}>{props.autor}</Text>
    <View style={styles.descricao}>
      <Text style={styles.txtDescricao}>{props.descricao}</Text>
    </View>
  </View>
);


export default Post;

