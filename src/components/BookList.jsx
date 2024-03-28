import CardBook from './Cardbook.jsx';
import { View, FlatList, Text } from 'react-native';

export default function BookList({ books }) {
  return (
    <View>
      <FlatList>
        {books && books.length > 0 ? (
          books.map((book, index) => (
            <Text key={index} data-cy='booksListItem'>
              <CardBook book={book} />
            </Text>
          ))
        ) : (
          <Text>Nenhum livro encontrado</Text>
        )}
      </FlatList>
    </View>
  )
}
