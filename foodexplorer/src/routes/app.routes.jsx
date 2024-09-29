import { Route, Routes } from 'react-router-dom'

import { CreateDish } from '../pages/CreateDish'
import { Dish } from '../pages/Dish'
import { EditDish } from '../pages/EditDish'
import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createdish" element={<CreateDish />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/editdish/:id" element={<EditDish />} />
    </Routes>
  )
}