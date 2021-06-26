import './App.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloudIcon from '@material-ui/icons/Cloud';
import CollectionsIcon from '@material-ui/icons/Collections';
import StartPage from './components/startPage/StartPage'
import { BrowserRouter, NavLink, Route} from 'react-router-dom';
import CollectionPage from './components/collectionPage/CollectionPage'

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <header className="header">
            <span className="header__tittle">Image Finder</span>
            <span className="header__icon"><AccountCircleIcon fontSize="large"/> </span>
        </header>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/"><span className="nav__icon"><CloudIcon fontSize="large"/> </span></NavLink>
            </li>
            <li>
              <NavLink to="/collectionPage"><span className="nav__icon"><CollectionsIcon fontSize="large"/> </span></NavLink>
            </li>
          </ul>
        </nav>
        <main className="main">
        <Route exact path="/" component={StartPage}/>
        <Route path="/collectionPage" component={CollectionPage}/>
        </main>
        <footer className="footer">
          <span className="footer__tittle">Copyrights</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
