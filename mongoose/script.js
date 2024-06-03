const mongoose = require('mongoose')
const User = require('./UserSchema')
// mongoose.connect("mongodb://localhost/testdb")

main().catch(err => console.log(`Error connecting DB ${err}`))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/mongoose');
    console.log('Connected to DB');
    const user = await User.create({
        name: "Athi", 
        age: 25,
        email: "gfga@jghjfg.com",
        created_at: Date.now(),
        // updated_at: Date.now(),
        // object_id: mongoose.Types.ObjectId(),
        string: ["a", "b", "c"],
        address: {
            street: "123",
            city: "Bangalore",
            state: "Karnataka",
            zip: "560076"
        }
    })
    console.log(user);
}

