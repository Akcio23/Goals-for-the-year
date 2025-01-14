import mongoose from "mongoose"

const Goal = mongoose.model('Goal',{
    metaOne: String,
    metaTwo: String
})

export default Goal