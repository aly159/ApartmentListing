const express = require('express');
const mongoose = require('mongoose');
const apartment = require('./models/apartment');
const apartmentDetails = require('./models/apartmentDetails');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dbURI = "mongodb+srv://PropertyUser:yWkVYh30ewl0nGtd@PropertySales.dysgjxw.mongodb.net/PropertySales";

mongoose.connect(dbURI)
  .then(result => {app.listen(3000); console.log("connected")})
  .catch(err => console.log(err));



//get all apartments
app.get('/apartments', (req, res) => {

    apartment.find().sort({ createdAt: -1 })
    .then(result => {
      console.log(JSON.stringify(result));
      res.writeHead(200, {'content-type':'application/json'});
      res.end(JSON.stringify(result));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

//add a new apartment
app.post('/apartments', (req, res) => {
  const apartmentToAdd = new apartment(req.body);

  apartmentToAdd.save()
    .then(result => {
      console.log('Apartment saved successfully:', JSON.stringify(result));
      res.json(result);  // Use res.json() here
    })
    .catch(err => {
      console.error('Error saving apartment:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

//get apartment details
app.get('/apartments/:id', (req, res) => {
  const id = req.params.id;
  const findApartmentById = async (id) => {
    try {
      const result = await apartmentDetails.find({ apartmentId: id });
      return result;
    } catch (error) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  findApartmentById(id)
    .then(result => {
      console.log(JSON.stringify(result));
      res.writeHead(200, {'content-type':'application/json'});
      res.end(JSON.stringify(result));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
}); 

//remove an apartment listing
app.delete('/apartments/:id', (req, res) => {
  const id = req.params.id;
  
  apartment.findByIdAndDelete(id)
    .then(result => {
      console.log(JSON.stringify(result));
      res.writeHead(200, {'content-type':'application/json'});
      res.end(JSON.stringify(result));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

