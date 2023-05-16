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

<!--explicit And Operator(when we want to filter different value from same field we must use explicit and operator) -->

//here we have used explicit and operator

# db.practice_data.find({$and: [{ age: { $lt: 30 } },{ gender: "Female" },{ "skills.name": "PYTHON" }]}).project({ age: 1, gender: 1, "skills.name": 1 })

# db.practice_data.find({

    $and: [{ age: { $ne: 18 } }, { age: { $gt: 15 } }]

}).project({ age: 1 }).sort({ age: 1 })

# db.practice_data.find({age:{$exists:true}})

# db.practice_data.find({age:{$type:"number"}})

//here "size" is a array query operator size:4 is defined that this array has 4
data.

# db.practice_data.find({skills:{$size:4}}).project({skills:1})

/_ Array find methods _/

// this is an array value finding methdo with specific order or sequence

# db.practice_data.find({interests:[ "Writing", "Gardening","Travelling" ]}).project({interests:1})

// this is an array value finding methdo without specific sequence.

# db.practice_data.find({interests:{$all:[ "Writing", "Gardening"]}}).project({interests:1})

/_ here "interests.2"is used to mention the index number that means in which
position we want the value"Gardening_/

# db.practice\*data.find({"interests.2":"Gardening"}).project({interests:1})

# db.practice_data.find({ $and: [ { interests: "Gardening" }, { interests:"Writing" }, { interests: "Cooking" } ] }) .project({ interests: 1 })

This query will find the data where "name: javascript" & "level:intermediate" is
exists only not exact match or sequence

# db.practice_data.find({ skills: { $elemMatch: { name: "JAVASCRIPT", level:"Intermidiate" } } }) .project({ skills: 1 })
