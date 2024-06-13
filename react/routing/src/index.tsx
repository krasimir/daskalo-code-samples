import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useParams
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename='/routing'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/settings/:content' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/contacts'>Contacts</Link>
      <Link to='/settings/privacy'>Settings</Link>
      <Link to='/settings/profile'>Profile</Link>
    </div>
  )
}
function Contacts() {
  return (
    <div>
      <h1>Contacts</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}
function Settings() {
  const { content } = useParams();
  return (
    <div>
      <h1>Settings</h1>
      <p>{content}</p>
      <Link to='/'>Home</Link>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);