import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

interface Participant {
  nome: string;
  rm: string;
  descricao: string;
  foto: string;
}

const DetalhesScreen = ({ route }: { route: any }) => {
  const { aluno }: { aluno: Participant } = route.params;

  let gradientColors: string[] = [];

  if (aluno.nome === 'Breno Rocha') {
    gradientColors = ['#FF8C00', '#FFA500'];
  } else if (aluno.nome === 'Fernando Martins') {
    gradientColors = ['#4c779f', '#20B2AA'];
  } else if (aluno.nome === 'Matheus Lopes') {
    gradientColors = ['#008000', '#32CD32'];
  } else {
    gradientColors = ['#48D1CC', '#008B8B'];
  }

  return (
    <LinearGradient colors={gradientColors} style={styles.container}>
      <ScrollView>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Detalhes do Aluno</Text>
        <View style={styles.imageContainer}>
          <Image source={{uri: aluno.foto}} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{aluno.nome}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>RM:</Text>
          <Text style={styles.value}>{aluno.rm}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Descrição:</Text>
          <Text style={styles.value}>{aluno.descricao}</Text>
        </View>
      </View>
      </ScrollView>
    </LinearGradient>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  infoContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#fff',
  },
});


export default DetalhesScreen;
