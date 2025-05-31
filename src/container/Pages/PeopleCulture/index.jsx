import React from 'react';

import pcm from '/src/assets/pc/pcm.jpg';
import logo1 from '/src/assets/pc/logo1.jpg'
import logo2 from '/src/assets/pc/logo2.jpg'
import logo3 from '/src/assets/pc/logo3.jpg'
import logo4 from '/src/assets/pc/logo4.jpg'
import logo5 from '/src/assets/pc/logo5.jpg'

import SupportSelling from '../../components/SellingCompanyParts/SupportSelling';
import AllPageHeader from '../../components/AllPageHeader';
import ChallengesSelling from '../../components/SellingCompanyParts/ChallengesSelling';
import ResultsSection from '../../components/SellingCompanyParts/Results';
import ProcessSection from '../../components/SellingCompanyParts/Process';
import Expertise from '../../components/SellingCompanyParts/Expertise';
import SellingLogo from '../../components/SellingCompanyParts/SellingLogo';
import TestimonialSection from '../../components/SellingCompanyParts/TestimonialSection';



function PeopleCulture() {
    const allLogos = [logo1, logo2, logo3, logo4, logo5];

    const challengeTexts = [
        "How do we develop, motivate & retain our employees?",
        "How do attract the right talent and what do new recruits expect?",
        "How do we create a fair, attractive and employee- friendly working environment?",
        "Which leadership competencies do we need to ensure the success of teams and the organization?",
        "How do we recognize & reward performance, (how do we sanction under- performance)?",
        "Do we need a dedicated HR- role and which competencies does an HR- responsible need?"
    ];
    const expertiseData = {
    title: "Expertise we bring",
    items: [
        {
            heading: "Strategic HR Management",
            description: `Translation of corporate strategy into HR strategy and programs. Establish scope and dimension of the HR function for the respective organization.`
        },
        {
            heading: "Role clarity and job evaluation",
            description: `Building the basis for professional people practices while improving transparency and collaboration.`
        },
        {
            heading: "Compensation and performance management",
            description: `Development of transparent compensation structures and fair, effective instruments for performance management and appraisal.`
        },
        {
            heading: "Recruiting, on-boarding and talent management",
            description:`Design of employer branding, search and selection tools; of onboarding and development processes.`
        }
    ]
};
const supportData = {
    title: "Areas in which we work with you",
    subtitle: "Key elements of work",
    list: [
        "We recognize what the organization and its employees need.",
        "We develop the scope and positioning of HR in a way that fits with the organization.",
        "We reevaluate current HR practices with regards to their effectiveness and impact.",
        "We develop relevant HR instruments and guide their operationalization.",
        "We support you in the development of your leadership team and their understanding of their roles.",
        "We assist HR responsibles who are new in their role.",
        ],
    buttonText: "DOWNLOAD BROCHURE",
    imageSrc: pcm
};
const processData = {
    title: "Our process",
    steps: [
        {
            heading: "Initial consultation & project outline",
            description: "We engage in a thorough discussion to understand your specific needs, goals, timeline, budget, and general project requirements."
        },
        {
            heading: "Organizational Diagnosis",
            description: "We analyze and recognize what the organization and its employees need. We evaluate current HR-practices with regards to their effectiveness and impact."
        },
        {
            heading: "Setting the HR agenda",
            description:"We develop the scope and positioning of HR in a way that fits with the organization and its strategy."
        },
        {
            heading: "Development of the first HR tools",
            description:"We develop relevant HR instruments and guide their oprationalization."
        },
        {
            heading: "Shaping the HR role",
            description:"We facilitate and guide the design of the HR function, its scope and dimension and help shape the right understanding of the HR role in the organization."
        },
        {
            heading: "Support implementation",
            description: "We support HR-responsibles new to their role as well as managers and leaders who take on HR-responsibilities."
        }
    ]
};

const resultsData = {
    title: "Results you will get",
    results: [
        {
            image: "/src/assets/pc/r1.png",
            text: "Development of HR instruments"
        },
        {
            image: "/src/assets/pc/r2.png",
            text: "HR processes"
        },
        {
            image: "/src/assets/pc/r3.png",
            text: "Role descriptions"
        },
        {
            image: "/src/assets/pc/r4.png",
            text: "Development of HR performance indicators"
        }
    ]
};
const headerData = {
    subtitle: "How we can help with",
    title: "People & Culture",
    description: `You will learn how to design and implement effective HR practices and procedures that align with your strategy. We equip you with instruments to effectively manage your employees, improve retention rates, and foster a professional people-oriented work environment. You will learn practical techniques for building a credible employer brand ensuring your organization remains competitive in the market.`,
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
                title="Your challenges are taken care of"
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
            <TestimonialSection/>
            <ProcessSection title={processData.title} steps={processData.steps}/>
          
        </>
    );
}

export default PeopleCulture;
