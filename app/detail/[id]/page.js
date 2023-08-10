import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { notFound } from "next/navigation";

export default async function Detail({ params }) {
  const db = (await connectDB).db("forum");
  const post = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(params.id) });

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
      <Comment postId={params.id} />
    </div>
  );
}
