import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import db from '../database/db';

export default function Feed({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = db.getAllSync("SELECT * FROM posts");
    setPosts(data);
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Details", { post: item })}>
          <View style={{ padding: 15, borderBottomWidth: 1 }}>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}