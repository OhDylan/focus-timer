import React, { useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { TextInput } from 'react-native-paper'
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput}
        onChangeText={setSubject} 
        label="What would you like to focus on?" 
        />
        <View style={styles.buttonContainer}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  container: {
  },
  buttonContainer: {
    justifyContent: 'center'
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  }
})