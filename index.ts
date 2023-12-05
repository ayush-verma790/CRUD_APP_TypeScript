import express ,{ Request ,Response} from 'express';
import dbconnect from './config/db';
const app=express();
const PORT=3001;

import createRoute from './routes/routes';
app.get('/show',(req:Request,res:Response)=>
{
    res.json({data:'hello Ayush'})
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbconnect();
app.use('/api/v1',createRoute)
 
app.listen( PORT,():void=>
{
    console.log(`Server started At ${PORT}`)
});

