import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  req.body = JSON.parse(req.body);
  const session = await getServerSession(req, res, authOptions);
  const data = {
    content: req.body.content,
    parent: new ObjectId(req.body.parent),
    author: session.user.email,
  };
  if (req.method === "POST") {
    if (req.body.content === "") {
      return res.status(500).json("댓글을 입력해주세요");
    }
    try {
      const db = (await connectDB).db("forum");
      await db.collection("comments").insertOne(data);
      const result = await db.collection("comments").find().toArray();
      return res.status(200).json(result);
    } catch (e) {
      console.error(e);
    }
  }
}
