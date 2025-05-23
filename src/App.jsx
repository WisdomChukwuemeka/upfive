import { Footer } from "../components/footer"
import { Layout } from "../components/layout"
import { AboutSection } from "../pages/about"
import { Courses } from "../pages/courses"
import { Home } from "../pages/home"
import {RegistrationForm} from "../pages/registration"
import {Routes, Route, Navigate} from 'react-router-dom'


export const App = () => {
  return(
    <>
      <div className='flex overflow-hidden flex-col min-h-[100dvh] w-[100vw] bg-black'>
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="registration" element={<RegistrationForm />} />
            <Route path='about' element={<AboutSection />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
        <div className='mt-auto w-full z-10'>
          <Courses />
          <Footer />
        </div>
      </div>
    </>
  )
}