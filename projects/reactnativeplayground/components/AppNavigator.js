import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import PoemsList from './PoemsList';

const AppNavigator = createStackNavigator({
  PoemsList: { screen: PoemsList },
  Home: { screen: Home }
});

export default AppNavigator;
