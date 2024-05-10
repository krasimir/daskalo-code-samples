class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

function App({ children }) {
  return <Hello>Hey, {children()}</Hello>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App>{() => 'Krasi'}</App>);