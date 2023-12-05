import { Schema, Document, model } from "mongoose";

export interface EmployeeDocument extends Document {
  
    name: string;
    dept: string;
    isActive:boolean;
    joiningDate: Date;
}

interface Employee {
   
    name: string;
    dept: string;
    isActive:boolean;
    joiningDate: Date;
}

const empSchema = new Schema<Employee>({
    name: {
        type: String,
        required: true,
    },
    dept: {
        type: String,
        required: true,
    },
    joiningDate: {
        type: Date,
        default: Date.now(),
    },
    isActive:{
        type:Boolean,
        default:false

    }
});

const Emp_model = model<Employee>('Employee', empSchema);

export default Emp_model;
