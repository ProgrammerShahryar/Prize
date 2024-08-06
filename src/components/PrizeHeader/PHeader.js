import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.aOne}>
      <View style={styles.smallArea}>


        <Image
          source={require('./../../../assets/logo.png')}
          style={styles.logo} 
        />


        <Text style={styles.aThree}>Win A Prize</Text>


      </View>

      
      <Text style={styles.aName}>by Shahryar Salim</Text>
    </View>
  );
}
