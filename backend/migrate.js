import { MongoClient } from 'mongodb';

const localUri = 'mongodb://localhost:27017';
const clusterUri = 'mongodb+srv://indermehra622:TMuBmUzC6Jo7uVhI@cafedelight.7ig8t.mongodb.net/?retryWrites=true&w=majority&appName=CafeDelight&tls=true&tlsAllowInvalidCertificates=false';

async function migrate() {
  const localClient = new MongoClient(localUri);
  const clusterClient = new MongoClient(clusterUri);

  try {
    // Test connectivity
    await localClient.db().command({ ping: 1 });
    console.log('Connected to local database.');

    await clusterClient.db().command({ ping: 1 });
    console.log('Connected to cluster database.');

    const localDb = localClient.db('CaféDelight');
    const clusterDb = clusterClient.db('CafeDelight');

    // Define the collections to migrate
    const collections = ['orders', 'products', 'users'];

    for (const collectionName of collections) {
      try {
        const localCollection = localDb.collection(collectionName);
        const clusterCollection = clusterDb.collection(collectionName);

        const data = await localCollection.find().toArray();
        if (data.length > 0) {
          await clusterCollection.insertMany(data);
          console.log(`Migrated ${data.length} documents to the "${collectionName}" collection.`);
        } else {
          console.log(`No data found in the "${collectionName}" collection to migrate.`);
        }
      } catch (err) {
        console.error(`Failed to migrate collection "${collectionName}":`, err);
      }
    }
  } catch (err) {
    console.error('Error during migration:', err);
  } finally {
    await localClient.close();
    await clusterClient.close();
  }
}

migrate();
