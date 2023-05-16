/_ be carefull when using $set for update any data.use $set only update single
value data or primitive type data becasue it will replace all previous value
with new value_/

# db.practice_data.updateOne(

    { _id: ObjectId("6406ad65fc13ae5a400000c6") },
    { $set: { country: "Bangladesh" } }

) /_addToSet will only can add single value in any parameter,if we want to add
multiple in an array or objects we need to add another syntext "$each modifier
with addToSet syntax_/

# db.practice_data.updateOne(

    { _id: ObjectId("6406ad65fc13ae5a400000c6") },
    { $addToSet: { interests: ["Programming", "Singing"] }},
    )

//Here using $each syntex we can add multiple value in an array

# db.practice_data.updateOne(

    { _id : ObjectId("6406ad65fc13ae5a400000c7") },
    { $addToSet: {interests: {$each: ["Programming","Singing" ]}}},
    )

/_Here using $push syntex we can add multiple value in an array but it will
repaet existing value.That means duplicate value can be added by push method_/

# db.practice_data.updateOne(

    { _id : ObjectId("6406ad65fc13ae5a400000c7") },
    { $push: {interests: {$each: ["Programming","Singing" ]}}},
    )

/_ Here using pop method we can remove any value of property using last index or
first index.If we user "interests:1" it will remove las value and if we use
"interests:-1" it will remove first value of the property _/

# db.practice_data.updateOne( { \_id : ObjectId("6406ad65fc13ae5a400000c7") }, {$pop: {interests:-1}}, )

# db.practice_data.updateOne( { \_id :ObjectId("6406ad65fc13ae5a400000c7") }, { $pop: {interests:1}}, )

# By using @unset syntax we can remove any property form any array

# db.practice_data.updateOne( {\_id : ObjectId("6406ad65fc13ae5a400000c6")},

      {$unset:{occupation:1}} )

        // both will give the same result

# db.practice_data.updateOne({\_id : ObjectId("6406ad65fc13ae5a400000c6")},

        {$unset:{occupation:""}})

/_ Here $pull syntax will remove specific value from properties. _/

# db.practice_data.updateOne(

    {_id : ObjectId("6406ad65fc13ae5a400000c6")}
    ,{$pull:{friends:"Abdur Rakib"}}
    )

/_ Here $pullAll syntax will remove specific multiple value from properties. _/

## db.practice_data.updateOne(

    {_id : ObjectId("6406ad65fc13ae5a400000c6")}
    ,{$pullAll:{friends:["Mezbaul Abedin","Rasel Ahmed"]}}
    )

Here $pullAll syntax will remove specific multiple value from properties.
