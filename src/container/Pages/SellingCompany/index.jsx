import React from 'react';
import ChallengesSelling from '../../components/SellingCompanyParts/ChallengesSelling';
import Expertise from '../../components/SellingCompanyParts/Expertise';
import Process from '../../components/SellingCompanyParts/Process';
import Results from '../../components/SellingCompanyParts/Results';
import SupportSelling from '../../components/SellingCompanyParts/SupportSelling';
import AllPageHeader from '../../components/AllPageHeader';
import scimg from '/src/assets/supporselling/sc-img.jpg';
import SellingLogo from '../../components/SellingCompanyParts/SellingLogo';
import logo1 from '/src/assets/sslogo/sslogo1.jpg'
import logo2 from '/src/assets/sslogo/sslogo2.jpg'
import logo3 from '/src/assets/sslogo/sslogo3.jpg'
import logo4 from '/src/assets/sslogo/sslogo4.png'
import logo5 from '/src/assets/sslogo/sslogo5.png'
import logo6 from '/src/assets/sslogo/sslogo6.jpg'
import r1 from "/src/assets/sc_result/rs1.png"
import r2 from "/src/assets/sc_result/rs2.png"
import r3 from "/src/assets/sc_result/rs3.png"
import r4 from "/src/assets/sc_result/rs4.png"



function SellingCompany() {
    const allLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

    const challengeTexts = [
        "You are considering selling your business to a strategic buyer.",
        "You would like to sell your company in order to reorient yourself.",
        "You want to sell your company for economic reasons.",
        "Exit planning: You would like to transfer your business to a family member or someone in your company.",
        "You would like to spin off part of your company and are looking for the best way to sell it to a strategic partner.",
        "You want to prepare for the best way to sell your business in the long term."
    ];
    const expertiseData = {
    title: "Expertise we bring",
    items: [
        {
            heading: "EU-certified international transfer consultant",
            description: `In 2023 Startup advisory became a certified international, cross-border transfer consultant under the EU project DANAE “Advisors in a Novel SME Transfer”. We engage in business exit planning.`
        },
        {
            heading: "20 years of experience",
            description: `We have been active in the sector for over 20 years (acquisition and sale of businesses and business shares). Selling your business is one of our core activities.`
        },
        {
            heading: "Financial planning",
            description: `In the creative industries and technology sector especially (platform model, SaaS model, corporate sales), we have several years of experience and provide templates for financial planning. Financial plans are a core document when selling your company.`
        },
        {
            heading: "Business valuation",
            description: `With 20 years of experience in the corporate and startup scene, project management and keeping tight deadlines in mind is second nature to us. Assisting our clients with briefing and debriefing on future procedures during the negotiation process is also nothing new to us.`
        }
    ]
};
const supportData = {
    title: "How we support you in selling your business",
    subtitle: "Key elements of work",
    list: [
        "Business exit planning",
        "Defining how to sell your company",
        "Strategic reorientation after handover",
        "Profiling and approach to potential partners or buyers",
        "Comprehensive financial plan",
        "Thorough business valuation",
        "Negotiation guidance",
        "Templates for financial and action plans"
    ],
    buttonText: "DOWNLOAD BROCHURE",
    imageSrc: scimg
};
const processData = {
    title: "Our process for a project with you",
    steps: [
        {
            heading: "Initial consultation & project outline",
            description: "We engage in a thorough discussion to understand your specific needs, goals, timeline, budget, and general project requirements."
        },
        {
            heading: "Transfer and sales options",
            description: "Based on the structure of your company and the ownership situation, we will define how to sell your company and your exit strategy."
        },
        {
            heading: "Maximise business valuation",
            description: "We will work on activities you should undertake to maximize the potential business valuation over time before being sales-ready. We help you through the process of selling your business."
        },
        {
            heading: "Buyer profiling and financial plan",
            description: "We will have a business exit planning session to define potential buyers with one or more profiles and ways to identify them. In parallel, we will challenge and/or prepare your financial plan reflecting your strategy and benchmarks."
        },
        {
            heading: "Coordination Auditor, Lawyer",
            description: "The overall process needs legal and tax advice apart from the business advice. We support in coordinating all experts."
        },
        {
            heading: "Due Diligence preparation",
            description: "In the preparation of a data room for the sales process, we provide project management and support in providing a complete data room with all necessary documents."
        },
        {
            heading: "Outreach and process management",
            description: "We advise on structuring the outreach and the process of selling your business. Sometimes we manage the process on the customer’s behalf."
        },
        {
            heading: "Negotiation support",
            description: "During the exit process we support on negotiation and conversations with the different parties."
        }
    ]
};

const resultsData = {
    title: "Results you will get",
    results: [
        {
            image: r1,
            text: "Action and financial plans"
        },
        {
            image: r2,
            text: "Process definition with milestones"
        },
        {
            image: r3,
            text: "Sales documentation and Due Diligence preparation"
        },
        {
            image: r4,
            text: "Business valuation and negotiation support"
        }
    ]
};
const headerData = {
    subtitle: "How we can help with",
    title: "Selling your business",
    description: `You might want to consider selling your company. Independent of the reason why you are selling 
    your business, we provide you with strategic guidance and support in the preparation and throughout the process. 
    Our advisory will cover key aspects such as valuation, identifying potential buyers or partners, structuring the sale, 
    legal and financial considerations, due diligence preparation, and developing a comprehensive exit strategy. 
    We clarify how to sell your company.`,
    buttonText:'Book a non-binding consultation'
};


    return (
        <>
        <AllPageHeader 
    subtitle={headerData.subtitle}
    title={headerData.title}
    description={headerData.description}
        bgColor="#1E1810"
        buttonText={headerData.buttonText}

/>
<SellingLogo logos={allLogos} limit={6} showButton={false} />

            <ChallengesSelling
                title="Your challenges in selling your business"
                items={challengeTexts}
            />
             <SupportSelling
            title={supportData.title}
            subtitle={supportData.subtitle}
            list={supportData.list}
            buttonText={supportData.buttonText}
            imageSrc={supportData.imageSrc}
        />
                    <Results title={resultsData.title} results={resultsData.results} />

            <Expertise title={expertiseData.title} items={expertiseData.items} />
            <Process title={processData.title} steps={processData.steps}/>
          
        </>
    );
}

export default SellingCompany;
