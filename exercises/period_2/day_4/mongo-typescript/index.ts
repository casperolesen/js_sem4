import * as mongo from "mongodb";
const MongoClient = mongo.MongoClient;
const uri = "mongodb+srv://csprkrol:Olesen11@sem4-cluster.aifmj.mongodb.net/test?retryWrites=true&w=majority";

/* IMPORTANT ---> 
   Before you start, do a tcs --init in the root of the project to create tsconfig.json
*/

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function insertAndReadData() {
    try {
        await client.connect();
        const db = client.db("test");
        await db.collection('inventory').deleteMany({});
        const result = await db.collection('inventory').insertOne({
            item: "canvas",
            qty: 100,
            tags: ["cotton"],
            size: { h: 28, w: 35.5, uom: "cm" }
        });

        // console.log("Count", result.insertedCount);
        // console.log("id", result.insertedId);
        // console.log("ops", result.ops);

        // var cursor = await db.collection('inventory').find({}).toArray();

        // cursor.forEach((data) => {
        //     if (data) {
        //         console.log(data)
        //     }
        // }, (err:string) => {
        //     if (err) {
        //         console.log(err)
        //     }
        // });

        var results = await db.collection('inventory').find({}).toArray();
        console.log(results);
        

    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Connection Closed")
    }
}


async function connectSetupDataAndGetDB() {
    await client.connect();
    const db = client.db('test');
    await db.collection('inventory').deleteMany({});
    await db.collection('inventory').insertMany([
        { item: "journal",
            qty: 25,
            size: { h: 14, w: 21, uom: "cm" },
            status: "A"},
        { item: "notebook",
            qty: 50,
            size: { h: 8.5, w: 11, uom: "in" },
            status: "A"},
        { item: "paper",
            qty: 100,
            size: { h: 8.5, w: 11, uom: "in" },
            status: "D"},
        { item: "planner",
            qty: 75, size: { h: 22.85, w: 30, uom: "cm" },
            status: "D"},
        { item: "postcard",
            qty: 45,
            size: { h: 10, w: 15.25, uom: "cm" },
            status: "A"}
        ]);

    return db;
}

async function readDataWithQueries() {
    try {
        const db = await connectSetupDataAndGetDB();
        let results = await db.collection('inventory').find({status: "D"}).toArray();
        console.log("1: ", results);

        results = await db.collection('inventory').find({ 
            size: { h: 14, w: 21, uom: "cm" }
          }).toArray();
        console.log("2: ", results);

        results = await db.collection('inventory').find({ 
            "size.uom": "in"
          }).toArray();
        console.log("3: ", results);
        
        
        
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}

async function readDataWithOptions() {
    try {
        const db = await connectSetupDataAndGetDB();
        let results = await db.collection('inventory').find(
            {},
            {
                projection: {item:1, qty:1, _id:0},
                limit: 3,
                sort: {qty: -1}
            }
            ).toArray();
        console.log(results);
        
        
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}


async function readDataWithOperatorsAndCompoundQueries() {
    try {
        const db = await connectSetupDataAndGetDB();
        // less than 15
        let results = await db.collection('inventory').find({ 
            "size.h": { $lt: 15 }
          }).toArray();

        console.log("1", results);

        // status is A AND qty less than 30
        results = await db.collection('inventory').find({ 
            status: "A", 
            qty: { $lt: 30 }
          }).toArray();

        console.log("2", results);

        // The following example retrieves all documents in the collection where the status equals "A" or qty is less than 30:
        results = await db.collection('inventory').find({ 
            $or: [ {status: "A" }, { qty: { $lt: 30 } } ]
          }).toArray();
        console.log("3", results);
        
        
        

    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}
async function updateData() {
    try {
        const db = await connectSetupDataAndGetDB();
        let results = await db.collection('inventory').findOneAndUpdate(
            { item: "paper" },
            { $set: { "size.uom": "cm", status: "P" },
              $currentDate: { lastModified: true } },
            { returnOriginal: false});

        console.log("1", results.value);

        const res = await db.collection('inventory').updateMany(
            { qty: { $lt: 50 } },
            { $set: { "size.uom": "in", status: "P" },
              $currentDate: { lastModified: true } })
        //console.log("2A", res.result);
        console.log("2B", res.modifiedCount);
        
        
        
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }

}
async function deleteData() {
    try {
        const db = await connectSetupDataAndGetDB();
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}
// insertAndReadData();
// readDataWithQueries();
// readDataWithOptions();
// readDataWithOperatorsAndCompoundQueries();
updateData();
// deleteData()