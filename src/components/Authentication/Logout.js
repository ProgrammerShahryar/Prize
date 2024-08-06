import React from 'react';
import { View, Button } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { app } from '../SFirebaseMethods/AddMethod';
import sStyle from './styles';

export default function Logout() {
  const sNavigation =
   useNavigation();

  const sLogout =
   () => {
    const auth =
     getAuth(app);

     
    signOut(auth)
      .then(() => 
      {
        sNavigation.navigate(
            'Login'
        );
      })
      .catch(error => console.error(
        error
    ));


  };

  return (
    <View style=
    {
        sStyle.container
        }>


      <Button title=
      "Logout" onPress=
      {
        sLogout
        } color=
        "#4CAF50" />


    </View>
  );
}
