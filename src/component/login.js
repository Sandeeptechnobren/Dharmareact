import mongoose from 'mongoose';

function connection(){mongoose.connect("mongodb://localhost:27017/")
                .then(()=>{
                    console.log("connected to database")
                })
                .catch((err)=>{
                    console.log(err)
                });
            }

    connection();
