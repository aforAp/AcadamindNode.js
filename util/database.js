import mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) => {
MongoClient.connect('mongodb://127.0.0.1:27017/shop').then(client => {
    console.log('Connected!');
    _db = client.db();
      callback(client);
}).catch(err => {
    console.log(err);
});
};

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'No database found!';
}
export {mongoConnect, getDb};




