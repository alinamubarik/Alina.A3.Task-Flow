import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Seats({ route }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from({ length: 12 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const saveSeats = async () => {
    await AsyncStorage.setItem('seats', JSON.stringify(selectedSeats));
    alert("Seats saved!");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Select Seats:</Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {seats.map(seat => (
          <TouchableOpacity
            key={seat}
            onPress={() => toggleSeat(seat)}
            style={{
              width: 50,
              height: 50,
              margin: 5,
              backgroundColor: selectedSeats.includes(seat) ? 'green' : 'gray',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{ color: 'white' }}>{seat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Confirm Selection" onPress={saveSeats} />
    </View>
  );
}