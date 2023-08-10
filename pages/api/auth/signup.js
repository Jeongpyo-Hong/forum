import { connectDB } from "@/util/database";
import bcrtpy from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // 양식을 모두 작성하였는지 체크
    if (
      req.body.name === "" ||
      req.body.email === "" ||
      req.body.password == ""
    ) {
      return res.status(500).send("Please fill out all the forms");
    } else {
      const db = (await connectDB).db("forum");
      // 이미 가입된 유저인지 체크
      const user = await db
        .collection("user_cred")
        .findOne({ email: req.body.email });
      if (user) {
        return res.status(500).send("To be a registerd user");
      } else {
        req.body.password = await bcrtpy.hash(req.body.password, 10);
        await db.collection("user_cred").insertOne(req.body);
        return res.redirect(302, "/list");
      }
    }
  }
}
