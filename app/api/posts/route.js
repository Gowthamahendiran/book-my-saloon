import connectMongo from "../../../utils/connectmongo";
import postModel from "../../../models/postmodel";

export async function GET() {
    try {
        await connectMongo();
        const PostData = await postModel.find({});
        return Response.json(PostData);
    } catch (error) {
        return Response.json({ message: error.message });
    }
}