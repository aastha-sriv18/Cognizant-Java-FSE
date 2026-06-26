import './App.css';

import Home from './components/Home';
import TrainersList from './components/TrainersList';
import TrainerDetails from './components/TrainerDetails';

import {

  BrowserRouter,

  Routes,

  Route,

  Link,

  Navigate

} from "react-router-dom";

function App() {

  return (

    <BrowserRouter>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/trainers">Trainers</Link>

      </nav>

      <div className="container">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="/trainers" element={<TrainersList />} />

          <Route

            path="/trainers/:id"

            element={<TrainerDetails />}

          />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;