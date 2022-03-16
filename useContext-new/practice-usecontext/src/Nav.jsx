// import { useLanguage } from "./localization-context";
import { useTheme } from "./theme-context";

export function Nav() {
  const { setTheme } = useTheme();
  // const { setLanguage } = useLanguage();

  const changeTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <button onClick={changeTheme}>Toggle Mode</button>
      {/* <button
        onClick={() => setLanguage((lang) => (lang === "hi" ? "en" : "hi"))}
      >
        Toggle Language
      </button> */}
    </>
  );
}
