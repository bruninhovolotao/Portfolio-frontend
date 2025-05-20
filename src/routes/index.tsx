import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home'; 
import { Sobre } from '../pages/Sobre'; 
import { OqueFaco } from '../pages/O-que-faco';
import { Blog } from '../pages/Blog';
import { Contato } from '../pages/Contato';
import { Login } from '../pages/login';
import { Painel } from '../pages/Painel';
import { BlogPainel } from '../painel/BlogPainel';
import { PortfolioPainel } from '../painel/PortfolioPainel';
import { Portfolio } from '../pages/Portfolio';
import { AdicionarPortfolio } from '../painel/AdicionarPortfolio';
import { PortfolioDetalhe } from '../pages/PortfolioDetalhe';
import { PrivateRoutes } from "../routes/PrivateRoute";
import { EditarPortfolio } from '../painel/EditarPortfolio';

export function AppRoutes(){
    return(
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/o-que-faco' element={<OqueFaco/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/projetos/:slug' element={<PortfolioDetalhe/>} />
                <Route path='/Blog' element={<Blog/>} />
                <Route path='/contato' element={<Contato/>} />
                <Route path='/login' element={<Login/>} />

                {/* Rotas protegidas */}
                <Route path='/painel' element={<PrivateRoutes><Painel /></PrivateRoutes>} />
                <Route path='/painel/blog' element={<PrivateRoutes><BlogPainel /></PrivateRoutes>} />
                <Route path='/painel/portfolio' element={<PrivateRoutes><PortfolioPainel /></PrivateRoutes>} />
                <Route path='/painel/portfolio/adicionar' element={<PrivateRoutes><AdicionarPortfolio /></PrivateRoutes>} />
                <Route path='/painel/portfolio/editar/:id' element={<PrivateRoutes><EditarPortfolio /></PrivateRoutes>} />
            </Routes>
        </BrowserRouter>
    )

    
}