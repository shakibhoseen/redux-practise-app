
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MainActivity from './src/MainActivity';


export default function App() {
  return (
    <Provider store={store}>
      <MainActivity/>
    </Provider>
  );
}


