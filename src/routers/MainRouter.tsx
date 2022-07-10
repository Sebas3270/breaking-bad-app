import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Character from '../pages/Character'
import Characters from '../pages/Characters'
import Episodes from '../pages/Episodes'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import NotFound from '../pages/NotFound'

const MainRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/> }>
                <Route index element={<Home />}/>
                <Route path='characters'>
                    <Route index element={<Characters />}/>
                    <Route path=':characterId' element={<Character />}/>
                </Route>
                <Route path="episodes" element={<Episodes />}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default MainRouter