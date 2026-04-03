import { View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import db from '../database/db';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const result = db.getAllSync("SELECT * FROM orders");
    setOrders(result);
  }, []);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{
          backgroundColor: '#eee',
          padding: 15,
          margin: 10,
          borderRadius: 10
        }}>
          <Text>{item.name}</Text>
          <Text>{item.date}</Text>
          <Text>{item.price}</Text>
        </View>
      )}
    />
  );
}