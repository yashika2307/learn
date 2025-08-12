import React from 'react';

const WhyUsCard = ({ icon: Icon, customIcon, title, description, iconPadding = "p-3" }) => {
    return (
        <div className="bg-white rounded-[2rem] w-80 min-h-[18rem] shadow-md p-6 text-center flex flex-col justify-start">
            <div className={`mx-auto mb-4 w-16 h-16 rounded-full bg-[#edc6aa] border border-black-500 ${iconPadding}`}>
                {Icon && <Icon className="w-full h-full" strokeWidth={1} />}
                {customIcon && customIcon}
            </div>
            <h3 className="text-xl font-medium mb-2 border-b pb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed break-words">
                {description.map((item, index) => (
                    <React.Fragment key={index}>
                        {item}<br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    );
};

export default WhyUsCard;