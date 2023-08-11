"use client";

import { useState } from "react";

export default function Image() {
  const [src, setSrc] = useState("");

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={async (e) => {
          const file = e.target.files[0];
          const fileName = encodeURIComponent(file.name);
          let res = await fetch(`api/posts/image?file=${fileName}`);
          res = await res.json();

          //S3 업로드
          const formData = new FormData();
          Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
            formData.append(key, value);
          });
          let result = await fetch(res.url, {
            method: "POST",
            body: formData,
          });

          if (result.ok) {
            setSrc(result.url + "/" + fileName);
          } else {
            alert("업로드 실패");
          }
        }}
      />
      <img
        src={src}
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
    </div>
  );
}
