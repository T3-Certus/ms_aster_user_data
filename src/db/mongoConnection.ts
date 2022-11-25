import mongoose from "mongoose";

const uri = process.env.URI_MONGO

if (!uri) {
  throw new Error('You must provide a MongoDB URI')
}

export default mongoose.connect(uri, {
  bufferCommands: false
}).then(() => console.log('Succesfully connected to MongoDB')).catch((err) => console.log(err));