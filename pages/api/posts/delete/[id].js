import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;
    try {
      const db = (await connectDB).db("forum");
      await db.collection("posts").deleteOne({ _id: new ObjectId(id) });
      return res.redirect(302, "/list");
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "서버 오류가 발생했습니다" });
    }
  }
}
