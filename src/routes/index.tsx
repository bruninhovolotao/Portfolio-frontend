import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home'; 
import { Sobre } from '../pages/Sobre'; 
import { OqueFaco } from '../pages/O-que-faco';
import { Portfolio } from '../pages/Portfolio';
import { Blog } from '../pages/Blog';
import { Contato } from '../pages/Contato';
import { SpeedInsights } from '@vercel/speed-insights/react';


export function AppRoutes(){
    return(
        
        <BrowserRouter>
            <Routes>
                <SpeedInsights />
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/o-que-faco' element={<OqueFaco/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/Blog' element={<Blog/>} />
                <Route path='/contato' element={<Contato/>} />
            </Routes>
        </BrowserRouter>
    )
}