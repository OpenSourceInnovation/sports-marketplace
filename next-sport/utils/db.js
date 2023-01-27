import { mongo, Mongoose } from "mongoose";

const connection = {};

async function connect(){
  if(connection.isConnected){
    console.log('already connected');
    return;
  }
  if(Mongoose.connections.length>0){
    connection.isConnected = Mongoose.connections[0].readyState;
    if(connection.isConnected===1){
      console.log('use previous connection');
      return;
    }
    await Mongoose.disconnect();
  }
  const db= await Mongoose.connect(process.env.MONGODB_URI);
  console.log('new connection')
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect(){
  if(connection.isConnected){
    if(process.env.NODE_ENV ==='production'){
      await Mongoose.disconnect();
      connect.isConnected=false;
    }
    else{
      console.log('not disconnected');
    }
  }
}


const db = { connect };
export default db;