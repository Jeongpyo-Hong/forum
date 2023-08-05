import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("aaa");
    if (req.body.title === "" || req.body.content === "") {
      return res.status(500).json("양식을 모두 입력해주세요");
    }
    try {
      const db = (await connectDB).db("forum");
      await db.collection("posts").insertOne(req.body);
      return res.status(200).json("작성 완료");
    } catch (e) {
      console.error(e);
    }
  } else if (req.method === "PATCH") {
    console.log("bbb");
    if (req.body.title === "" || req.body.content === "") {
      return res.status(500).json("양식을 모두 입력해주세요");
    }
    try {
      const db = (await connectDB).db("forum");
      await db.collection("posts").updateOne(req.body);
      return res.status(200).json("수정 완료");
    } catch (e) {
      console.error(e);
    }
  }
}
