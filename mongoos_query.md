# db.practice_data.find({}).limit(5)

# db.practice_data.find({age:{$ne:27}},{email:1,age:1,gender:1}).limit(100)

# db.practice_data.find({gender:{$ne:"Female"}}).project({gender:1})

# db.practice_data.find({age:{$gt:25}}).project({age:1}).sort({age:-1})

//implicit and condition(when we want to filter different value from same field
we can not use implicit and operator)

# db.practice_data.find({age:{$gte:18,$lte:30}}).project({age:1}).sort({age:-1})

# db.practice_data.find({ age: { $in: [18, 26] } }).project({ age: 1 }).sort({ age: -1 })

# db.practice_data.find({ gender: "Female", age: { $in: [18, 23] } }).project({ name:1,age: 1,gender:1 }).sort({ age: -1 })

# db.practice_data.find(

    {
        gender: "Female",
         age: { $nin: [18,33,46,23,30,34,40,55, 23] } ,
         interests:{$in:["Cooking","Reading"]}
        },

).project({name:1,age:1,gender:1,interests:1})

<!--expelicit And Operator(when we want to filter different value from same field we must use expelicit and operator) -->

# db.practice_data.find({$and: [{ age: { $lt: 30 } },{ gender: "Female" },{ "skills.name": "PYTHON" }]}).project({ age: 1, gender: 1, "skills.name": 1 })

# db.practice_data.find({

    $and: [{ age: { $ne: 18 } }, { age: { $gt: 15 } }]

}).project({ age: 1 }).sort({ age: 1 })//here we have used explicit and operator
