import React from 'react';

import fim from '/src/assets/fi/fim.jpg';
import logo1 from '/src/assets/fi/logo1.jpg'
import logo2 from '/src/assets/fi/logo2.jpg'
import logo3 from '/src/assets/fi/logo3.jpg'
import logo4 from '/src/assets/fi/logo4.jpg'
import logo5 from '/src/assets/fi/logo5.jpg'

import SupportSelling from '../../components/SellingCompanyParts/SupportSelling';
import AllPageHeader from '../../components/AllPageHeader';
import ChallengesSelling from '../../components/SellingCompanyParts/ChallengesSelling';
import ResultsSection from '../../components/SellingCompanyParts/Results';
import ProcessSection from '../../components/SellingCompanyParts/Process';
import Expertise from '../../components/SellingCompanyParts/Expertise';
import SellingLogo from '../../components/SellingCompanyParts/SellingLogo';
import ATestimonials from '../../components/SellingCompanyParts/ATestimonials';



function SecureFunding() {
    const allLogos = [logo1, logo2, logo3, logo4, logo5];

    const challengeTexts = [
        "Which investors are right for my company?",
        "How to find investors and how to approach investors.",
        "Is my business “ready” for investors?",
        "Which documents should I prepare in advance?",
        "What is typical for a negotiation and what is not?",
        "What is the value of my company and how can I defend it?"
    ];
    const expertiseData = {
    title: "Expertise we bring",
    items: [
        {
            heading: "Business valuation",
            description: `We specialise in business valuations for early-stage startups. At this stage, the future growth of your business is still highly uncertain, meaning special methods for valuation must be applied. Late-stage businesses use the DCF method as standard, combined with a multiples approach. Sometimes, an asset valuation is also necessary.`
        },
        {
            heading: "Financial planning",
            description: `In the service industries and technology sector especially (platform model, SaaS model, corporate sales), we have several years of experience and provide templates for financial planning which are challenged using benchmarks.`
        },
        {
            heading: "Equity story",
            description: `Investors need a few solid arguments to explain why your business generates added value and why your business valuation is forecast to increase exponentially in the future. That is summarised in an equity story and together with your investment teaser, it is the backbone of your investment story.`
        },
        {
            heading: "Investment strategy & process",
            description:`We support business sales and funding rounds with strategic or financial investors. Depending on your industry, different processes need to be defined in order to be able to manage and complete the process within the scheduled timeframe.`
        },
        {
            heading: "M&A negotiations & project management",
            description:`With 20’ years M&A experience in the corporate and startup scene, project management and keeping tight deadlines in mind is second nature to us. Assisting our clients with briefing and debriefing on future procedures during the negotiation process is also nothing new to us.`
        },
        {
            heading: "How to approach investors & business matchmaking",
            description:`A good network can definitely be beneficial. But these days you can approach investors and strategic partners with a short, well- crafted ‘cold’ pitch. We don’t believe that you need to approach business matchmakers for the sake of your network.`
        }
    ]
};
const supportData = {
    title: "Secure funding from investors with our support",
    subtitle: "Key elements of work",
    list: [
        "We challenge your financial plan",
        "We develop benchmarks together to validate your assumptions",
        "We prepare your documents with key performance indicators (KPIs)",
        "We evaluate your company from an objective perspective",
        "We provide advice on the optimal definition of the process",
        "We clarify how to approach investors",
        "We prepare your documents with you",
        "We support you with the long list of investors you will approach",
        "If required, we take over the project management of the process",
        "We accompany you throughout the entire investor process up to completion",
        "We compile your due diligence documents with you",
        "We assist with tactics during the negotiations and prepare you for the next talks."
        ],
    buttonText: "DOWNLOAD BROCHURE",
    imageSrc: fim
};
const processData = {
    title: "Our process for a project with you",
    steps: [
        {
            heading: "Initial consultation & project outline",
            description: "We engage in a thorough discussion to understand your specific needs, goals, timeline, budget, and general project requirements."
        },
        {
            heading: "Challenging all documents",
            description: "We give feedback on everything you already have and provide you with frameworks, templates, and inputs to the list of things to prepare for an investor process. From Financial Plan to  Strategy documentation, pitch-deck, etc. We provide benchmarks, look at inconsistencies, assess your business from an objective perspectives, advise on KPIs."
        },
        {
            heading: "Business valuation",
            description:"We use different methods suitable for your situation to come up with your company valuation, a presentation of it including all the details and benchmarks and argumentation to defend your valuation in talks."
        },
        {
            heading: "Investment teaser and process",
            description:"We support you in preparing your documentation including a revision of your pitch deck including all elements, being consistent, benchmarked, defendable, state of the art, readable."
        },
        {
            heading: "Long list of investors and pitches",
            description:"We extend your existing list of potential investors by working on a clear investor profiling and ranking and providing more sources to build your list of investors. We jointly cut it down to a short list and prioritise outreach."
        },
        {
            heading: "Project management and negotiation support",
            description: "We assume project management and coordination responsibilities during the whole process, give feedback, keep time management, brief and debrief for negotiations."
        }
    ]
};

const resultsData = {
    title: "Results you will get",
    results: [
        {
            image: "/src/assets/fi/r1.png",
            text: "Financial plan and investment teaser"
        },
        {
            image: "/src/assets/fi/r2.png",
            text: "Business valuation and project management"
        },
        {
            image: "/src/assets/fi/r3.png",
            text: "List of investors and negotiation support"
        },
        {
            image: "/src/assets/fi/r4.png",
            text: "Coordination of legal consultants and auditor"
        }
    ]
};
const headerData = {
    subtitle: "How we can help with",
    title: "Secure funding from investors",
    description: `We provide guidance on how to find investors and how to approach investors to secure funding. We assess the readiness of your business for investment and advise on the documents you should prepare in advance. Our expertise extends to negotiation tactics, guiding you through the typical aspects of a negotiation and what to avoid. Startup advisory  assists in determining the valuation of your company and helps you demonstrate its value to potential investors.`,
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
                title="Your challenges in securing funding from investors"
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
            <ATestimonials/>
            <ProcessSection title={processData.title} steps={processData.steps}/>
          
        </>
    );
}

export default SecureFunding;
