import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const db = (await connectDB).db("forum");
      const result = await db
        .collection("comments")
        .find({ parent: new ObjectId(req.query.parent) })
        .toArray();
      return res.status(200).json(result);
    } catch (e) {
      console.error(e);
    }
  }
}
