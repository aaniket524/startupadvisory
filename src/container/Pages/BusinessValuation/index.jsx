import React from 'react';

import bvm from '/src/assets/bv/bvm.jpg';
import logo1 from '/src/assets/bv/logo1.jpg'
import logo2 from '/src/assets/bv/logo2.jpg'
import logo3 from '/src/assets/bv/logo3.jpg'
import logo4 from '/src/assets/bv/logo4.jpg'
import logo5 from '/src/assets/bv/logo5.jpg'
import r1 from "/src/assets/bv/r1.png"
import r2 from "/src/assets/bv/2.png"
import r3 from "/src/assets/bv/r3.png"
import r4 from "/src/assets/bv/r4.png"

import SupportSelling from '../../components/SellingCompanyParts/SupportSelling';
import AllPageHeader from '../../components/AllPageHeader';
import ChallengesSelling from '../../components/SellingCompanyParts/ChallengesSelling';
import ResultsSection from '../../components/SellingCompanyParts/Results';
import ProcessSection from '../../components/SellingCompanyParts/Process';
import Expertise from '../../components/SellingCompanyParts/Expertise';
import SellingLogo from '../../components/SellingCompanyParts/SellingLogo';



function BusinessValuation() {
    const allLogos = [logo1, logo2, logo3, logo4, logo5];

    const challengeTexts = [
        "How can our organization manage & facilitate growth?",
        "How do we strengthen transparency & organizational clarity?",
        "How do we distribute roles & responsibilities?",
        "What does ‘future-proof’ mean for our organisation?",
        "How do we professionalize our organisation and strengthen collaboration?",
        "How do we strike the balance between flexibility & stability?"
    ];
    const expertiseData = {
    title: "Expertise we bring",
    items: [
        {
            heading: "Business Valuation",
            description: `We specialise in business valuations for early-stage startups. At this stage, the future growth of your business is still highly uncertain, meaning special methods for company valuation must be applied. Late-stage businesses use the DCF company valuation method as standard, combined with a multiples approach. Sometimes, an asset valuation is also necessary.`        },
        {
            heading: "Financial planning",
            description: `In the service industries and technology sector especially (platform model, SaaS model, corporate sales), we have several years of experience and provide templates for financial planning which are challenged using benchmarks. This is the base for your company valuation.`
        },
        {
            heading: "EU-certified international transfer consultant",
            description: `In 2017 Startup advisory  became a certified international, cross-border transfer consultant under the EU project DANAE “Advisors in a Novel SME Transfer”`
        },
        {
            heading: "20 years of M&A experience",
            description:`We have been active in the M&A sector for over 20 years (acquisition and sale of businesses and business shares), thus we have run a multitude of company valuation projects.`
        }
    ]
};
const supportData = {
    title: "How we support you as business valuation expert",
    subtitle: "Key elements of work",
    list: [
        "We select the right company valuation method, depending on the status and nature of your business. Startup valuation is a special expertise of Konsultori.",
        "We select the right company valuation method, depending on the status and nature of your business. Startup valuation is a special expertise of Konsultori.",
        "We normalise certain aspects of your financial planning.",
        "We create a cash-flow analysis, if none is available already.",
        "We account for debt and cash effects in the valuation.",
        "We work with you to develop three growth scenarios for your business.",
        "We use 2-3 company valuation methods of analysis to value your business",
        "We benchmark business valuation metrics",
        "We analyse synergies of potential buyers",
        "We elaborate argumentation for your company valuation using benchmarks to boost your valuation",
        "We create a business valuation report containing the information, which also features historical metrics"
    ],
    buttonText: "DOWNLOAD BROCHURE",
    imageSrc: bvm
};
const processData = {
    title: "Our process for a project with you",
    steps: [
        {
            heading: "Initial consultation & project outline",
            description: "We engage in a thorough discussion to understand your specific needs, goals, timeline, budget, and general project requirements."
        },
        {
            heading: "Analysis of a business’ current performance (KPIs)",
            description: "We challenge your financial planning which is used for the business valuation, factoring in going concern assumptions and a holistic analysis of opportunities and risks. We normalise certain aspects of your financial planning."        
        },
        {
            heading: "Challenging financial plans and cash-flow",
            description:"We create a working capital and cash-flow analysis and benchmark your financial plans."
        },
        {
            heading: "Scenarios and business valuation",
            description:"We work with you to create 2-3 scenarios for your business. This serves as a basis for the company valuation calculation."
        },
        {
            heading: "Benchmarking",
            description:"We benchmark your financial plan and valuation to provide enough outside perspective to the valuation results. This is the basis for the argumentation of the value of the company."
        },
        {
            heading: "Valuation report",
            description: "We create a business valuation report containing the information collected from the past, the drivers and assumptions for the financial planning and the metrics and methods for the business valuation, as well as the results."
        }
    ]
};

const resultsData = {
    title: "Results you will get",
    results: [
        {
            image: r1,
            text: "Company Valuation report"
        },
        {
            image: r2,
            text: "Business Valuation methods explained"
        },
        {
            image:r3,
            text: "Benchmarking"
        },
        {
            image: r4,
            text: "Feedback on financial planning"
        }
    ]
};
const headerData = {
    subtitle: "How we can help with",
    title: "Business Valuation",
    description: `Understanding the value of your company is essential for making informed decisions and achieving strategic goals. Our business valuation service is tailored to startups and SMEs, providing expert guidance to help you navigate key moments such as attracting investors, forming strategic 
    With extensive experience in company valuation, we specialize in delivering robust and well-benchmarked valuations that serve With extensive experience in as a foundation for successful negotiations with investors, partners, and acquirers. Whether you need a startup valuation to secure funding or an SME valuation to explore growth opportunities, our team of business valuation experts ensures precision and credibility at every step.
    By leveraging proven methodologies and industry benchmarks, we offer insights that empower you to make By leveraging confident decisions and maximize your business’s potential.
    `,
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
                title="Your business growth challenges are taken care of"
                items={challengeTexts}
            />
             <SupportSelling
            title={supportData.title}
            subtitle={supportData.subtitle}
            list={supportData.list}
            buttonText={supportData.buttonText}
            imageSrc={supportData.imageSrc}
        />
                    <ResultsSection title={resultsData.title} results={resultsData.results} />

            <Expertise title={expertiseData.title} items={expertiseData.items} />
            <ProcessSection title={processData.title} steps={processData.steps}/>
          
        </>
    );
}

export default BusinessValuation;
