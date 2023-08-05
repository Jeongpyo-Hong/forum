export default function Signup() {
  return (
    <div>
      <h4>회원가입</h4>
      <form action="api/members/new" method="POST">
        <input type="text" name="id" placeholder="아이디" />
        <input type="password" name="pw" placeholder="패스워드" />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
