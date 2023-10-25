import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function VowelCounterApp() {
  const [inputText, setInputText] = useState('');
  const [vowelCounts, setVowelCounts] = useState({ a: 0, e: 0, i: 0, o: 0, u: 0 });

  const countVowels = () => {
    const text = inputText.toLowerCase(); // Convertir a minúsculas para simplificar la búsqueda de vocales
    const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        counts[char]++;
      }
    }

    setVowelCounts(counts);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ingresa una cadena de texto:</Text>
      <TextInput
        value={inputText}
        onChangeText={text => setInputText(text)}
        style={{ borderWidth: 1, width: 200, padding: 5, margin: 10 }}
      />
      <Button
        title="Contar Vocales"
        onPress={countVowels}
      />
      <Text>Cantidad de Vocales:</Text>
      <Text>{`${vowelCounts.a} ${vowelCounts.e} ${vowelCounts.i} ${vowelCounts.o} ${vowelCounts.u}`}</Text>
    </View>
  );
}