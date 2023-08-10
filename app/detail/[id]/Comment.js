"use client";

import { useEffect, useState } from "react";

export default function Comment({ postId }) {
  const [content, setContnet] = useState("");
  const [contents, setContents] = useState(null);

  const onChange = (e) => {
    setContnet(e.target.value);
  };

  const commentHandler = () => {
    fetch("/api/comments/new?", {
      method: "POST",
      body: JSON.stringify({ content, parent: postId }),
    })
      .then((res) => res.json())
      .then((data) => setContents(data));
    setContnet("");
  };

  // comments get
  useEffect(() => {
    fetch(`/api/comments/get?parent=${postId}`, {
      method: "GET",
    }).then((res) => res.json().then((data) => setContents(data)));
  }, []);

  return (
    <div>
      <div>
        댓글목록
        {contents?.map((item) => (
          <div key={item._id}>{item.content}</div>
        ))}
      </div>
      <input type="text" name="content" value={content} onChange={onChange} />
      <button onClick={commentHandler}>댓글전송</button>
    </div>
  );
}
