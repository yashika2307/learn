import React, { useState, useEffect } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    CircularProgress,
    Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqData from '../data/FAQ_Data.json'

const FAQ = () => {
    const [expanded, setExpanded] = useState(false);
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real application, you might fetch this from an API
        // For now, we're using the imported JSON data
        setFaqs(faqData);
        setLoading(false);
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const accordionStyles = {
        borderRadius: '0.5rem',
        marginBottom: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        '&:before': { display: 'none' },
        overflow: 'hidden',
    };

    const accordionSummaryStyles = {
        background: '#fdf8f3',
        borderBottom: '1px solid #eee',
        '&.Mui-expanded': {
            minHeight: '48px',
        },
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            <h2 className="text-4xl font-semibold text-black text-center mb-12">
                Frequently Asked Questions
            </h2>

            <div className="mx-auto w-[90%]">
                {faqs.map((faq) => (
                    <Accordion
                        key={faq.id}
                        expanded={expanded === `panel${faq.id}`}
                        onChange={handleChange(`panel${faq.id}`)}
                        sx={accordionStyles}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${faq.id}-content`}
                            id={`panel${faq.id}-header`}
                            sx={accordionSummaryStyles}
                        >
                            <Typography className="font-medium text-lg">{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: '16px 24px', background: '#fff' }}>
                            <Typography className="text-gray-600">
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </>
    );
};

export default FAQ;