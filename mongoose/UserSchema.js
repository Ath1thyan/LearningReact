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

userSchema.methods.sayHi = function() {         // must not use arrow function
    console.log(`Hi I am ${this.name}, my age is ${this.age}`);
}

userSchema.statics.findByName = function(name) {
    return this.find({name: new RegExp(name, "i")});
}

userSchema.query.fbyName = function(name) {
    return this.find({name: new RegExp(name, "i")});
}

userSchema.virtual("namedEmail").get(function(){
    return `${this.name} <${this.email}>`;
})

userSchema.pre("save", function(next){
    this.updated_at = Date.now();
    next();
})
userSchema.pre("save", function(doc, next){
    doc.sayHi()
    next();
})

module.exports =  mongoose.model("User", userSchema)