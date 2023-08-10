"use client";

import Link from "next/link";

export default function ListItem({ result, session }) {
  const deleteHandler = (item, e) => {
    if (session.user.email === item.author)
      fetch(`/api/posts/delete/${item._id}`, { method: "DELETE" })
        .then((res) => console.log(res.json()))
        .then(() => {
          e.target.parentElement.style.opacity = 0;
          setTimeout(() => {
            e.target.parentElement.style.display = "none";
          }, 1000);
        });
  };

  return (
    <div>
      {result?.map((item, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${item._id}`} prefetch={false}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </Link>
          <p>1월 1일</p>
          {session?.user.email === item.author ||
          session?.user.role === "admin" ? (
            <div>
              <Link href={`/edit/${item._id}`}>🖋️</Link>
              <span
                className="delete-item"
                onClick={(e) => deleteHandler(item, e)}
              >
                ❌
              </span>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
