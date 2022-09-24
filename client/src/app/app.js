import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <ToastContainer />
    </div>
  );
}

export default App;
