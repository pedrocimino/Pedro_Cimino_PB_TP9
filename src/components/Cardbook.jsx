import { Text, View, StyleSheet } from 'react-native';

export default function CardBook({ book }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>Autor: {book.author}</Text>
      <Text style={styles.genre}>Gênero: {book.genre}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    border: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    boxShadow: 0,
  },
  title: {
    fontSize: 1.2,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  author: {
  fontSize: 1,
  color: '#666',
  },
  genre: {
  fontSize: 1,
  color: '#ae666',
  },
});

