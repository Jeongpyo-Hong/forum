import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
  }
  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content === "") {
      return res.status(500).json("양식을 모두 입력해주세요");
    }
    try {
      const db = (await connectDB).db("forum");
      await db.collection("posts").insertOne(req.body);
      return res.redirect(302, "/list");
    } catch (e) {
      console.error(e);
    }
  }
}
