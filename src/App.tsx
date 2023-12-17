import { BrowserRouter, Routes} from "react-router-dom";
import { renderRoutes, routes } from './routes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(routes)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
