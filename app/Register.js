"use client";

import Link from "next/link";

export default function Register() {
  return (
    <button>
      <Link href="/register" style={{ margin: 0 }}>
        회원가입
      </Link>
    </button>
  );
}
