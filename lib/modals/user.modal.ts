import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,

        unique: true,
    },
    photo: {
        type: String,
        required: true,

    },
    fiestName: {
        type: String,

    },
    lastName: {
        type: String,

    },
})

const User = models?.User || model("USer",UserSchema)
export default User