import BooksListPage from './src/screens/BooksListPage.jsx';
import Routes from './scr/Routes'
import Home from './src/screens/Home.jsx';
import SignUp from './src/screens/SignUp';
import PhotosPage from './src/screens/PhotosPage.jsx;


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.HOME} component={SignUp} />
        <Stack.Screen nome={Routes.HOME} component={Home} />
        <Stack.Screen nome={Routes.BOOKLIST} component={BooksListPage} />
        <Stack.Screen nome={Routes.GALLERY} component={PhotosPage} />
      </Stack.Navigator>
    </NavigationContainer>
  
      
    
  )
}
