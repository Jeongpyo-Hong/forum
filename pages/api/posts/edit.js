import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content === "") {
      return res.status(500).json("양식을 모두 입력해주세요");
    }
    try {
      const db = (await connectDB).db("forum");
      await db.collection("posts").updateOne(
        { _id: new ObjectId(req.body.id) },
        {
          $set: {
            title: req.body.title,
            content: req.body.content,
          },
        }
      );
      return res.redirect(302, "/list");
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "서버 오류가 발생했습니다" });
    }
  }
}
