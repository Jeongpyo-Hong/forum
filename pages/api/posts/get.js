import { connectDB } from "@/util/database";

export default async function handler(_, res) {
  if (req.method === "GET") {
    try {
      const db = (await connectDB).db("forum");
      const posts = await db.collection("posts").find().toArray();
      const result = posts.map((item) => {
        item._id = item._id.toString();
        return item;
      });
      return result;
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "서버 오류가 발생했습니다" });
    }
  }
}
