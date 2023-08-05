import { connectDB } from "@/util/database";

export default async function handler(_, res) {
  const db = (await connectDB).db("forum");
  const posts = await db.collection("posts").find().toArray();
  return res.status(200).json(posts);
}
