import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import ArticleCard from './components/ArticleCard';
import Header from './components/Header';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ArticleCard 
        title = 'Hello'
        body = 'world'
        />
      </div>
    </div>
  );
}

export default App;
