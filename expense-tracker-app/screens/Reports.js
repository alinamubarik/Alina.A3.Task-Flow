import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import db from '../database/db';

export default function Reports() {

  const data = db.getAllSync("SELECT * FROM transactions");

  const amounts = data.map(d => d.amount);

  return (
    <View>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar"],
          datasets: [{ data: amounts }]
        }}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          backgroundColor: "#000",
          backgroundGradientFrom: "#1E2923",
          backgroundGradientTo: "#08130D",
          color: () => `#fff`
        }}
      />
    </View>
  );
}