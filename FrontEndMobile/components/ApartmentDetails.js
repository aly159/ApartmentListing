import React from 'react';
import { StyleSheet, Text, View , FlatList ,SafeAreaView } from 'react-native';
import  { useEffect, useState } from 'react';
export default ApartmentDetails = ({ route }) => {
  const { apartmentId } = route.params;

  const [apartmentDetails, setApartmentDetails] = useState([]);

  useEffect(() => {
    /*fetch('http://localhost:3000/apartments/'+apartmentId)
      .then(response => response.json())
      .then(data => setApartmentDetails(data))
      .catch(error => console.error('Error fetching apartments:', error));*/
      //static data so that i can simulate from mobile
      var data = [
        {  
          _id: 'test',
          apartmentId: 'test',
          floorNumber: 1,
          hasBalcony : false,
          isFurnished: false,
          hasParking: false,
        }
      ];
      if(apartmentId=="658474e6016be41b1ba1b4f2")
      {
         data = [
          {
            _id: '65862d1b60dfb211351fc382',
            apartmentId: '658474e6016be41b1ba1b4f2',
            floorNumber: 2,
            hasBalcony : true,
            isFurnished: false,
            hasParking: true,
          },
        ]
      }
      else if (apartmentId=="6586b1f026a3643de4a74447")
      {
         data = [
          {  
            _id: '6586b21926a3643de4a74448',
            apartmentId: '6586b1f026a3643de4a74447',
            floorNumber: 3,
            hasBalcony : true,
            isFurnished: true,
            hasParking: true,
          }
        ];
      }
      setApartmentDetails(data);
  }, []);
  
  //function that renders each card for each listing
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text><Text style={styles.boldText}>Floor Number: </Text> {item.floorNumber}</Text>
      <Text><Text style={styles.boldText}>Has a Balcony :</Text> {item.hasBalcony? 'Yes' : 'No'}</Text>
      <Text><Text style={styles.boldText}>is Furnished:</Text> {item.isFurnished? 'Yes' : 'No'}</Text>
      <Text><Text style={styles.boldText}>Has a Parking:</Text> {item.hasParking? 'Yes' : 'No'}</Text>
    </View>
  );

  const handleTitlePress = (id) => {
    navigation.navigate('ApartmentDetails', { apartmentId: id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={apartmentDetails}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    </SafeAreaView>
  );
};
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
})