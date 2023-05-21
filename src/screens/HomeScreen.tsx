import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Participant {
  nome: string;
  rm: string;
  descricao: string;
  foto: string;
}

const PARTICIPANTES: Participant[] = [
  { nome: 'Breno Rocha', rm: '344194', descricao: 'Comecei minha carreira na área de TI na BRQ Digital Solutions, onde fui estagiário de desenvolvimento android no ano de 2019. Sou Desenvolvedor Android no momento na empresa PicPay. Graduado em Análise e Desenvolvimento de Sistemas pela Fatec São Caetano do Sul.', foto: 'https://media.licdn.com/dms/image/D4D03AQHnixPiI09D0Q/profile-displayphoto-shrink_800_800/0/1680329208127?e=1688601600&v=beta&t=ukYabvyreVU0StJTO4OTIIwW-68-OlUg5QZOmRYPNOk' },
  { nome: 'Fernando Martins', rm: '343846', descricao: 'Mais de 10 anos trabalhando com linguagem JAVA e desenvolvimento Android usando JAVA e Kotlin nativo (Android Applications, Android SDK) Forte experiência de trabalho usando padrões de projeto (Design Patterns).', foto: 'https://scontent.fcgh21-1.fna.fbcdn.net/v/t1.6435-9/47032977_10204982541759411_4688394082794340352_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=wR1kOznljn4AX8f5cMS&_nc_ht=scontent.fcgh21-1.fna&oh=00_AfAGjsY529c7PpAdcl5rp4b82LP7xChPN04_TmEls217fQ&oe=6477CE50' },
  { nome: 'Matheus Lopes', rm: '344267', descricao: 'Formado em Engenharia de Controle e Automação e atualmente trabalho como desenvolvedor Android. Possuo conhecimento de processo de pagamento e de terminais POS (Point of Sale), desenvolvimento de software baseado em arquitetura limpa e boas práticas de programação como design patterns e princípios SOLID.', foto: 'https://media.licdn.com/dms/image/C4D03AQHQQed2p8mrZw/profile-displayphoto-shrink_800_800/0/1645185951804?e=1688601600&v=beta&t=-hphSkIFMoPgqBRcz09X0XKZuwiFUtKnv1y9_2n0Bv4' },
  { nome: 'Sandro Nakamura', rm: '346064', descricao: 'Sou um engenheiro de computação que vive em busca da inovação e acredito que com a tecnologia podemos causar um impacto positivo na sociedade. Minha experiência inclui idealização, planejamento e prototipação de projetos.', foto: 'https://media.licdn.com/dms/image/C4D03AQEEqe872ehZjw/profile-displayphoto-shrink_800_800/0/1658944091323?e=1688601600&v=beta&t=koaARWzn6dCrKWpQxwXw9htZHnj9U3_AQNq1TasfIOQ' },
];

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const renderCard = ({ item }: { item: Participant }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { aluno: item })}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      <Text style={styles.title}>Lista de Participantes</Text>
      <FlatList
        data={PARTICIPANTES}
        renderItem={renderCard}
        keyExtractor={(item) => item.rm}
        contentContainerStyle={styles.flatListContent}
      />
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  container: {
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
  flatListContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});


export default HomeScreen;
