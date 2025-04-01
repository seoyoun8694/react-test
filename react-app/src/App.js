import Header from './Header.js'
import Nav from './Nav.js'

function App() {
  return (
    <div className="App">
      <Header title='WEB' content='World Wide Web!' />
      <Nav list1='HTML' list2='CSS' list3='JavaScript' />
    </div>
  );
}

export default App;