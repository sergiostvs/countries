import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Header({ onClick, darkMode }) {
  return (
    <div className={`header ${darkMode ? 'darkMode' : ''}`}>
      <div className="header_container">
        <h2 className="logo">Countries</h2>
        <div className="switch_mode" onClick={onClick}>
          <DarkModeIcon />
          <h3>Modo Escuro</h3>
        </div>
      </div>
    </div>
  );
}
