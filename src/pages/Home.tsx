import { View, Text } from 'react-native';
import { RootStackScreenProps } from 'src/router/types';

const Home: React.FC<RootStackScreenProps<'Home'>> = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
