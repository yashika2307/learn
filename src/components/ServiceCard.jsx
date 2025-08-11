import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    return (
        <div className="relative bg-white rounded-lg shadow-md w-full max-w-sm overflow-hidden flex flex-col mx-auto">
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
            />
            {service.comingSoon && (
                <div className="absolute inset-0 bg-[#6a6161e3] flex items-center justify-center">
                    <span className="text-white text-lg font-bold">Coming Soon</span>
                </div>
            )}
            <div className="p-4 flex-grow flex flex-col justify-between">
                <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
                <p className="text-sm text-center text-gray-600">{service.description}</p>
                <div className="mt-4 flex justify-center">
                    <Link
                        to={{ pathname: '/BookService', search: `?service=${encodeURIComponent(service.title)}` }}
                        className="inline-flex items-center justify-center rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;