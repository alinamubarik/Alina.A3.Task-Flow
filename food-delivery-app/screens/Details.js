import { View, Text } from 'react-native';

export default function Details({ route }) {
  const { item } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{item.name}</Text>
      <Text>{item.cuisine}</Text>
      <Text>Rating: {item.rating}</Text>
    </View>
  );
}