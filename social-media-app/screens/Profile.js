import { View, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react';
import db from '../database/db';

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = db.getAllSync("SELECT * FROM users")[0];
    setName(user.name);
    setEmail(user.email);
  }, []);

  const updateProfile = () => {
    db.execSync(`
      UPDATE users SET name='${name}', email='${email}' WHERE id=1;
    `);
    alert("Updated!");
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput value={name} onChangeText={setName} placeholder="Name" />
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <Button title="Save" onPress={updateProfile} />
    </View>
  );
}