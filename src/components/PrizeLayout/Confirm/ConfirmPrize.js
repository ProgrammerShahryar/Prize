import React, { useState } from 'react';
import { View, Switch, Image, Pressable, Modal, Alert, Text } from 'react-native';
import styles from './styles';

export default function ConfirmPrize(props) {

  const [showModal, setShowModal] = useState(false);

  const sPressed = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <Pressable onPress={sPressed}>
        <View style={styles.aPop}>


          <Image
            source={require('../../../../assets/logo.png')}
            style={styles.Logo}
          />
        </View>
      </Pressable>

      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.aPopTwo}>


          <Text style={styles.aLayout}>You Won
          </Text>
          <Text style={styles.aInside}>Prize:
           {props.prize.name}</Text>
          <View style={styles.sButton}>


            <Pressable onPress={sPressed} style={styles.aHit}>
              <Text style={styles.sButtonArea}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}
