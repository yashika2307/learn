import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function BookService() {
    const location = useLocation();
    const [form, setForm] = useState({
        name: '',
        whoFor: 'Myself',
        service: 'Call subscription',
        date: '',
        mobile: '',
        email: '',
        notes: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    // Snackbar state
    const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

    const openSnack = (message, severity = 'success') => setSnack({ open: true, message, severity });
    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnack((s) => ({ ...s, open: false }));
    };

    // Local YYYY-MM-DD for min date
    const todayStr = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .split('T')[0];

    // Replace with your deployed Apps Script Web App URL
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwTVnWyzwIgdm9YGknn78PE4hxrkjfaal0VM-qo9HIUni_vVbXvz1QKLy9jnqovbxat8Q/exec'

    // Prefill service from URL ?service=...
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const svc = params.get('service');
        if (svc) {
            setForm((f) => ({ ...f, service: decodeURIComponent(svc) }));
        }

    }, [location.search]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setError('');
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Required validations
        if (!form.name || !form.whoFor || !form.service || !form.date || !form.mobile || !form.email) {
            const msg = 'Please fill all required fields.';
            setError(msg);
            openSnack(msg, 'error');
            return;
        }
        // Date must be today or future
        if (form.date < todayStr) {
            const msg = 'Please choose today or a future date.';
            setError(msg);
            openSnack(msg, 'error');
            return;
        }
        // Mobile: exactly 10 digits
        if (!/^\d{10}$/.test(form.mobile)) {
            const msg = 'Please enter a valid 10-digit mobile number.';
            setError(msg);
            openSnack(msg, 'error');
            return;
        }
        // Basic email format validation (input type=email also helps)
        if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            const msg = 'Please enter a valid email address.';
            setError(msg);
            openSnack(msg, 'error');
            return;
        }

        // Save locally (existing behavior)
        try {
            const existing = JSON.parse(localStorage.getItem('bookServiceSubmissions') || '[]');
            const entry = {
                ...form,
                id: (crypto && 'randomUUID' in crypto && crypto.randomUUID()) || Date.now(),
                createdAt: new Date().toISOString(),
            };
            localStorage.setItem('bookServiceSubmissions', JSON.stringify([...existing, entry]));
        } catch (e) {
            console.warn('Local save failed:', e);
        }

        // Best-effort send to Google Sheets
        try {
            await fetch(WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(form),
            });
        } catch (e) {
            openSnack('Saved locally. Could not reach Google Sheets.', 'warning');
        }

        setSubmitted(true);
        openSnack('Thanks! Your request has been saved.', 'success');
        setForm({
            name: '',
            whoFor: 'Myself',
            service: 'Call subscription',
            date: '',
            mobile: '',
            email: '',
            notes: '',
        });
    };

    // If URL service value isn't in our fixed list, still show it in the dropdown
    const fixedOptions = ['Call subscription', 'At home companion', 'Emergency Service'];
    const isCustomService = form.service && !fixedOptions.includes(form.service);

    return (
        <section className="w-full bg-white">
            <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 py-10 border border-orange-200 rounded-2xl">
                <h1 className="text-3xl font-bold text-center mb-8">Book Service</h1>

                <form onSubmit={handleSubmit} className="space-y-6">


                    {/* Your Name (required) */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Who is this for (required) */}
                    <div>
                        <label htmlFor="whoFor" className="block text-sm font-medium text-gray-700 mb-1">
                            Who are you looking this service for
                        </label>
                        <select
                            id="whoFor"
                            name="whoFor"
                            value={form.whoFor}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                        >
                            <option>Myself</option>
                            <option>Parents</option>
                            <option>Others</option>
                        </select>
                    </div>

                    {/* What services (required) */}
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                            What services are you looking for
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                        >
                            {isCustomService && <option value={form.service}>{form.service}</option>}
                            {fixedOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* When do you need this service (required, no past dates) */}
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                            When do you need this service
                        </label>
                        <input
                            id="date"
                            name="date"
                            type="date"
                            value={form.date}
                            onChange={handleChange}
                            min={todayStr}
                            required
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>

                    {/* Mobile (required, 10 digits) */}
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                            Mobile Number
                        </label>
                        <input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            inputMode="numeric"
                            pattern="[0-9]{10}"
                            maxLength={10}
                            value={form.mobile}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            placeholder="10-digit number"
                        />
                        <p className="text-xs text-gray-500 mt-1">Enter a 10-digit mobile number.</p>
                    </div>

                    {/* Email (required) */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Notes (optional) */}
                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                            Add notes (optional)
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            rows={4}
                            value={form.notes}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            placeholder="Anything we should know?"
                        />
                    </div>
                    {/* {error && <p className="text-sm text-red-600">{error}</p>}
                    {submitted && !error && (
                        <p className="text-sm text-green-600">Thanks! Your request has been saved.</p>
                    )} */}
                    {/* Submit */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full md:w-auto inline-flex items-center justify-center rounded-md bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 transition-colors"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* Snackbar for error/success */}
            <Snackbar
                open={snack.open}
                autoHideDuration={4000}
                onClose={handleSnackClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackClose} severity={snack.severity} variant="filled" sx={{ width: '100%' }}>
                    {snack.message}
                </Alert>
            </Snackbar>
        </section>
    );
}