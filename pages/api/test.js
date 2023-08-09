export default function handler(요청, 응답) {
  console.log(요청.query);
  return 응답.status(200).json("처리완료");
}

/**
 * [ status ]
 * - 200: 성공
 * - 400: 유저 잘못
 * - 500: 실패
 */
