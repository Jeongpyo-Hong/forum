import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit({ params }) {
  /**
   * 'posts' 컬렉션에서 데이터 가져오기
   * DB데이터는 반드시 서버 컴포넌트로 가져오기
   */
  const db = (await connectDB).db("forum");
  const post = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(params.id) });

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/posts/edit" method="POST">
        <input type="hidden" name="id" defaultValue={post._id} />
        <input type="text" name="title" defaultValue={post.title} />
        <input type="text" name="content" defaultValue={post.content} />
        <button type="submit">완료</button>
      </form>
    </div>
  );
}
