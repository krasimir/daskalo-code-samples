import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename='/routing'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/settings/:content" element={<Settings />}/>
      </Routes>
    </BrowserRouter>
  )
}
function Home() {
  return (
    <div>
      <p>This is home page</p>
      <Link to="/contacts">Contacts</Link>
      <Link to="/settings/profile">Settings</Link>
    </div>
  )
}
function Contacts() {
  return (
    <div>
      <p>This is contacts page</p>
      <Link to="/">back to home</Link>
    </div>
  );
}
function Settings() {
  const { content } = useParams();
  return (
    <div>
      <p>This is settings page - {content}</p>
      <Link to="/">back to home</Link>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);