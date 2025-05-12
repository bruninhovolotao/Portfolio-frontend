import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home'; 
import { Sobre } from '../pages/Sobre'; 
import { OqueFaco } from '../pages/O-que-faco';
import { Portfolio } from '../pages/Portfolio';
import { Blog } from '../pages/Blog';
import { Contato } from '../pages/Contato';
import { Login } from '../pages/login';

export function AppRoutes(){
    return(
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/o-que-faco' element={<OqueFaco/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/Blog' element={<Blog/>} />
                <Route path='/contato' element={<Contato/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )

    
}