import React from 'react';

import lcm from '/src/assets/lc/lcm.jpg';
import logo1 from '/src/assets/lc/logo1.jpg'
import logo2 from '/src/assets/lc/logo2.jpg'
import logo3 from '/src/assets/lc/logo3.jpg'
import logo4 from '/src/assets/lc/logo4.jpg'
import logo5 from '/src/assets/lc/logo5.jpg'
import r1 from "/src/assets/lc/r1.png";
import r2 from "/src/assets/lc/r2.png";
import r3 from "/src/assets/lc/r3.png";
import r4 from "/src/assets/lc/r4.png";
import SupportSelling from '../../components/SellingCompanyParts/SupportSelling';
import AllPageHeader from '../../components/AllPageHeader';
import ChallengesSelling from '../../components/SellingCompanyParts/ChallengesSelling';
import ResultsSection from '../../components/SellingCompanyParts/Results';
import ProcessSection from '../../components/SellingCompanyParts/Process';
import Expertise from '../../components/SellingCompanyParts/Expertise';
import SellingLogo from '../../components/SellingCompanyParts/SellingLogo';
import TestimonialSection from '../../components/SellingCompanyParts/TestimonialSection';



function LeaderShipChange() {
    const allLogos = [logo1, logo2, logo3, logo4, logo5];

    const challengeTexts = [
        "How do we make our employees embrace change?",
        "How do we prepare our leadership team for future challenges?",
        "How do we align strategy & culture?",
        "How do we bring strategy into the organization?",
        "What makes transformation & change succeed in the long run?",
        "Do we really need: a vision & mission, values, a purpose? How do we develop those?"
    ];
    const expertiseData = {
    title: "Expertise we bring",
    items: [
        {
            heading: "Analysis of the context",
            description: `What external factors influence the organization, its employees and partners?`
        },
        {
            heading: "Principles of leadership",
            description: `Development of leadership models and translation into everyday leadership behaviours and practises.`
        },
        {
            heading: "Change and transformation",
            description: `Collaborative process design and support.`
        },
        {
            heading: "Learning organization",
            description:`Identification and development of competences and potentials on individual, team and organizational level.`
        }
    ]
};
const supportData = {
    title: "Areas in which we work with you",
    subtitle: "Key elements of work",
    list: [
        "We employ a holistic model of organizations.",
        "We recognize what creates the push for change.",
        "We understand and utilize interconnections and dependencies.",
        "We take into account multiple perspectives.",
        "We pull the most impactful levers.",
        "We emphasize the role of leadership in change.",
        "We deploy interventions, analyze their effects and impact, and learn from them.",
        "We utilize a diverse toolbox.",
        "We ensure the sustainable success of transformative efforts."
        ],
    buttonText: "DOWNLOAD BROCHURE",
    imageSrc: lcm
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
            description: "We analyze your organization with the help holistic model and identify the drivers and obstacles of change and development."
        },
        {
            heading: "Developing a shared image of the future",
            description:"We craft an attractive sustainable scenario of the future organization and identify the most effective levers of change."
        },
        {
            heading: "Define a roadmap and measures",
            description:"We define a roadmap to deploy interventions by using a diverse toolbox."
        },
        {
            heading: "Develop a communication plan",
            description:"We elaborate a communication plan for the change in the organisation."
        },
        {
            heading: "Support implementation",
            description: "We facilitate and support the implementation of change measures and together we evaluate their effectiveness towards goal achievement."
        }
    ]
};

const resultsData = {
    title: "Results you will get",
    results: [
        {
            image: r1,
            text: "Organisational analysis"
        },
        {
            image: r2,
            text: "Leadership principles"
        },
        {
            image: r3,
            text: "Roadmaps"
        },
        {
            image: r4,
            text: "Communication plan"
        }
    ]
};
const headerData = {
    subtitle: "How we can help with",
    title: "Leadership and change",
    description: `First-time leaders as well as seasoned managers and executives are faced with ever- changing demands and growing expectations. Startup advisory  experts will offer a holistic view on leadership which pays tribute to this increasing complexity and provides insights into the critical role of leadership in driving performance, promoting innovation and leading change.`,
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

export default LeaderShipChange;
