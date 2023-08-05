"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailLink() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <button
      onClick={() => {
        router.push(`/detail/1`);
      }}
    >
      버튼
    </button>
  );
}
