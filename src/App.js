import './App.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloudIcon from '@material-ui/icons/Cloud';
import CollectionsIcon from '@material-ui/icons/Collections';
import StartPage from './components/startPage'

function App() {
  return (
    <div className="body">
      <header className="header">
          <span className="header__tittle">Image Finder</span>
          <span className="header__icon"><AccountCircleIcon fontSize="large"/> </span>
      </header>
      <nav className="nav">
        <span className="nav__icon"><CloudIcon fontSize="large"/> </span>
        <span className="nav__icon"><CollectionsIcon fontSize="large"/> </span>
      </nav>
      <main className="main">
      <StartPage/>
      </main>
      <footer className="footer">
        <span className="footer__tittle">Copyrights</span>
      </footer>
    </div>
  );
}

export default App;
