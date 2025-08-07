// import React, { useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from "./components/Header"
// import Footer from './components/Footer'
// import Homepage from './Pages/Homepage'
// import Aboutpage from './Pages/Aboutpage'
// // import About from './components/About'
// // import Aboutpage from './Pages/Aboutpage'
// // import Featuers from './components/Featuers'
// import Workpage from './Pages/Workpage'
// import Servicepage from './Pages/Servicepage'
// import Contactpage from './Pages/Contactpage'
// import Featuerpage from './Pages/Featuerpage'
// import LearnMore from './Pages/LearnMore'
// import GetStartPage from './Pages/GetStartPage'
// import Jansawviman from './components/Jansawviman'
// import Janarogycard from './components/Janarogycard'
// import Login from './components/Login'
// import Register from './components/Resigter'
// import ForgotPass from './components/Forgetpass'
// import Swvimanyojna from './Pages/Swvimanyojna'
// import Arogycard from './Pages/Arogycard'
// // import Getstart from './components/Getstart'

// export default function Main() {
//   //  const [showModal, setShowModal] = useState(false);
//   const [user, setUser] = useState(null);
//   return (
    
//     <BrowserRouter>
//     <Header user={user}/>
   
//         <Routes>
//     <Route path='/' element={<Homepage/>}/>
//     <Route path='about' element={<Aboutpage/>}/>
//      <Route path='/Featuers' element={<Featuerpage/>}/>
//       <Route path='/how-it-work' element={<Workpage/>}/>
//        <Route path='/services' element={<Servicepage/>}/>
//         <Route path='/contact' element={<Contactpage/>}/>

//        {/* learn abbout page routes   */}
//          <Route path='/learnmore' element={<LearnMore/>}/>



//          {/* login route   */}
//          {/* <Route path='/getstart' element={<GetStartPage/>}/> */}
//   {/* <Route path="/login" element={<Login />} />
//   <Route path="/register" element={<Register />} />
//   <Route path="/forgot-password" element={<ForgotPass />} /> */}

//          <Route path="/apply-swabhiman" element={<Swvimanyojna />} />
//         <Route path="/apply-arogya" element={<Arogycard />} />

//    </Routes>
//    <Footer/>
 
//     </BrowserRouter>
//   )
// // }
// import React, { useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from "./components/Header"
// import Footer from './components/Footer'
// import Homepage from './Pages/Homepage'
// import Aboutpage from './Pages/Aboutpage'
// import Workpage from './Pages/Workpage'
// import Servicepage from './Pages/Servicepage'
// import Contactpage from './Pages/Contactpage'
// import Featuerpage from './Pages/Featuerpage'
// import LearnMore from './Pages/LearnMore'
// import GetStartPage from './Pages/GetStartPage'
// import Jansawviman from './components/Jansawviman'
// import Janarogycard from './components/Janarogycard'
// import Login from './components/Login'
// import Register from './components/Resigter'
// import ForgotPass from './components/Forgetpass'
// import Swvimanyojna from './Pages/Swvimanyojna'
// import Arogycard from './Pages/Arogycard'

// export default function Main() {
//   const [user, setUser] = useState(null);

//   return (
//     <BrowserRouter>
//       <Header user={user} />

//       <Routes>
//         <Route path='/' element={<Homepage />} />
//         <Route path='about' element={<Aboutpage />} />
//         <Route path='/Featuers' element={<Featuerpage />} />
//         <Route path='/how-it-work' element={<Workpage />} />
//         <Route path='/services' element={<Servicepage />} />
//         <Route path='/contact' element={<Contactpage />} />

//         {/* Learn More Page */}
//         <Route path='/learnmore' element={<LearnMore />} />

//         {/* Auth Pages */}
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/forgot-password' element={<ForgotPass />} />

//         {/* Card Application Pages */}
//         <Route path='/apply-swabhiman' element={<Swvimanyojna />} />
//         <Route path='/apply-arogya' element={<Arogycard />} />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   )
// // }
// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from "./components/Header"
// import Footer from './components/Footer'
// import Homepage from './Pages/Homepage'
// import Aboutpage from './Pages/Aboutpage'
// import Workpage from './Pages/Workpage'
// import Servicepage from './Pages/Servicepage'
// import Contactpage from './Pages/Contactpage'
// import Featuerpage from './Pages/Featuerpage'
// import LearnMore from './Pages/LearnMore'
// import GetStartPage from './Pages/GetStartPage'
// import Jansawviman from './components/Jansawviman'
// import Janarogycard from './components/Janarogycard'
// import Login from './components/Login'
// import Register from './components/Resigter'
// import ForgotPass from './components/Forgetpass'
// import Swvimanyojna from './Pages/Swvimanyojna'
// import Arogycard from './Pages/Arogycard'
// import { AuthProvider } from './components/AuthContext'

