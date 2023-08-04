import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail({ params }) {
  const db = (await connectDB).db("forum");
  const post = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(params.id) });
  console.log(params);
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>
  );
}
