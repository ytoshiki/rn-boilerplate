import { View, Text } from 'react-native';
import { RootStackScreenProps } from 'src/router/types';

const SignIn: React.FC<RootStackScreenProps<'SignIn'>> = () => {
  return (
    <View>
      <Text>SignIn</Text>
    </View>
  );
};

export default SignIn;
