import { View, Text } from 'react-native';

export default function PostDetails({ route }) {
  const { post } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
      <Text>User ID: {post.userId}</Text>
    </View>
  );
}