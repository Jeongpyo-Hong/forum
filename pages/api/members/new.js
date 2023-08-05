import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.id === "" || req.body.pw === "") {
      return res.status(500).json("양식을 모두 입력해주세요");
    }
    try {
      const db = (await connectDB).db("forum");
      await db.collection("members").insertOne(req.body);
      return res.status(200).json("회원가입 완료");
    } catch (e) {
      console.error(e);
    }
  }
}
