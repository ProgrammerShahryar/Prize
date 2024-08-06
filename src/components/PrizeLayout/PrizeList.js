import { View, FlatList } from 'react-native';
import styles from './styles';
import ConfirmPrize from './Confirm/ConfirmPrize';

export default function PrizeList(props) {
  return (
    <View style={styles.default}>
      <FlatList
        data=
        {props.prize}
        renderItem=
        {({ item }) => (


          <ConfirmPrize
            prize={item}
          />


        )}
        keyExtractor=
        {(item, index) => index.toString()}
        numColumns=
        {2}
      />
    </View>
  );
}
