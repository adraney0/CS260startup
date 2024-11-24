import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { PrivateRoute } from './privateRoute/privateRoute';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
            <div className='body bg-main text-dark'>
                <header className = "container fluid">
                    <nav className = "navbar fixed-top navbar-dark">
                        <div className = "navbar-brand" href = "#">Triangular Peg Solitaire</div>
                        <menu className = "navbar-nav">
                            <li className = "nav-item"><NavLink className = 'nav-link' to = ''>Login</NavLink></li>
                            {authState === AuthState.Authenticated && (
                                <li className = "nav-item">
                                    <NavLink className = 'nav-link' to = 'play'>
                                        Play
                                    </NavLink>
                                </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className = "nav-item">
                                    <NavLink className = 'nav-link' to = 'scores'>
                                        High Scores
                                    </NavLink>
                                </li>
                            )}
                            <li className = "nav-item"><NavLink className = 'nav-link' to = 'about'>About</NavLink></li>
                        </menu>
                    </nav>
                </header>
        
                <Routes>
                    <Route 
                        path='/' 
                        element={
                        <Login 
                            userName={userName}
                            authState={authState}
                            onAuthChange={(userName, authState) => {
                                setAuthState(authState);
                                setUserName(userName);
                            }}
                        />
                        } 
                        exact 
                    />
                    <Route path='/play' element={<PrivateRoute element={<Play userName={userName} />} authState={authState} />} />
                    <Route path='/scores' element={<PrivateRoute element={<Scores />} authState={authState} />} />
                    <Route path='/about' element={<PrivateRoute element={<About />} authState={authState} />}  />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className = "bg-main text-white">
                    <div className = "container-fluid">
                        <span>Belle Draney</span>
                        <a href = "https://github.com/adraney0/CS260startup/tree/main" className = "custom-link">GitHub</a>
                    </div>
                    
                </footer>
            </div>
        </BrowserRouter>
    );
  }

  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }