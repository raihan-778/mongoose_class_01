# The aggregation pipeline in MongoDB is a sequence of stages that process input documents and pass the results to the next stage. Each stage performs a specific operation, such as filtering, grouping, projecting, sorting, limiting, or joining data. Here are the key stages and concepts:

# =>$match: Filters documents based on specified conditions, similar to the find operation.

# =>$group: Groups documents by a key and applies accumulator expressions to calculate aggregated values for each group.

# =>$project: Reshapes documents by specifying which fields to include/exclude, renaming fields, adding computed values, or applying expressions.

# =>$sort: Sorts documents based on one or more fields, in ascending (1) or descending (-1) order.

# =>$limit and $skip: Limits the number of documents in the output or skips a certain number of documents.

# =>$unwind: Deconstructs an array field and creates a separate document for each array element.

# =>$lookup: Performs a left outer join between documents in the current collection and another collection based on a common field.

# Aggregation Operators: MongoDB provides various operators for arithmetic, arrays, dates, strings, and logic, allowing you to perform specific operations within stages.

# By combining these stages and operators, you can construct complex pipelines to transform and analyzes data in MongoDB, enabling advanced data manipulation, analytics, and reporting capabilities.

- mongoDB Aggrigation Methods.()

# db.practice_data.aggregate([

    {$match:{age:{$gt:18},"favouriteColor" : "Blue"}},
    {$project: {age:1,favouriteColor:1}}
    ])

- Here in aggrigation process if you defind the project stage before match stage
  and filter some filed, after filteration project stage remove the filtered
  filed so that if you want to match such kind of filed which is filterd by
  project method then you can not get tha matched resuelt /\*

# db.practice_data.aggregate([

    {$project: {age:1,favouriteColor:1,name:1,gender:1}},
    {$match:{gender:"Female" ,age:{$gt:18}}}
    ])
