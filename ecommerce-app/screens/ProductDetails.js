import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Text, View } from 'react-native';

export default function ProductDetails({ route }) {
  const { product } = route.params;

  const addToCart = async () => {
    let cart = await AsyncStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];

    cart.push(product);

    await AsyncStorage.setItem('cart', JSON.stringify(cart));

    alert("Added to Cart!");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>{product.name}</Text>
      <Text>{product.price}</Text>
      <Text>{product.description}</Text>

      <Button title="Add to Cart" onPress={addToCart} />
    </View>
  );
}