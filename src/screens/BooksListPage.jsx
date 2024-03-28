import { useState, useEffect } from 'react';
import BookList from '../components/BookList.jsx';
import { View, Input, Select, Option, StyleSheet } from 'react-native';

export default function BooksListPage() {
  const [books, setBooks] = useState([]);
  const [state, setState] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    fetch('https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const booksList = Object.values(data);
        setBooks(booksList);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const filterBooksList = books.filter((book) => {
    if (state) {
      return book.title.toLowerCase().includes(state.toLowerCase()) ||
        book.author.toLowerCase().includes(state.toLowerCase());
    }
    return book.genre.toLowerCase().includes(genre.toLowerCase());
  });

  return (
    <View style={styles.body}>
      <View style={styles.containerInput}>
        <Input
          style={styles.inputStyle}
          type="text"
          onChange={(event) => setState(event.target.value)}
          placeholder='Pesquisar'
        />
        <Select
          style={styles.selectStyle}
          name="FilterGenre"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        >
          <Option
            value=""
          >
            Escolha um gênero
          </Option>
          <Option value="Ficção Distópica">
            Ficção Distópica
          </Option>
          <Option value="Realismo Mágico">
            Realismo Mágico
          </Option>
          <Option value="Romance Clássico">
            Romance Clássico
          </Option>
          <Option value="Fantasia">
            Fantasia
          </Option>
          <Option value="Alegoria Política">
            Alegoria Política
          </Option>
          <Option value="Suspense">
            Suspense
          </Option>
        </Select>
      </View>
      <View style={styles.containerFlex}>
        <BookList books={filterBooksList} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
  },
  containerInput: {

  },
  inputStyle: {

  },
  selectStyle: {

  },
  containerFlex: {
    padding: 8,
    color: '#222',
    backgroundColor: '#CCC',
    border: 3,
    borderRadius: 4,
  },
});