import { model, models, Schema } from "mongoose";

const postSchema = new Schema({
    title: String,
    description: String,
    images: String,
});

const postModel = models.Post || model('Post', postSchema);
export default postModel;
