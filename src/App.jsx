import { useState } from 'react'

import AllPageHeader from './container/components/AllPageHeader'
import Benefit from './container/components/Accelerator/Benefit'
import Logos from './container/components/Accelerator/Logos'
import Advisory from './container/components/Accelerator/Logos/Advisory'
import HomePageHeader from './container/components/Home/HomePageHeader'
import HomeSecondSection from './container/components/Home/HomeSecondSection'
import HomeThirdSection from './container/components/Home/HomeThirdSection'
import HomeFourthSection from './container/components/Home/HomeFourthSection'
import HomeFifthSection from './container/components/Home/HomeFifithSection'
import HomeSixSection from './container/components/Home/HomeSixSection'
import NewsLetter from './container/components/Home/NewsLetter'
import Footer from './container/components/Footer'
import CopyRight from './container/components/CopyRight'
import Navbar from './container/components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import ContactPage from './container/components/ContactUs'
import ChallengesSelling from './container/components/SellingCompanyParts/ChallengesSelling'
import Expertise from './container/components/SellingCompanyParts/Expertise'
import Process from './container/components/SellingCompanyParts/Process'
import Results from './container/components/SellingCompanyParts/Results'
import SupportSelling from './container/components/SellingCompanyParts/SupportSelling'
import SellingCompany from './container/Pages/SellingCompany'
import GrowthStrategy from './container/Pages/GrowthStrategy'
import Organization from './container/Pages/Organization'
import BusinessValuation from './container/Pages/BusinessValuation'
import Accelerator from './container/Pages/Accelerator'
import StartupConsultant from './container/Pages/StartupConsultant'
import SmallEnterprises from './container/Pages/SmallEnterprises'
import Investors from './container/Pages/Investors'
import PeopleCulture from './container/Pages/PeopleCulture'
import LeaderShipChange from './container/Pages/LeaderShipChange'
import SecureFunding from './container/Pages/SecureFunding'
import FeaturesSection from './container/components/SellingCompanyParts/FeaturesSection'
import TestimonialSection from './container/components/SellingCompanyParts/TestimonialSection'


function App() {

  return (
    <>
     <Navbar />
    <Routes>
      <Route path='contact-us' element={<ContactPage/>}/>
 <Route
    path="/"
    element={
      <>
       
        <HomePageHeader />
        <HomeSecondSection />
        <HomeThirdSection />
        <HomeFourthSection />
        <HomeFifthSection />
        <HomeSixSection />
        {/* <NewsLetter /> */}
       
      </>
    }
  />
   
    <Route path="/selling-a-company" element={<SellingCompany/>}/>
    <Route path="/growth-strategy" element={<GrowthStrategy/>}/>
    <Route path="/business-valuation" element={<BusinessValuation/>}/>
   <Route path="/startup-consultant" element={<StartupConsultant/>}/>
   <Route path="/small-enterprises" element={<SmallEnterprises/>}/>
   <Route path="/investors" element={<Investors/>}/>
   <Route path="/growth-strategy" element={<GrowthStrategy/>}/>
   <Route path="/people-and-culture" element={<PeopleCulture/>}/>
   <Route path="/leadership-and-change" element={<LeaderShipChange/>}/>
   <Route path="/find-investors" element={<SecureFunding/>}/>
   <Route path="/accelerators" element={<Accelerator/>}/>

   <Route path="/organization" element={<Organization/>}/>
   </Routes>
  
   <NewsLetter/>
    <Footer />
        <CopyRight />
    </>
  )
}

export default App
