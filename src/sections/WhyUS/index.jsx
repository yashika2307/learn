import React from 'react';
import WhyUsCard from '../../components/WhyUSCard';
import { HiOutlineShieldCheck, HiOutlineClock, HiOutlineUserGroup } from 'react-icons/hi';
import { FaUserGraduate } from 'react-icons/fa';
// Import your image assets
import iconEmergency from '../../assets/iconEmergency.svg'; // Update path as needed
import IconFeedback from '../../assets/IconFeedback.svg'; // Update path as needed

const WhyUsSection = () => {
    const whyUsCards = [
        {
            icon: HiOutlineShieldCheck,
            title: "Triple Layer Security",
            description: [
                "Police Verification",
                "Physical Home Verification",
                "Social Media Background Check"
            ]
        },
        {
            icon: HiOutlineClock,
            title: "No Commitments",
            description: [
                "No Long-term Contracts",
                "Pay-as-you-go Service",
                "Flexible Scheduling"
            ]
        },
        {
            icon: HiOutlineUserGroup,
            title: "Verified Professionals",
            description: [
                "Thoroughly Vetted Staff",
                "Experienced Personnel",
                "Regular Quality Assessments"
            ]
        },
        {
            customIcon: <FaUserGraduate className="w-full h-full" stroke="#111" strokeWidth="25" fill="transparent" style={{ color: 'transparent' }} />,
            title: "Educated Care Givers",
            description: [
                "Because care requires understanding.",
                "Our caregivers are not just trained,",
                "they're educated, empathetic & truly connected to your needs."
            ],
            iconPadding: "p-4"
        },
        {
            customIcon: <img src={iconEmergency} alt="Emergency Icon" className="w-full h-auto" />,
            title: "Emergency Assistance",
            description: [
                "No more dependency in emergency.",
                "Ambulance and caretaker",
                "just a call away"
            ],
            iconPadding: "p-[0.8rem]"
        },
        {
            customIcon: <img src={IconFeedback} alt="Feedback Icon" className="w-full h-auto" />,
            title: "Honest Reviews",
            description: [
                "Caregiver choose karne ka right aapka hai.",
                "Har service ke baad feedback paiye,",
                "aapke experience se hi hum behtar hote hain.",
            ],
            iconPadding: "p-3.5"
        }
    ];

    return (
        <section className="bg-[#fdf8f3] py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch">
                    {whyUsCards.map((card, index) => (
                        <div key={index} className="w-full h-full">
                            <WhyUsCard
                                icon={card.icon}
                                customIcon={card.customIcon}
                                title={card.title}
                                description={card.description}
                                iconPadding={card.iconPadding}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;