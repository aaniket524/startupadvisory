import React from 'react';
import rs1 from '/src/assets/sc_result/rs1.png';
import gcimg from '/src/assets/gs/gs-element.jpg';
import logo1 from '/src/assets/gs/Logo1.jpg'
import logo2 from '/src/assets/gs/Logo2.jpg'
import logo3 from '/src/assets/gs/Logo3.jpg'
import logo4 from '/src/assets/gs/Logo4.jpg'
import logo5 from '/src/assets/gs/Logo5.jpg'
import logo6 from '/src/assets/gs/Logo6.jpg'
import SupportSelling from '../../components/SellingCompanyParts/SupportSelling';
import AllPageHeader from '../../components/AllPageHeader';
import ChallengesSelling from '../../components/SellingCompanyParts/ChallengesSelling';
import ResultsSection from '../../components/SellingCompanyParts/Results';
import ProcessSection from '../../components/SellingCompanyParts/Process';
import Expertise from '../../components/SellingCompanyParts/Expertise';
import SellingLogo from '../../components/SellingCompanyParts/SellingLogo';



function GrowthStrategy() {
    const allLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

    const challengeTexts = [
        "Our sales are stagnating – how can we generate new business growth?",
        "Which expansion strategy should we choose?",
        "How can we reposition our company in a changing environment?",
        "We want to expand internationally. Which markets to enter first?",
        "Which next steps in launching new products shall we include in our business development strategy?"
    ];
    const expertiseData = {
    title: "Expertise we bring",
    items: [
        {
            heading: "ICE Framework",
            description: `We use the ICE scoring model as a springboard for decision making and discussion. This highly flexible qualitative model is suitable for a range of applications.`
        },
        {
            heading: "Defensive, offensive and execution",
            description: `We strive to secure liquidity with defensive strategies, working out new opportunities for growth with offensive strategies, and assess feasibility (execution).`
        },
        {
            heading: "Financial plan template",
            description: `We work with yours or provide our own template financial plan for integrated financial planning that caters to diverse business models.`
        },
        {
            heading: "TAM SAM SOM",
            description: `We use this framework to calculate the market for new growth initiatives. This popular model is also used by investors.`
        }
    ]
};
const supportData = {
    title: "How we work with you in growth strategy",
    subtitle: "Key elements of work",
    list: [
        "We create a framework for our strategic cooperation.",
        "We make your core competencies and assets transparent.",
        "We provide business analysis, including customer groups, use cases, performance, and products.",
        "We analyze trends that impact your business growth and target groups.",
        "We analyze the services provided by other brands in your industry.",
        "We develop your services in line with trends, core competencies, and target groups.",
        "We define other target groups and markets for your core competencies for the business development strategy.",
        "We provide a framework for decision-making to help you focus your strategy.",
        "We develop market opportunities and business cases for various directions.",
        "We prioritize opportunities according to ICE for a clear growth strategy.",
        "We deliver a business development action plan for implementation."
    ],
    buttonText: "DOWNLOAD BROCHURE",
    imageSrc: gcimg
};
const processData = {
    title: "Our process for a project with you",
    steps: [
        {
            heading: "Initial consultation & project outline",
            description: "We engage in a thorough discussion to understand your specific growth strategy needs, goals, timeline, budget, and general project requirements."
        },
        {
            heading: "Evaluation of status",
            description: "Through this interactive session, we will analyze key performance indicators, financial metrics, market positioning, and overall business health. We will also have a look at your goals for the future."
        },
        {
            heading: "Trends and scenarios",
            description: "We jointly analyse trends in the market, relevant to your business, your suppliers, customers, partners, and products to identify the ones that trigger an adaptation of your existing strategy and goals."
        },
        {
            heading: "Business Development Plan and options",
            description: "We jointly analyze different scenarios and options that you have with your company. There might be different strategic directions you can take with your team which will be ranked and prioritized, as well as quantified to get to a strategic plan that fits your criteria and growth targets."
        },
        {
            heading: "Growth Strategy Action plan and new goals",
            description: "Your strategy needs to be not only described but also needs new goals on the time-line and critical strategic building blocks, that need to be implemented. Your final result is strategy documentation including an action plan and new goals for your company."
        },
        {
            heading: "Growth Implementation support",
            description: "The implementation phase involves executing the necessary steps, tasks, and actions to bring the solution to life. We support you with project management and advice."
        }
    ]
};

const resultsData = {
    title: "Results you will get",
    results: [
        {
            image: "/src/assets/gs/img1.png",
            text: "Repositioning, services and target groups"
        },
        {
            image: "/src/assets/gs/img2.png",
            text: "Revised goals"
        },
        {
            image: "/src/assets/gs/img3.png",
            text: "Growth action plan"
        },
        {
            image: "/src/assets/gs/img4.png",
            text: "Financial plan review"
        }
    ]
};
const headerData = {
    subtitle: "How we can help with",
    title: "Growth Stretegy",
    description: `As a growth expert, we understand that charting your business growth strategy is crucial for startups looking to expand internationally. Our business growth consultancy
                specializes in guiding you through the pivotal decisions that shape your company’s 
                future. We work together to assess your current status and refine your expansion 
                strategy, making sure that we allocate resources best. Together, we craft a 
                comprehensive 3-year business development strategy, identifying key strategic building 
                blocks for sustainable growth. Our team of growth specialists is committed to 
                supporting you throughout the implementation process, transforming your vision into 
                tangible business growth. Let us be your partner in navigating the exciting journey of 
                scaling your startup and achieving long-term success.`,
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

export default GrowthStrategy;
