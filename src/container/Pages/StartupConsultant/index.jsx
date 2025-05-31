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



function StartupConsultant() {
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
            heading: "Company valuation ",
            button:"Learn More",
            description: "A well-researched and persuasive business valuation is crucial for successful negotiations. Whether you’re looking for investors, strategic partnerships, new co- founders, or planning to sell your business, we provide expert guidance."
        },
        {
            heading: "Selling your business",
            button:"Learn More",
            description:"Considering selling your company? We provide strategic guidance and support, including valuation, identifying potential buyers, legal and financial considerations, due diligence preparation, and exit strategy development."
        },
        {
            heading: "Negotiation",
            button:"Learn More",
            description:"We work with you to create 2-3 scenarios for your business. This serves as a basis for the company valuation calculation."
        },
        {
            heading: "Benchmarking",
            button:"Learn More",
            description:"We provide guidance and support for effective negotiation strategies, including understanding the interests of all parties, thorough preparation, compelling proposals, and effective communication tactics. We offer joint briefings and debriefings before major negotiations and can join you where necessary."
        },
     
    ]
};
const processData2 = {
    title: "Topics we discuss",
    subtitle:"Organisation design",

    steps: [
        {
            heading: "Organisational Setup and (Re)-alignment",
            button:"Learn More",
            description: "It gives you the the understanding of cornerstones & variables of organisation design, context & stakeholder analysis. You will see what are  organizational challenges and possible responses."
        },
        {
            heading: "The HR toolbox ",
            button:"Learn More",
            description: "You will find out more how do recruiting & onboarding go, what’s talent management & development, job categorisation & evaluation, career management, the importance of feedback and reflection."
        },
        {
            heading: "Leadership & Culture",
            button:"Learn More",
            description:"You will gain knowledge of the role and purpose of OKRs, how to align team & individual performance with corporate performance and strategy and other dos and don’ts"
        },
      
     
    ]
};
const processData3 = {
    title: "Topics we discuss",
    subtitle:"Growth",

    steps: [
        {
            heading: "Business growth consultancy",
            button:"Learn More",
            description:"When building your company’s future, it’s crucial to choose the right direction and use your resources wisely. We’ll assist you in reviewing and developing your strategy for the next three years, outlining the necessary building blocks for success and offering continuous support during implementation."
        },
        {
            heading: "Corporate-startup collaboration",
            button:"Learn More",
            description: "Want to tap into external innovation for your company? Let us help you find the right startup collaboration model, innovative products, and market trends."
        },
        {
            heading: "Go-to market strategy",
            button:"Learn More",
            description:"Go-to market strategyExpanding globally? We offer market research, analysis, and advice to help you identify the right markets and entry strategies. Gain insights on product launches and market positioning tailored to your business needs."
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

export default StartupConsultant;
