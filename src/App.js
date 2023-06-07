import './App.scss';
import Layout from './components/Layout';
import './assets/resources/fonts.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;
