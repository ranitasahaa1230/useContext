import { useLogin } from "./login-context";

export function Home() {
  const { status } = useLogin();

  return (
    <div style={{ backgroundColor: "red" }}>
      <h2>Home Page </h2>
      {status ? <pre>Please Log In</pre> : <pre>User Logged In ✔</pre>}
    </div>
  );
}
