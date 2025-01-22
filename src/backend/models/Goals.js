import mongoose from "mongoose"

const Goal = mongoose.model('Goal',{
    metaOne: Boolean,
    metaTwo: Boolean, 
    metaTwo: Boolean,
    metaThree: Boolean,
    metaFour: Boolean,
    metaFive: Boolean,
    metaSix: Boolean,
    metaSeven: Boolean,
    metaEight: Boolean,
    metaNine: Boolean,
    metaTen: Boolean,
})

export default Goal