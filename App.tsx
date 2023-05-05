
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/app/store';
import PostView from './src/post/PostView';




export default function App() {
  return (
    <Provider store={store}>
      <PostView/>
    </Provider>
  );
}


