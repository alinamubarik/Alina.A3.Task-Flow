import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import db from '../database/db';

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const result = db.getAllSync("SELECT * FROM restaurants");
    setData(result);
  }, []);

  const filtered = filter === "All"
    ? data
    : data.filter(r => r.cuisine === filter);

  return (
    <View style={{ padding: 15 }}>
      
      {/* Filter Buttons */}
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        {["All", "Italian", "Fast Food", "Desi"].map(f => (
          <TouchableOpacity
            key={f}
            onPress={() => setFilter(f)}
            style={{
              backgroundColor: filter === f ? '#ff6600' : '#ddd',
              padding: 8,
              marginRight: 5,
              borderRadius: 10
            }}
          >
            <Text>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Restaurant Cards */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Details", { item })}>
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.cuisine}</Text>
              <Text>⭐ {item.rating}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Text onPress={() => navigation.navigate("Orders")} style={{ color: 'blue', marginTop: 10 }}>
        View Orders →
      </Text>
    </View>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 15,
    elevation: 3
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  }
};