import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openSnack = (message, severity = 'success') => setSnack({ open: true, message, severity });
  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnack((s) => ({ ...s, open: false }));
  };

  // Add: helper to copy text and show snackbar
  const copyToClipboard = async (text, label = 'Copied') => {
    try {
      await navigator.clipboard.writeText(text);
      openSnack(`${label} copied to clipboard.`, 'success');
    } catch (err) {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        openSnack(`${label} copied to clipboard.`, 'success');
      } catch {
        openSnack('Copy failed. Please try again.', 'error');
      } finally {
        document.body.removeChild(ta);
      }
    }
  };

  // Define your business phone once (update the number to your actual one)
  const BUSINESS_PHONE = '+91 7756900769';

  // Replace with your deployed Apps Script Web App URL
  const WEB_APP_URL =
    'https://script.google.com/macros/s/AKfycby0R7T2_lSe5qT9vnBTcEMLWuWeC7RND2qNhka-r8XmDzxEHbIeiTtr8ACXFL0Nan7l/exec'
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      openSnack('Please fill all required fields.', 'error');
      setSubmitting(false);
      return;
    }
    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });
      let res = await fetch(WEB_APP_URL, {
        method: 'POST',
        body: formPayload
      });
     
      if (res.ok) {
        openSnack('Thank You, Your request has been received. Our team will connect back with you.', 'success');
        setFormData({ name: '', phone: '', email: '', description: '' });
      } else {
        openSnack('Could not reach Google Sheets. Try again later.', 'warning');
      }
    } catch (e) {
      openSnack('Could not reach Google Sheets. Try again later.', 'warning');
    }
    setSubmitting(false);
  };

  // Copy WhatsApp number to clipboard
  const handleCopyWhatsapp = () => {
    navigator.clipboard.writeText('+91 7756900769');
    openSnack('WhatsApp number copied!', 'success');
  };

  return (
    <div className="w-full overflow-x-hidden p-10">
      <div className="container-box bg-white">
        {/* Page Title */}
        <h1 className="text-center text-2xl font-bold text-orange-400 underline mb-8">
          Contact Us
        </h1>

        {/* Request a Callback */}
        <div className="border border-orange-200 rounded-2xl p-6 mx-auto mb-10">
          <h2 className="text-xl font-bold text-orange-400 underline mb-6">
            Request A CallBack
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border-b border-gray-300 focus:outline-none p-2"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-full border-b border-gray-300 focus:outline-none p-2"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 focus:outline-none p-2"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              rows="4"
              className="w-full border-b border-gray-300 focus:outline-none p-2"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="bg-orange-400 text-white px-6 py-1 rounded-full hover:bg-orange-500 disabled:opacity-60"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* Reach Out To Us */}
        <div className="border border-orange-200 rounded-2xl p-6 mx-auto">
          <h2 className="text-xl font-bold text-orange-400 underline mb-6">
            Reach Out To Us
          </h2>
          <div className="space-y-3 text-lg">
            <p>
              <FaPhoneAlt className="inline text-orange-400 mr-2" />
              Call Us: <a href="tel:+917756900769" className="text-black">+91 7756900769</a>
              <button
                type="button"
                onClick={() => copyToClipboard(BUSINESS_PHONE, 'Phone number')}
                className="p-1 text-gray-600 hover:text-gray-900"
                aria-label="Copy phone number"
                title="Copy phone number"
              >
                <ContentCopyIcon fontSize="small" />
              </button>
            </p>
            <p>
              <FaWhatsapp className="inline text-green-500 mr-2" />
              Whatsapp Us: <a href="https://wa.me/917756900769" className="text-black">+91 7756900769</a>
              <button type="button" onClick={handleCopyWhatsapp} className="ml-2 align-middle" title="Copy WhatsApp number">
                <ContentCopyIcon fontSize="small" className="text-gray-500 hover:text-orange-400" />
              </button>
            </p>
            <p>
              <FaEnvelope className="inline text-orange-400 mr-2" />
              Email Us: <a href="mailto:welltogetherin@gmail.com" className="text-black">welltogetherin@gmail.com</a>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText('welltogetherin@gmail.com');
                  openSnack('Email address copied!', 'success');
                }}
                className="ml-2 align-middle"
                title="Copy Email address"
              >
                <ContentCopyIcon fontSize="small" className="text-gray-500 hover:text-orange-400" />
              </button>
            </p>
          </div>

          {/* Social Media */}
          <div className="mt-6">
            <p className="text-lg mb-3">Social Media</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/welltogetherin" className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
                <FaFacebook className="text-white" />
              </a>
              <a href="https://www.instagram.com/welltogetherin?igsh=MTJvMWNrNTVrMHo3bg==" className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
                <FaInstagram className="text-white" />
              </a>
              <a href="https://www.linkedin.com/company/well-together-in/" className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
                <FaLinkedin className="text-white" />
              </a>
            
            </div>
          </div>
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
      </div>
    </div>
  );
}
