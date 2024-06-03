const mongoose = require('mongoose')

const addressSchena = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: String
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 2,
        max: 100,
        validate: {
            validator: function(value) {
                return value > 18;
            },
            message: "Age should be greater than 18"
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, // regex for email
        required: true
    },
    created_at: {
        type: Date,
        // default: Date.now()
    },
    updated_at: {
        type: Date,
        default: () => Date.now()
    },
    object_id: mongoose.SchemaTypes.ObjectId,
    string: [String],
    address: addressSchena
})

module.exports =  mongoose.model("User", userSchema)