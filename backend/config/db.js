// import mongoose from "mongoose";

// export const  connectDB = async () =>{

//     await mongoose.connect('mongodb+srv:n3W54bkIL7K3f0Bc//sonarakshana:@cluster0.uiiqj.mongodb.net/').then(()=>console.log("DB Connected"));
   
// }
//  import mongoose from "mongoose";

// export const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb+srv://sonarakshana:n3W54bkIL7K3f0Bc@cluster0.uiiqj.mongodb.net/<database>?retryWrites=true&w=majority");
        
//         console.log("DB Connected Successfully");
//     } catch (error) {
//         console.error("Database Connection Failed:", error);
//         process.exit(1);
//     }
// };


// // add your mongoDB connection string above.
// // Do not use '@' symbol in your databse user's password else it will show an error.
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sonarakshana:cQDbopO7jMZxyNXf@cluster0.7o8utsp.mongodb.net/");
        
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("Database Connection Failed:", error);
        process.exit(1);
    }
};
// cQDbopO7jMZxyNXf
// sonarakshana