import "./styles.css";
import { Home } from "./Home";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { useTheme } from "./theme-context";
import { getFontColor } from "./getFontColor";

export default function App() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };
  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "dark" ? "purple" : "white" }}
    >
      <button onClick={toggleTheme}>
        {theme === "dark" ? "Dark theme 🌑" : "Light theme ☀"}
      </button>
      <div style={{ color: getFontColor(theme) }}>
        <Home />
        <Profile />
        <Login />
      </div>
    </div>
  );
}
