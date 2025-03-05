const person = {
        name: 'John Doe',
        age: 25,
        location: {
            country: 'Canada',
            city: 'Vancouver',
            coordinates: [49.2827, -123.1207]
        }
    }
    
    const {name, location: {country, city, coordinates: [lat, lng]}} = person;
    
    console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

    //log all info that consol log want/ btcouse deconstraction
