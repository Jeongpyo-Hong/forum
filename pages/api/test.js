export default function handler(요청, 응답) {
  if (요청.method == "POST") {
    return 응답.status(200).json("처리완료");
  }
}

/**
 * [ status ]
 * - 200: 성공
 * - 400: 유저 잘못
 * - 500: 실패
 */
