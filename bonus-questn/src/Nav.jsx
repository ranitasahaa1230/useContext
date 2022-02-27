import { useTheme } from "./theme-context";
import { useLanguage } from "./localize-context";

export function Nav() {
  const { setTheme } = useTheme();
  const { setLanguage } = useLanguage();
  // const { toggle } = useTheme();

  return (
    <>
      <button
        onClick={() => {
          setTheme((theme) => (theme === "dark" ? "light" : "dark"));
        }}
      >
        Toggle Mode
      </button>
      {/* <button onClick={toggle}>Toggle Mode</button> */}

      <button onClick={() => setLanguage("english")}>English</button>
      <button onClick={() => setLanguage("hindi")}>Hindi</button>
    </>
  );
}
