export default function handler(_, res) {
  const date = new Date();
  return res.status(200).json(date);
}
