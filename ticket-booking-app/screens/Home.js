import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import db from '../database/db';

export default function Home({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = db.getAllSync("SELECT * FROM movies");
    setMovies(data);
  }, []);

  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Search movie..."
        value={search}
        onChangeText={setSearch}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Seats", { movie: item })}>
            <View style={{ padding: 15, borderBottomWidth: 1 }}>
              <Text>{item.title}</Text>
              <Text>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}