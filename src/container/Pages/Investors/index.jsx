import React from 'react';

import AllPageHeader from '../../components/AllPageHeader';
import ProcessSection from '../../components/SellingCompanyParts/Process';
import CallToAction from '../../components/SellingCompanyParts/CallToAction';



function Investors() {



const processData = {
    title: "Topics we discuss",
    subtitle:"Mergers & Acquisitions",
  backgroundColor:"#f8f8f8",
    //  buttonText:"Get Started",

    steps: [
        {
            heading: "Finding investors",

            description:"Get prepared to professionally approach investors to accelerate fundraising. Learn how to start fundraising, which documents to prepare and when to share, How to calculate and challenge your company valuation and many more."
        },
        {
            heading: "Financial planning ",
            description: "Need a complete financial plan for investors, banks, and funding agencies? We can help. Our experts will create a clear and concise financial plan that outlines your needs, benchmarks your company’s progress, and adjusts for changes in strategy."
        },
        {
            heading: "Business valuation",
            description:"A well-researched and persuasive business valuation is crucial for successful negotiations. Whether you’re looking for investors, strategic partnerships, new co- founders, or planning to sell your business, we provide expert guidance."
        },
        {
            heading: "Selling a company",
            description:"Considering selling your company? We provide strategic guidance and support, including valuation, identifying potential buyers, legal and financial considerations, due diligence preparation, and exit strategy development."
        },
        {
            heading: "Startup M&A as a Service for Strategic Buyers",
            description:"If your market is consolidating and you’re looking to strategically acquire smaller businesses, we guide you in identifying potential targets, conducting due diligence, negotiating deals, and ensuring effective integration. If you anticipate growth through acquisitions in addition to relying on organic growth, we help you develop a growth strategy, assess potential targets, navigate the acquisition process, and maximize synergies."
        },
          {
            heading: "Negotiation",
            description:"We provide guidance and support for effective negotiation strategies, including understanding the interests of all parties, thorough preparation, compelling proposals, and effective communication tactics. We offer joint briefings and debriefings before major negotiations and can join you where necessary."
        },
     
    ]
};


const headerData = {
    subtitle: "how we can help",
    title: "Investors",
    description: `You need support on your portfolio management or new investments? Startup advisory  has a long history of technology transactions, evaluating, and developing startups. With our deep market knowledge, expert network, and extensive research capabilities, we offer strategic insights, analysis, and development support across various investment sectors. We leverage our expertise to evaluate investment opportunities and assess risk factors, enabling our clients to get an external expert opinion.`,
    buttonText:'Book a Meeting'
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


            <ProcessSection title={processData.title} subtitle={processData.subtitle} buttonText={processData.buttonText} steps={processData.steps}/>
 
                    

          <CallToAction/>
        </>
    );
}

export default Investors;
