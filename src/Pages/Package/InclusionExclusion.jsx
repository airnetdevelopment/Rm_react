import React from "react";

const InclusionExclusion =() =>{

    const inclusions =[
        "Inclusion 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Inclusion 2: Phasellus malesuada nulla nec metus scelerisque interdum.",
        "Inclusion 3: Quisque gravida urna vel magna ultricies, vitae facilisis nisi dignissim."
     
    ];
    
    const exclusions =[
        "Exclusion 1: Mauris vehicula sem at quam tincidunt, eget convallis mauris vestibulum.",
        "Exclusion 2: Fusce vel metus nec eros bibendum eleifend a sit amet enim.",
        "Exclusion 3: Proin vel diam ac sapien venenatis laoreet non ac lectus."
    ];

    return(
        <div className="block w-[50rem] p-3">
            <h2 className="text-lg font-bold text-black text-left">INCLUSIONS/EXCLUSIONS</h2>
            <p>
                <div className="flex flex-col md:flex-row mt-4 text-left border-2 border-gray-200">
                    <div className="w-full md:w-1/2 p-4 flex flex-col">
                        <h3 className="text-md font-semibold text-indigo-900 underline">Inclusions:</h3>
                        <ul className="list-disc list-inside flex-grow">
                            {inclusions.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2 p-4 flex flex-col text-left">
                        <h3 className="text-md font-semibold text-indigo-900 underline">Exclusions:</h3>
                        <ul className="list-disc list-inside flex-grow">
                            {exclusions.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </p>
        </div>
    );


};

export default InclusionExclusion;