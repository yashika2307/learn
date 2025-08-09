import React, { useState, useEffect, useRef } from 'react';
import testimonialData from '../data/testimonials.json';

const TestimonialCarousel = ({ itemsPerSlide = 2 }) => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const slideContainerRef = useRef(null);
    const carouselRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // Responsive settings
    const getItemsToShow = () => {
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth < 1024) return Math.min(2, itemsPerSlide);
        return itemsPerSlide;
    };

    const [itemsToShow, setItemsToShow] = useState(getItemsToShow());

    useEffect(() => {
        setTestimonials(testimonialData);

        // Handle window resize for responsiveness
        const handleResize = () => {
            setItemsToShow(getItemsToShow());
        };

        // Add a scroll event listener to update the current page
        const handleScroll = () => {
            if (!slideContainerRef.current || !carouselRef.current) return;

            const scrollPosition = slideContainerRef.current.scrollLeft;
            const containerWidth = carouselRef.current.clientWidth;
            const maxScroll = slideContainerRef.current.scrollWidth - containerWidth;

            // Special case for the last page
            if (maxScroll - scrollPosition < 10) {
                setCurrentPage(getPageCount() - 1);
                return;
            }

            // Normal case - calculate the page based on scroll position
            const page = Math.round(scrollPosition / containerWidth);
            setCurrentPage(page);
        };

        window.addEventListener('resize', handleResize);
        // Initialize correctly on mount
        handleResize();

        if (slideContainerRef.current) {
            slideContainerRef.current.addEventListener('scroll', handleScroll);
            // Initialize scroll position on mount
            handleScroll();
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            if (slideContainerRef.current) {
                slideContainerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        // Force a re-render after the component mounts to ensure refs are populated
        const timer = setTimeout(() => {
            setIsTransitioning(false); // Reset any transition state

            // Force a re-evaluation of button disabled states
            if (slideContainerRef.current && carouselRef.current) {
                // Calculate if we have enough testimonials to enable next button
                const totalSlides = testimonials.length;
                const totalVisibleSlides = itemsToShow;

                // We need to set this explicitly to 0 to ensure the next button is enabled
                // if there are more slides than what can be shown at once
                if (totalSlides > totalVisibleSlides) {
                    setCurrentPage(0);
                }

                // Ensure smooth scrolling behavior is set
                slideContainerRef.current.style.scrollBehavior = 'smooth';
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [testimonials, itemsToShow]);

    // Calculate total pages based on testimonials length and items to show
    const totalPages = Math.max(1, Math.ceil(testimonials.length / itemsToShow));

    // Check if next button should be enabled
    const isNextDisabled = currentPage >= totalPages - 1;

    // Update handleNext and handlePrevious functions to use smooth scrolling
    const handleNext = () => {
        if (slideContainerRef.current && !isTransitioning) {
            setIsTransitioning(true);
            const containerWidth = slideContainerRef.current.clientWidth;
            slideContainerRef.current.scrollBy({
                left: containerWidth,
                behavior: 'smooth'
            });
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    const handlePrevious = () => {
        if (slideContainerRef.current && !isTransitioning) {
            setIsTransitioning(true);
            const containerWidth = slideContainerRef.current.clientWidth;
            slideContainerRef.current.scrollBy({
                left: -containerWidth,
                behavior: 'smooth'
            });
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    // Calculate number of pages for dot navigation
    const getPageCount = () => {
        return Math.ceil(testimonials.length / itemsToShow);
    };

    // Handle dot navigation
    const goToPage = (pageIndex) => {
        if (isTransitioning || !slideContainerRef.current || !carouselRef.current) return;

        const carouselWidth = carouselRef.current.clientWidth;
        const newScrollLeft = pageIndex * carouselWidth;

        setIsTransitioning(true);

        slideContainerRef.current.style.scrollBehavior = 'smooth';
        slideContainerRef.current.scrollLeft = newScrollLeft;

        setTimeout(() => {
            setCurrentIndex(pageIndex * itemsToShow);
            setCurrentPage(pageIndex);
            setIsTransitioning(false);
        }, 500);
    };

    // Calculate which page we're currently on more accurately
    const getCurrentPage = () => {
        if (!slideContainerRef.current || !carouselRef.current) return 0;

        // Calculate based on scroll position
        const scrollPosition = slideContainerRef.current.scrollLeft;
        const itemWidth = carouselRef.current.clientWidth / itemsToShow;
        const itemsScrolled = Math.round(scrollPosition / itemWidth);

        // Complete rewrite of the page calculation logic
        const maxScrollPosition = slideContainerRef.current.scrollWidth - slideContainerRef.current.clientWidth;

        // Check if we're at the very end of the scroll
        if (Math.abs(scrollPosition - maxScrollPosition) < 10) {
            return totalPages - 1; // Last page
        }

        // Calculate page number based on scroll percentage
        const scrollPercentage = scrollPosition / maxScrollPosition;
        const estimatedPage = Math.round(scrollPercentage * (totalPages - 1));

        // Ensure the page is within bounds
        return Math.max(0, Math.min(estimatedPage, totalPages - 1));
    };

    // Add this effect to update the active dot based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (!slideContainerRef.current) return;

            const scrollLeft = slideContainerRef.current.scrollLeft;
            const containerWidth = slideContainerRef.current.clientWidth;
            const scrollWidth = slideContainerRef.current.scrollWidth;

            // Calculate which page we're on based on scroll position
            const totalSlides = Math.ceil(scrollWidth / containerWidth);
            const currentIndex = Math.round((scrollLeft / (scrollWidth - containerWidth)) * (totalSlides - 1));

            setActiveIndex(currentIndex);
        };

        const container = slideContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section className="py-2 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold text-center mb-12">
                    What Our Clients Say
                </h2>

                <div className="relative max-w-6xl mx-auto">
                    {/* FIX: Use native scroll container instead of transform */}
                    <div
                        ref={carouselRef}
                        className="overflow-hidden"
                    >
                        <div
                            ref={slideContainerRef}
                            className="flex snap-x snap-mandatory"
                            style={{
                                overflowX: 'hidden',
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className={`flex-shrink-0 p-3 snap-start`}
                                    style={{ width: `${100 / itemsToShow}%` }}
                                >
                                    <div className="h-full bg-[#fdf8f3] rounded-2xl p-6 shadow-md border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
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

                                        {/* Testimonial Content */}
                                        <div className="h-32 overflow-hidden mb-4">
                                            <p className="text-gray-600 italic text-sm">"{testimonial.comment}"</p>
                                        </div>

                                        {/* Author Information */}
                                        <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                                            <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.author}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                                <p className="text-xs text-gray-500">{testimonial.role}</p>
                                                <div className="flex mt-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'
                                                                }`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrevious}
                        disabled={isTransitioning || (slideContainerRef.current && slideContainerRef.current.scrollLeft === 0)}
                        className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center hover:bg-[#edc6aa] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
                        aria-label="Previous testimonials"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={
                            isTransitioning ||
                            (slideContainerRef.current &&
                                carouselRef.current &&
                                // Check if we've reached the end (with a small buffer for rounding errors)
                                Math.abs(
                                    slideContainerRef.current.scrollLeft -
                                    (slideContainerRef.current.scrollWidth - carouselRef.current.clientWidth)
                                ) < 5)
                        }
                        className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center hover:bg-[#edc6aa] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
                        aria-label="Next testimonials"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(testimonials.length / itemsPerSlide) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (slideContainerRef.current && !isTransitioning) {
                                    setIsTransitioning(true);
                                    const containerWidth = slideContainerRef.current.clientWidth;
                                    slideContainerRef.current.scrollTo({
                                        left: index * containerWidth,
                                        behavior: 'smooth'
                                    });
                                    setActiveIndex(index);
                                    setTimeout(() => setIsTransitioning(false), 500);
                                }
                            }}
                            className={`h-3 w-3 mx-1 rounded-full focus:outline-none ${activeIndex === index ? 'bg-[#edc6aa]' : 'bg-gray-300'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;