// export default function Main() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path='/' element={<Homepage />} />
//           <Route path='about' element={<Aboutpage />} />
//           <Route path='/Featuers' element={<Featuerpage />} />
//           <Route path='/how-it-work' element={<Workpage />} />
//           <Route path='/services' element={<Servicepage />} />
//           <Route path='/contact' element={<Contactpage />} />
//           <Route path='/learnmore' element={<LearnMore />} />

//           {/* Auth Pages */}
//           <Route path='/login' element={<Login />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/forgot-password' element={<ForgotPass />} />

//           {/* Card Pages */}
//           <Route path='/apply-swabhiman' element={<Swvimanyojna />} />
//           <Route path='/apply-arogya' element={<Arogycard />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </AuthProvider>
//   )
// }
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer';
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Workpage from './Pages/Workpage';
import Servicepage from './Pages/Servicepage';
import Contactpage from './Pages/Contactpage';
import Featuerpage from './Pages/Featuerpage';
import LearnMore from './Pages/LearnMore';

import ForgotPass from './components/Forgetpass';
import Swvimanyojna from './Pages/Swvimanyojna';
import Arogycard from './Pages/Arogycard';
import { AuthProvider } from './components/AuthContext';
import ModalForm from './components/ModalForm'; // Make sure path is correct
import Resigter from './components/Resigter';
import AmbilancePage from './Pages/AmbilancePage';
import InsurancePage from './Pages/InsurancePage';
import TermsConditions from './components/TermsConditions';
import TermsConditionsPage from './Pages/TermsConditionsPage';
import { FcPrivacy } from 'react-icons/fc';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import LeadershipPage from './Pages/LeadershipPage';
import CaseStudyPage from './Pages/CaseStudyPage';
import ProfilePage from './Pages/ProfilePage';
import Arogaycardpage from './Pages/Arogaycardpage';
import JanarogayKendrPage from './Pages/JanarogayKendrPage';
import KendraSopPage from './Pages/KendraSopPage';
import PolicyPage from './Pages/PolicyPage';
import MainPolicyPage from './Pages/MainPolicyPage';
import KendraformPage from './Pages/KendraformPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ComingSoonPage from './Pages/ComingSoonPage';
import CareerPage from './Pages/CareerPage';
import FeedbackPage from './Pages/FeedbackPage';

export default function Main() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('modalShown');
    if (!hasShown) {
      setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem('modalShown', 'true');
      }, 2000); // Show modal after 2 seconds
    }
  }, []);

  return (
    
      <BrowserRouter>
      <AuthProvider>
        {/* Show popup only once per visit */}
        <ModalForm isOpen={showModal} onClose={() => setShowModal(false)} />

        <Header />
        
        {/* <registerModal/> */}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='about' element={<Aboutpage />} />
          <Route path='/Featuers' element={<Featuerpage />} />
          <Route path='/how-it-work' element={<Workpage />} />
          <Route path='/services' element={<Servicepage />} />
          <Route path='/contact' element={<Contactpage />} />
          <Route path='/learnmore' element={<LearnMore />} />
 <Route path='/terms' element={<TermsConditionsPage />} />
 <Route path='/privacy' element={<PrivacyPolicyPage/>} />
 <Route path='/leader' element={<LeadershipPage/>} />
  <Route path='/case' element={<CaseStudyPage/>} />
 <Route path='/profile' element={<ProfilePage/>} />
  <Route path='/profilecard' element={<Arogaycardpage/>} />

  <Route path='/apply-kendr' element={<JanarogayKendrPage/>} />
  
  <Route path='/apply-kendr' element={<KendraSopPage/>}/>
<Route path='/apply-kendrform' element={<KendraformPage/>}/>
 {/* <Route path='/policy' element={<PolicyPage/>}/> */}
 <Route path='/allpolicy' element={<MainPolicyPage/>}/>
          {/* Auth Pages */}
          {/* <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/forgot-password' element={<ForgotPass />} /> */}

          {/* Card Pages */}
          <Route path='/apply-swabhiman' element={<Swvimanyojna />} />
          <Route path='/apply-arogya' element={<Arogycard />} />
          <Route path='/apply-ambulance' element={<AmbilancePage />} />
          <Route path='/apply-insurance' element={<InsurancePage />} />
           <Route path='/comingsoon' element={<ComingSoonPage />} />
           <Route path='/career' element={<CareerPage />} />
           <Route path='/feedback' element={<FeedbackPage />} />
        </Routes>
        <Footer />
        </AuthProvider>
      </BrowserRouter>
    
  );
}
