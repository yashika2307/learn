import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const ServicesSection = ({ services }) => {
    return (
        <section className="bg-mygrey py-10">
            <div className="text-center mb-8 container-box">
                <h1 className="text-4xl font-semibold text-black mb-8">Our Services</h1>
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;