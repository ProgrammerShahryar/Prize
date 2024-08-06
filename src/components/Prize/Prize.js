import { useState } from 'react';
import { View, Text, TextInput, Switch, Button, Image, Keyboard } from 'react-native';
import styles from './styles';
import { addPrizeFire } from '../SFirebaseMethods/AddMethod';

export default function Prize(props) {
  const [prizeName, setPrizeName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const sAdd = () => {
    if (prizeName) {
      addPrizeFire(prizeName);

      props.onAddPrize(prizeName);

      setErrorMessage(
        null
      );
      setPrizeName('');

      Keyboard.dismiss();
    }
    else {
      setErrorMessage(
        'Please Enter Prize Name Or Prize Description.'
      );
    }
  }

  const sNameChanged =
   (value) => {
    setPrizeName(value);
  }

  return (
    <View style={styles.aOne}>


      <Image
        source={require('../../../assets/logo.png')}
        style={styles.aImage}
      />



      <View style={styles.aTwo}>
        {errorMessage && (
          <View style=
          {styles.errorMessage.bigOne}>
            <Text style=
            {styles.errorMessage.label}>Attention:</Text>
            <Text style=
            {styles.errorMessage.text}>{errorMessage}</Text>
          </View>
        )}


        <TextInput
          placeholder=
          'Enter Prize Name Or Prize Description'
          maxLength={150}

          onChangeText=
          {sNameChanged}
          defaultValue=
          {prizeName}
          style={styles.textbox}
        />

        <Button
          title='Add Prize'
          onPress={sAdd}
          color='black'
        />

        
      </View>
    </View>
  );
}
