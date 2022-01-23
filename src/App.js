import './App.css';
import CHeader from './components/CHeader';
import CContents from "./components/CContents";
import { CFooter } from "./components/CFooter";

function App() {
  return (
    <div className='App'>
      <CHeader />
      <CContents />
      <CFooter />
    </div>
  );
}

export default App;
