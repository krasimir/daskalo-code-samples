async function App() {
  // loading data
  try {
    let data = localStorage.getItem('data');

    if (data === null) {
      const res = await fetch("./data.json");
      data = await res.json();
      localStorage.setItem('data', JSON.stringify(data));
    } else {
      data = JSON.parse(data);
    }
    
    // showing the text on the page
    const element = document.querySelector('#text');
    const originalText = data.courses[0].text;
    let text = originalText;
    if (originalText.length > 50) {
      text = originalText.substr(0, 50);
      text += '<button>виж още</button>';
    }
    element.innerHTML = text;

    // showing all the text
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      element.innerHTML = originalText;
    });
    button.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = 'green';
    });
  } catch(error) {
    console.error('There is problem with the data.');
  }
}

App();