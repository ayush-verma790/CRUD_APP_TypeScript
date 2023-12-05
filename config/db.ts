import mongoose ,{ConnectOptions, connect} from 'mongoose';
const dbconnect=():void=>{
    mongoose.connect("mongodb://localhost:27017/EmployeeData" as string,{
        useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions )
  .then(()=>console.log("db connected Successfull"))
  .catch((error) => {
    console.log('issue in connection');
    console.log(error.message);
    process.exit(1);
  });
}
export default  dbconnect;   