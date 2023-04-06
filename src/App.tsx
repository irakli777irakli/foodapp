import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import SingleRecipeCategory from './pages/SingleRecipeCategory/SingleRecipeCategory';
import SingleRecipeDetails from './pages/SingleRecipeDetail/SingleRecipeDetails';
import Error from './components/Error/Error';


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:category' element={<SingleRecipeCategory />} />
        <Route path='/:category/:id' element={<SingleRecipeDetails />} />
        <Route path='*' element={<Error />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
