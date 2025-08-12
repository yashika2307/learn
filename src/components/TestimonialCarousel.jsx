import React, { useState, useEffect, useRef } from 'react';
import { Rating } from '@mui/material';
import testimonialData from '../data/testimonials.json';

const TestimonialCarousel = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const carouselRef = useRef(null);

    // Load testimonials
    useEffect(() => {
        setTestimonials(testimonialData);
    }, []);

    // Transition lock
    useEffect(() => {
        if (!isTransitioning) return;
        const t = setTimeout(() => setIsTransitioning(false), 500);
        return () => clearTimeout(t);
    }, [isTransitioning]);

    const maxIndex = Math.max(0, testimonials.length - 1);

    const handlePrev = () => {
        if (isTransitioning || currentIndex === 0) return;
        setIsTransitioning(true);
        setCurrentIndex((i) => i - 1);
    };

    const handleNext = () => {
        if (isTransitioning || currentIndex >= maxIndex) return;
        setIsTransitioning(true);
        setCurrentIndex((i) => i + 1);
    };

    // Auto-scroll
    useEffect(() => {
        const id = setInterval(() => {
            setCurrentIndex((i) => (i < maxIndex ? i + 1 : 0));
        }, 5000);
        return () => clearInterval(id);
    }, [maxIndex]);

    const capitalizeWords = (str = '') =>
        str
            .split(' ')
            .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ''))
            .join(' ');

    const truncateText = (text = '', limit = 400) =>
        text.length > limit ? `${text.substring(0, limit)}...` : text;

    return (
        <div className="relative w-full overflow-hidden" ref={carouselRef}>
            {/* Track */}
            <div
                className="grid grid-flow-col auto-cols-[100%] transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {testimonials.map((t, idx) => (
                    <div key={idx} className="w-full">
                        <div className="mx-auto w-[90%] md:w-[80%] h-full bg-[#fdf8f3] rounded-2xl p-6 shadow-md border border-gray-100 transition-all hover:shadow-lg duration-300">
                            {/* Quote Icon */}
                            <div className="relative mb-4">
                                <svg
                                    className="text-[#e6a067] opacity-20 w-10 h-10"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Text */}
                            <div className="mb-4">
                                <p className="text-gray-600 italic text-sm">
                                    "{truncateText(t.comment || t.text)}"
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                                    {t.avatar ? (
                                        <img
                                            src={t.avatar}
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
                                    <p className="text-xs text-gray-500">
                                        <span className="font-bold">Service: </span>
                                        {capitalizeWords(t.service)}
                                    </p>
                                    <div className="flex mt-1">
                                        <Rating value={t.rating || 5} readOnly precision={0.5} size="small" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls - kept inside bounds to avoid page overflow */}
            <button
                onClick={handlePrev}
                disabled={isTransitioning || currentIndex === 0}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 shadow-md flex items-center justify-center hover:bg-[#edc6aa] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
                aria-label="Previous testimonials"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={handleNext}
                disabled={isTransitioning || currentIndex >= maxIndex}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 shadow-md flex items-center justify-center hover:bg-[#edc6aa] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
                aria-label="Next testimonials"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default TestimonialCarousel;