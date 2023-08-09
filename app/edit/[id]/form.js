"use client";

import { useState } from "react";

export default function Form({ post }) {
  const [form, setForm] = useState({
    id: post._id,
    title: post.title,
    content: post.content,
  });
  const { id, title, content } = form;
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <form action="/api/posts/edit" method="POST">
      <input type="hidden" name="id" defaultValue={id.toString()} />
      <input
        type="text"
        name="title"
        defaultValue={title}
        onChange={onChange}
      />
      <input
        type="text"
        name="content"
        defaultValue={content}
        onChange={onChange}
      />
      <button type="submit">완료</button>
    </form>
  );
}
