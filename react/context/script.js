const { useState, createContext, useContext } = React;

const ThemeContext = createContext({ value: 'light', toggleTheme: () => {} });

function App() {
  const [ theme, setTheme ] = useState('light');
  return (
    <ThemeContext.Provider value={{ value: theme, toggleTheme: setTheme }}>
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  return (
    <header>
      <ThemeSwitcher />
    </header>
  );
}

function ThemeSwitcher() {
  const { value, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: value === 'light' ? '#333' : '#000', padding: '2em'}}>
      <button onClick={() => toggleTheme(value === 'light' ? 'dark' : 'light')}>Switch Theme</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);