import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { register } from 'swiper/element/bundle'
import { AuthProvider } from './hooks/auth'
import { CartProvider } from './hooks/cart'
import { Routes } from './routes'
register()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </AuthProvider>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Zoom}
    />
  </React.StrictMode>,
)