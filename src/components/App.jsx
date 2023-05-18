import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header/Header';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} />  
        <Route path='/home' element={<Home /> } />
        <Route path='/movies' element={<Movies />} />
        {/* <Route path='/movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='review' element={<Reviews />} />
        </Route> */}
    {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
    
    
    
    
    
    
    
    
    
    
    </>
  );
};
