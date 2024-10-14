import mongoose from 'mongoose';
const dbName = 'todolist'
const user='nicolapiras96'

const password='xlyp0MBPG5fZlHZV'

const connectionUrl = `mongodb+srv://
${user}:${password}
@clustertodolist.yxb6j.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=ClusterToDoList'`

const connect = async () => {
  try {
    await mongoose.connect(connectionUrl);
    console.log('- Connected to MongoDB server');
  } catch (error) {
    console.log('- Connection error', error);
    throw(error);
  }
}
export default connect;