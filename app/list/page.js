import { connectDB } from "@/util/database";
import ListItem from "./ListItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

/**
 * [ dynamic rendering ]
 * - 강제로 지정할 수 있으나, 서버에 부담이 갈 수 있음
 */
export const dynamic = "force-dynamic";

/**
 * [ revalidate ]
 * - 지정한 시간 기준으로 캐싱 기능
 * - 예시: export const revalidate = 60 (60초 캐싱)
 */

export default async function List() {
  /**
   * 'posts' 컬렉션에서 데이터 가져오기
   * - DB데이터는 반드시 서버 컴포넌트로 가져오기
   */
  const db = (await connectDB).db("forum");
  const posts = await db.collection("posts").find().toArray();
  const result = posts.map((item) => {
    item._id = item._id.toString();
    return item;
  });

  /**
   * [ session ]
   */
  const session = await getServerSession(authOptions);

  return (
    <div className="list-bg">
      <ListItem result={result} session={session} />
    </div>
  );
}
