import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NotFoundPage from '../pages/404/NotFoundPage'
import AboutPage from '../pages/about-faqs/AboutPage'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import HomePage from '../pages/Home/HomePage'
import ProfilePage from '../pages/profile/ProfilePage'
import TaskDetail from '../pages/tasks/TaskDetail'
import TasksPage from '../pages/tasks/TasksPage'

const AppRouting = () => {

    return (
        <BrowserRouter>
            <div>
                <aside>
                    <Link to="/">| HOME |</Link>
                    <Link to="/task">| TASKS |</Link>
                    <Link to="/about">| ABOUT |</Link>
                </aside>
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/task" element={<TasksPage />} />

                <Route path="/task/:id" element={<TaskDetail />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouting