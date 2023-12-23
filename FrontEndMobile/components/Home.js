
import { StyleSheet, Text, View , FlatList ,SafeAreaView,TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import ApartmentDetails from './ApartmentDetails';

export default function Home({  navigation }) {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    /*fetch('http://localhost:3000/apartments')
      .then(response => response.json())
      .then(data => setApartments(data))
      .catch(error => console.error('Error fetching apartments:', error));*/

      //static data so that i can simulate from mobile
      const data = [
        {
          _id: '658474e6016be41b1ba1b4f2',
          title: 'Palm Hills New Cairo',
          price: 21204000,
          description: 'With a perfect combination of water bodies and greenery, The Quarry offers a multitude of relaxing and recreational activities. You can spend your free time having a picnic, sitting by the pond, or indulging in a fun activity like rock climbing.',
          numberOfBedrooms: 2,
          numberOfBathrooms: 2,
          area: 200,
          ownerId: "123"
        },
        {
          _id: '6586b1f026a3643de4a74447',
          title: 'Mountain View ICity New Cairo',
          price: 3776564,
          description: 'Right in the middle of Icity New Cairo there is the Club Park, established to be a haven for sports enthusiasts. The outstanding park features a multitude of sports facilities, first-class sports academies, and it also provides the residences with a unique view. In the Club Park, you will not have to worry about your children’s health. It’s a place for them to develop their skills and work on their independence. ',
          numberOfBedrooms: 3,
          numberOfBathrooms: 2,
          area: 250,
          ownerId: "123"
        },
      ];
      setApartments(data);
  }, []);
  
  //function that renders each card for each listing
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => handleTitlePress(item._id)}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
      <Text><Text style={styles.boldText}>Price: $</Text> {item.price}</Text>
      <Text><Text style={styles.boldText}>Description :</Text> {item.description}</Text>
      <Text><Text style={styles.boldText}>Bedrooms:</Text> {item.numberOfBedrooms}</Text>
      <Text><Text style={styles.boldText}>Bathrooms:</Text> {item.numberOfBathrooms}</Text>
      <Text><Text style={styles.boldText}>Area:</Text> {item.area} <Text style={styles.boldText}>㎡</Text></Text>
    </View>
  );

  const handleTitlePress = (id) => {
    navigation.navigate('ApartmentDetails', { apartmentId: id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={apartments}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
    fontSize: 13, 
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#3498db',
  },
});


