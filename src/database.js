import connect from 'mongoose';

const db = await connect("mongodb://localhost/crud-mongo")

console.log('DB connected to', db.connection.name)  