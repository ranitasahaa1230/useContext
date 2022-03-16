import { useLogin } from "./login-context";

export function Profile() {
  const { status } = useLogin();
  return (
    <div style={{ backgroundColor: "violet" }}>
      <h2>Profile Page </h2>
      {status ? <pre>Please Log In</pre> : <pre>User Logged In ✔</pre>}
    </div>
  );
}
