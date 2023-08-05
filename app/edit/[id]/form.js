"use client";

import { useState } from "react";

export default function Form({ post }) {
  const [form, setForm] = useState({
    title: post.title,
    content: post.content,
  });
  const { title, content } = form;
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <form action="/api/posts/new" method="PATCH">
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
