import React from 'react';

import om from '/src/assets/org/om.jpg';
import logo1 from '/src/assets/org/Org-Logo1.jpg'
import logo2 from '/src/assets/org/Org-Logo2.png'
import logo3 from '/src/assets/org/Org-Logo3.jpg'
import logo4 from '/src/assets/org/Org-Logo4.jpg'
import logo5 from '/src/assets/org/Org-Logo5.png'

import SupportSelling from '../../components/SellingCompanyParts/SupportSelling';
import AllPageHeader from '../../components/AllPageHeader';
import ChallengesSelling from '../../components/SellingCompanyParts/ChallengesSelling';
import ResultsSection from '../../components/SellingCompanyParts/Results';
import ProcessSection from '../../components/SellingCompanyParts/Process';
import Expertise from '../../components/SellingCompanyParts/Expertise';
import SellingLogo from '../../components/SellingCompanyParts/SellingLogo';
import FeaturesSection from '../../components/SellingCompanyParts/FeaturesSection';
import TestimonialSection from '../../components/SellingCompanyParts/TestimonialSection';



function Organization() {
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
            heading: "Organisational diagnosis",
            description: `Qualitative tools to analyse the strengths and learning areas of the organization.`        },
        {
            heading: "Organisational model",
            description: `Comprehensive view of design elements and scope for action.`
        },
        {
            heading: "Change and transformation",
            description: `Collaborative process design and support.`
        },
        {
            heading: "Learning organisation",
            description:`Identification and development of competences and potentials at individual, team and organisational level.`
        }
    ]
};
const supportData = {
    title: "Areas in which we work with you",
    subtitle: "Key elements of work",
    list: [
        "We work with a holistic organizational model.",
        "We make the organization’s capabilities visible.",
        "We identify opportunities for improvement and cultural & behavioral patterns.",
        "We analyze the organization’s context and relevant stakeholders.",
        "We prioritize & plan interventions in structures, processes, and roles.",
        "We develop and facilitate a roadmap for such interventions.",
        "We support the sustainable implementation in the organization."
    ],
    buttonText: "DOWNLOAD BROCHURE",
    imageSrc: om
};
const processData = {
    title: "Our process for a project with you",
    steps: [
        {
            heading: "Initial consultation & project outline",
            description: "We engage in a thorough discussion to understand your specific growth strategy needs, goals, timeline, budget, and general project requirements."
        },
        {
            heading: "Organizational analysis",
            description: "By looking at the current status of your organization, we make the organization’s capabilities visible. We analzye the organization’s contenxt and relevant stakeholders."
        
        },
        {
            heading: "Develop organizational scenarios",
            description:"Jointly we identify opportunities for improvement and cultural and behavioral patterns."
        },
        {
            heading: "Plan first steps & interventions",
            description:"Plan first steps & interventions"
        },
        {
            heading: "Secure changes take hold in the organization",
            description:"We develop and facilitate a roadmap for such interventions and implement first steps."
        },
        {
            heading: "Implementation support",
            description: "We support the sustainable implementation in the organization over time."
        }
    ]
};

const resultsData = {
    title: "Results you will get",
    results: [
        {
            image: "/src/assets/org/or1.png",
            text: "Qualitative organisational analysis"
        },
        {
            image: "/src/assets/org/or2.png",
            text: "Roadmap of interventions"
        },
        {
            image: "/src/assets/org/or3.png",
            text: "New organisational setup"
        },
        {
            image: "/src/assets/org/or4.png",
            text: "Organizational models"
        }
    ]
};
const headerData = {
    subtitle: "How we can help with",
    title: "Organization",
    description: `We use a holistic approach, that considers all aspects of your organization and work with a comprehensive organizational model. We make your organization’s capabilities, its cultural and behavioural patterns visible and can thus identify opportunities for improvement. Based on our findings, we prioritize and plan interventions in structures, processes, and roles to drive positive change.`,
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
            <FeaturesSection/>
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

export default Organization;
