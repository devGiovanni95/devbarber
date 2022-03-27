/**
 * @format
 */

/*Pegar gestos da tela*/
import 'react-native-gesture-hanler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
