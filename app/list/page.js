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
        <div className="list-item" key={i}>
          <Link href={`/detail/${item._id}`} prefetch={false}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </Link>
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "20px" }}
          >
            <p>1월 1일</p>
            <Link href={`/edit/${item._id}`}>🖋️</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
