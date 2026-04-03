import { View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import db from '../database/db';

export default function Dashboard({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const result = db.getAllSync("SELECT * FROM transactions");
    setData(result);
  }, []);

  const income = data
    .filter(d => d.amount > 0)
    .reduce((sum, d) => sum + d.amount, 0);

  const expense = data
    .filter(d => d.amount < 0)
    .reduce((sum, d) => sum + d.amount, 0);

  const balance = income + expense;

  return (
    <View style={{ padding: 15 }}>
      
      {/* Summary Cards */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.card}>
          <Text>Income</Text>
          <Text style={{ color: 'green' }}>{income}</Text>
        </View>

        <View style={styles.card}>
          <Text>Expense</Text>
          <Text style={{ color: 'red' }}>{expense}</Text>
        </View>

        <View style={styles.card}>
          <Text>Balance</Text>
          <Text>{balance}</Text>
        </View>
      </View>

      {/* Transactions */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.category}</Text>
            <Text>{item.amount}</Text>
          </View>
        )}
      />

      <Text onPress={() => navigation.navigate("Reports")} style={{ marginTop: 20, color: 'blue' }}>
        View Reports →
      </Text>
    </View>
  );
}

const styles = {
  card: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center'
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2
  }
};