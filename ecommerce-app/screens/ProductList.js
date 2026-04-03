import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import db from '../database/db';

export default function ProductList({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  try {
    const result = db.getAllSync("SELECT * FROM products");
    setProducts(result);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
}, []);
  if (loading) return <ActivityIndicator size="large" />;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Details", { product: item })}>
          <View style={{ padding: 15, borderBottomWidth: 1 }}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}