import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-20">
      <h4>글 작성</h4>
      {session?.user.email ? (
        <form action="/api/posts/new" method="POST">
          <input type="text" name="title" placeholder="글 제목" />

          <input type="text" name="content" placeholder="글 내용" />
          <button type="submit">버튼</button>
        </form>
      ) : (
        <div>로그인하세요</div>
      )}
    </div>
  );
}
