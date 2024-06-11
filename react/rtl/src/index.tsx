import React from 'react';
import ReactDOM from 'react-dom/client';

import User from './User';

function App() {
  return <User data={{ name: 'Krasimir' }} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);