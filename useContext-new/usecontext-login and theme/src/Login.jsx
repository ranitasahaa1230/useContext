import { useLogin } from "./login-context";

export function Login() {
  const { status, setLoggedIn } = useLogin();

  const loggedInHandler = () => {
    setLoggedIn((prev) => !prev);
  };

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h2>Login Page </h2>
      {status ? <pre>Please Log In</pre> : <pre>User Logged In ✔</pre>}
      <button onClick={loggedInHandler}>
        {status ? "Log In ▶" : "◀ Log Out"}
      </button>
    </div>
  );
}
