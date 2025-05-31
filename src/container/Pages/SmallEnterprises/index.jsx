import React from 'react';

import bvm from '/src/assets/bv/bvm.jpg';
import logo1 from '/src/assets/bv/logo1.jpg'
import logo2 from '/src/assets/bv/logo2.jpg'
import logo3 from '/src/assets/bv/logo3.jpg'
import logo4 from '/src/assets/bv/logo4.jpg'
import logo5 from '/src/assets/bv/logo5.jpg'
//mark as pending part

import SupportSelling from '../../components/SellingCompanyParts/SupportSelling';
import AllPageHeader from '../../components/AllPageHeader';
import ChallengesSelling from '../../components/SellingCompanyParts/ChallengesSelling';
import ResultsSection from '../../components/SellingCompanyParts/Results';
import ProcessSection from '../../components/SellingCompanyParts/Process';
import Expertise from '../../components/SellingCompanyParts/Expertise';
import SellingLogo from '../../components/SellingCompanyParts/SellingLogo';



function SmallEnterprises() {
    const allLogos = [logo1, logo2, logo3, logo4, logo5];

    const expertiseData = {
    title: "How we support you",
    items: [
        {
            heading: "Advisory",
            description: `Individual projects tailored to your situation but based on our proven framework and approach. You work with your Startup advisory  expert or team.`
        },
        {
            heading: "Digital Academy",
            description:`Self-learning courses for entrepreneurs who want to drive their growth effectively and quickly.`
        },

    ]
};

const processData = {
    title: "Topics we discuss",
    subtitle:"Mergers & Acquisitions",

    steps: [
        {
            heading: "Secure funding from investors",
            button:"Learn More",
            description: "Get prepared to professionally approach investors to accelerate fundraising. Learn how to start fundraising, which documents to prepare and when to share, How to calculate and challenge your company valuation and many more."
        },
        {
            heading: "Financial planning ",
            button:"Learn More",
            description: "You will learn different valuation methods for startups, how to use valuation methods to prepare for investor meetings, where to get benchmark data from and how to prepare your argumentation and defend the value of a startup."
        },
        {
            heading: "Company valuation",
            button:"Learn More",
            description:"Learn negotiation tactics with suppliers and customers and differences between customer and supplier negotiations, how to prepare for a negotiation, what is tactically important to achieve good results and to de-brief with style to improve tactics in future negotiations."
        },
        {
            heading: "Selling your business",
            button:"Learn More",
            description:"Take your negotiation tactics to the next level and learn special features of sales, partner and investor negotiations, how to get more out of negotiations, how to deal with challenging settings and set your focus."
        },
        {
            heading: "Business negotiation tactics",
            button:"Learn More",
            description:"Learn legal strategies to efficiently negotiate and successfully complete your M&A process. Find more about legal documents during the investor process, main rules in Term Sheets and general best practice strategies."
        },
          {
            heading: "M&A and Legal Terms and Frameworks",
            button:"Learn More",
            description:"Take your negotiation tactics to the next level and learn special features of sales, partner and investor negotiations, how to get more out of negotiations, how to deal with challenging settings and set your focus."
        },
     
    ]
};
const processData2 = {
    title: "TOPICS WE DISCUSS",
    subtitle:"Organisation design",

    steps: [
        {
            heading: "Organisation",
            button:"Learn More",
            description:"It gives you the the understanding of cornerstones & variables of organisation design, context & stakeholder analysis. You will see what are  organizational challenges and possible responses."
        },
        {
            heading: "People & Culture ",
            button:"Learn More",
            description: "You will find out more how do recruiting & onboarding go, what’s talent management & development, job categorisation & evaluation, career management, the importance of feedback and reflection."
        },
        {
            heading: "Leadership & Change",
            button:"Learn More",
            description:" You will gain knowledge of the role and purpose of OKRs, how to align team & individual performance with corporate performance and strategy and other dos and don’ts"
        },
      
     
    ]
};
const processData3 = {
    title: "Topics we discuss",
    subtitle:"Growth",

    steps: [
        {
            heading: "Growth strategy",
            button:"Learn More",
            description:"If you are new in the world of business, have innovative idea or progressed a bit beyond the initial stages of ideation and development, we support you from there"
        },
        {
            heading: "Business collaboration",
            button:"Learn More",
            description: "We guide you in leveraging your existing distribution network to create mutually beneficial partnerships with startups, fostering growth and expansion for both parties."
        },
        {
            heading: "Go-to market strategy",
            button:"Learn More",
            description:"If you’re seeking funding for your venture, we can create a comprehensive go-to- market plan that showcases the value proposition of your product or service, targets potential investors, and outlines the steps to secure funding."
        },
      
     
    ]
};


const headerData = {
    subtitle: "We Work With",
    title: "Startups",
    description: `
    Through our comprehensive range of workshops and advisory services, we equip startup founders with the knowledge, tools, and strategies needed to accelerate their development. Our expert team brings a wealth of experience and expertise across various domains, including organization growth, mergers and acquisitions, strategy, go- to-market, and finance. Whether you’re seeking guidance on optimizing your organizational structure, exploring strategic partnerships, focus in your next steps, or navigating complex financial decisions, we are here to guide you every step of the way.`,
    buttonText:'Start Now'
};


    return (
        <>
        <AllPageHeader 
    subtitle={headerData.subtitle}
    title={headerData.title}
    description={headerData.description}
        bgColor="#000"
        buttonText={headerData.buttonText}

/>


            <ProcessSection title={processData.title} subtitle={processData.subtitle} button={processData.button} steps={processData.steps}/>
            <div className=''>
            <ProcessSection title={processData2.title} steps={processData2.steps}/>
            </div>
             <div className=''>
            <ProcessSection title={processData3.title} steps={processData3.steps}/>
            </div>
                    
                        <Expertise title={expertiseData.title} items={expertiseData.items} />

          
        </>
    );
}

export default SmallEnterprises;
