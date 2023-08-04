import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  /**
   * 'posts' 컬렉션에서 데이터 가져오기
   * DB데이터는 반드시 서버 컴포넌트로 가져오기
   */
  const db = (await connectDB).db("forum");
  const posts = await db.collection("posts").find().toArray();

  return (
    <div className="list-bg">
      {posts?.map((item, i) => (
        <Link className="list-item" key={i} href={`/detail/${item._id}`}>
          <h4>{item.title}</h4>
          <p>1월 1일</p>
        </Link>
      ))}
    </div>
  );
}
