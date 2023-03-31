import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import SingleRecipeCategory from './pages/SingleRecipeCategory/SingleRecipeCategory';
import SingleRecipeDetails from './pages/SingleRecipeDetail/SingleRecipeDetails';


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:category' element={<SingleRecipeCategory />} />
        <Route path='/:category/:id' element={<SingleRecipeDetails />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
