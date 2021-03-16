import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  
  const [ objetivoAgregado, setObjetivoAgregado] = useState('');
  const [ objetivosAgregados, setObjetivosAgregados ] = useState([]);

  const objetivoHandler = (objetivoText) => {
    setObjetivoAgregado(objetivoText);
  }

  const addObjetivoHandler = () => {
    setObjetivosAgregados(objetivosActuales => [...objetivosActuales, objetivoAgregado])
  }

  return (
    <View style={styles.layout}>
      <View style={styles.formGroup}>
        <TextInput 
          placeholder="Tu objetivo"
          style={styles.inputText} 
          onChangeText={objetivoHandler}
          value={objetivoAgregado}
        />
        <Button 
          title="Agregar" 
          onPress={addObjetivoHandler}
        />
      </View>
      <View>
        {objetivosAgregados.map((objetivo) => 
          <View style={styles.listItem}>
            <Text key={objetivo}>{objetivo}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    padding: 50
  },
  formGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  inputText: {
    width: '70%',
    borderBottomColor: '#DCDCDC', 
    borderBottomWidth: 1,
    padding: 5
  },
  listItem: {
    padding: 15,
    backgroundColor: '#DCDCDC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10
  }
});
