const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://csprkrol:Olesen11@sem4-cluster.aifmj.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function mongoTest() {
    try {
        await client.connect();
        const dogs = client.db("kennel");
        const dogsCollection = dogs.collection("dogs");
        await dogsCollection.insertMany([{name: "Togo"}, {name: "Fido"}, {name: "Tut", race: "dog"}]);
        const allDogs = await dogsCollection.find({}).toArray();
        console.log(allDogs);  
    } catch (error) {
        console.log(error);
    } finally {
        client.close();
        console.log("Closed");
    }
}

mongoTest();
