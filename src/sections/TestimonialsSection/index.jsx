import React, { useEffect, useState } from 'react';
import testimonialsData from '../../data/testimonials.json';
import Testimonial_Shubham from '../../assets/Testimonial_Shubham.jpeg';
import Testimonial_Pushpak from '../../assets/Testimonial_Pushpak.jpeg';
const TestimonialsSection = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTestimonials(testimonialsData || []);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - 1);

    const prev = () => setIndex((i) => (i > 0 ? i - 1 : i));
    const next = () => setIndex((i) => (i < maxIndex ? i + 1 : i));

    const capitalizeWords = (str = '') =>
        str
            .split(' ')
            .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ''))
            .join(' ');

    return (
        <section className="bg-white py-12 w-full overflow-x-hidden">
            <div className="container-box mx-auto px-4 lg:px-8 max-w-7xl">
                <h2 className="text-4xl font-bold text-center mb-10">What Our Customers Say</h2>

                {testimonials.length > 0 && (
                    <div className="relative overflow-hidden mx-auto w-full max-w-[90vw] md:max-w-[80%]">
                        {/* Track: one full-width slide per view */}
                        <div
                            className="flex items-stretch transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${index * 100}%)` }}
                            role="region"
                            aria-label="Testimonials carousel"
                        >
                            {testimonials.map((t, i) => (
                                <div key={i} className="w-full shrink-0 flex">
                                    <article className="w-full bg-[#fdf8f3] rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col">
                                        {/* Quote Icon */}
                                        <div className="mb-4">
                                            <svg
                                                className="text-[#e6a067] opacity-20 w-10 h-10"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>

                                        {/* Review text (auto height; no clipping) */}
                                        <p className="text-gray-700 italic">
                                            {t.comment || t.text}
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center mt-6 pt-4 border-t border-gray-200">
                                            <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                                                {t.avatar ? (
                                                    <img
                                                        src={Testimonial_Shubham}
                                                        alt={t.author}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="h-full w-full bg-[#edc6aa] flex items-center justify-center">
                                                        <span className="text-white text-lg font-bold">
                                                            {t.author?.charAt(0)}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">{t.author}</p>
                                                {(t.role || t.service) && (
                                                    <p className="text-xs text-gray-500">
                                                        {capitalizeWords(t.role || t.service)}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>

                        {/* Controls kept inside wrapper */}
                        <button
                            onClick={prev}
                            disabled={index === 0}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-9 h-9 shadow-md flex items-center justify-center hover:bg-[#edc6aa] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
                            aria-label="Previous testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={next}
                            disabled={index === maxIndex}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-9 h-9 shadow-md flex items-center justify-center hover:bg-[#edc6aa] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
                            aria-label="Next testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TestimonialsSection;