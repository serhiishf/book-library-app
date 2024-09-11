import './App.scss';
import BookList from './components/BookList/BookList';
import BookForm from './components/BookForm/BookForm';
import Filter from './components/Filter/Filter';
import AppBlock from './components/AppBlock/AppBlock';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Library app</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <AppBlock>
            <BookForm />
          </AppBlock>
        </div>
        <div className="app-right-column">
          <AppBlock>
            <Filter />
          </AppBlock>
          <AppBlock>
            <BookList />
          </AppBlock>
        </div>
      </main>
    </div>
  );
}

export default App;
