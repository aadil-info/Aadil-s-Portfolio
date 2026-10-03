import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail, Send, MapPin, Phone, Copy, Check,
  Sparkles, Loader2, AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import confetti from 'canvas-confetti';

// EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_2gk10t5';
const EMAILJS_TEMPLATE_ID = 'template_o7xiqxn';
const EMAILJS_PUBLIC_KEY = '5iRc5OejXBty7inSZ';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields) {
  const errors = {};

  if (!fields.name || !fields.name.trim()) {
    errors.name = 'Please enter your name.';
  } else if (fields.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!fields.email || !fields.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(fields.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!fields.subject || !fields.subject.trim()) {
    errors.subject = 'Please enter a subject.';
  } else if (fields.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  }

  if (!fields.message || !fields.message.trim()) {
    errors.message = 'Please enter your message.';
  } else if (fields.message.trim().length < 20) {
    errors.message = `Message must be at least 20 characters (${fields.message.trim().length}/20).`;
  }

  return errors;
}

function FieldError({ message }) {
  if (!message) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-1.5 mt-1.5 text-xs font-semibold text-red-500"
    >
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      <span>{message}</span>
    </motion.p>
  );
}

export default function ContactSection({ onOpenResume, onShowToast, preselectedService, onClearService }) {
  const formRef = useRef(null);

  const buildMsg = (svc) =>
    svc
      ? `Hi Aadil, I'm interested in your "${svc.title}" freelance service.\n\n- Scope / Goal:\n- Timeline: ${svc.timeline || 'Flexible'}\n- Budget / Preference:`
      : '';

  const buildSubject = (svc) => (svc ? `Inquiry: ${svc.title}` : '');

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: buildSubject(preselectedService),
    message: buildMsg(preselectedService),
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormState((prev) => ({
        ...prev,
        subject: prev.subject || buildSubject(preselectedService),
        message: buildMsg(preselectedService),
      }));
    }
  }, [preselectedService]);

  const handleChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    setSendError('');
    if (touched[field]) {
      const fieldErrors = validate({ ...formState, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(formState);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aadilmansuri848@gmail.com');
    setCopiedEmail(true);
    if (onShowToast) onShowToast('Email copied: aadilmansuri848@gmail.com');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendError('');

    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);

    const validationErrors = validate(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      if (onShowToast) onShowToast('Please fix the errors before sending.');
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formState.name.trim(),
        from_name: formState.name.trim(),
        email: formState.email.trim(),
        from_email: formState.email.trim(),
        phone: 'Not provided',
        subject: formState.subject.trim(),
        message: formState.message.trim(),
        to_name: 'Aadil',
        reply_to: formState.email.trim(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
      setTouched({});

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore confetti errors
      }

      if (onShowToast) {
        onShowToast('Message sent! Aadil will get back to you soon.');
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      setIsSubmitting(false);
      setSendError(
        'Failed to send message. Please try again or email directly at aadilmansuri848@gmail.com'
      );
      if (onShowToast) {
        onShowToast('Send failed. Please try emailing directly.');
      }
    }
  };

  const getInputClasses = (field) => {
    const base =
      'w-full px-4 py-3 rounded-2xl bg-[#FAFAFC] text-sm text-[#111111] placeholder:text-[#999999] transition-all focus:outline-none focus:ring-2';
    if (touched[field] && errors[field]) {
      return `${base} border border-red-400 focus:border-red-400 focus:ring-red-100 bg-red-50/20`;
    }
    if (touched[field] && !errors[field] && formState[field]) {
      return `${base} border border-emerald-400 focus:border-emerald-400 focus:ring-emerald-50`;
    }
    return `${base} border border-[#E4E4E4] focus:border-[#6D3FEF] focus:ring-[#EEE8FF]`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAFAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEE8FF] text-[#6D3FEF] text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
              Let&apos;s Work <span className="text-[#6D3FEF]">Together.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#666666] mt-3 max-w-xl">
              Whether you have a project in mind, an open role, or just want to connect &mdash; I&apos;m always open to a good conversation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAEAEA] shadow-soft h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-extrabold text-[#111111] mb-6">Contact Information</h3>
                <div className="space-y-5">

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#6D3FEF] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-[#888888] uppercase">Email</div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <a
                          href="mailto:aadilmansuri848@gmail.com"
                          className="text-xs sm:text-sm font-bold text-[#111111] hover:text-[#6D3FEF] transition-colors"
                        >
                          aadilmansuri848@gmail.com
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="p-1 rounded-lg hover:bg-[#F5F3FF] text-[#888888] hover:text-[#6D3FEF] transition-colors"
                          title="Copy email"
                        >
                          {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#6D3FEF] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-[#888888] uppercase">Location</div>
                      <p className="text-xs sm:text-sm font-bold text-[#111111]">Rajasthan, India</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#6D3FEF] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-[#888888] uppercase">Phone</div>
                      <a
                        href="tel:+918955191317"
                        className="text-xs sm:text-sm font-bold text-[#111111] hover:text-[#6D3FEF] transition-colors"
                      >
                        +91 89551 91317
                      </a>
                    </div>
                  </div>

                </div>

              </div>

              {/* Social */}
              <div className="mt-8 pt-6 border-t border-[#F0F0F0] flex items-center justify-between">
                <span className="text-xs font-bold text-[#888888] uppercase tracking-wider">Social Profiles</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/aadil-info"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2.5 rounded-xl bg-[#F5F5F7] hover:bg-[#6D3FEF] text-[#444444] hover:text-white transition-all shadow-xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohammad-aadil-mansuri/?isSelfProfile=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2.5 rounded-xl bg-[#F5F5F7] hover:bg-[#6D3FEF] text-[#444444] hover:text-white transition-all shadow-xs"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/heyy__aadil.__?igsh=ZTNoZG9wb3BpbjA3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-2.5 rounded-xl bg-[#F5F5F7] hover:bg-[#6D3FEF] text-[#444444] hover:text-white transition-all shadow-xs"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#EAEAEA] shadow-soft"
            >
              <div className="mb-6 pb-4 border-b border-[#F0F0F0]">
                <h3 className="text-xl font-extrabold text-[#111111] tracking-tight">Send a Message</h3>
                <p className="text-xs text-[#777777] mt-1">I typically respond within 24 hours.</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#EEE8FF] text-[#6D3FEF] flex items-center justify-center mb-4">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-[#111111] mb-1">Message Sent!</h4>
                  <p className="text-xs text-[#666666] max-w-sm">
                    Thank you for reaching out. Aadil has received your inquiry and will follow up shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-[#6D3FEF] text-white text-xs font-bold hover:bg-[#592BD9] transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>

                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="from_name"
                      placeholder="Enter Your Name"
                      value={formState.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={getInputClasses('name')}
                      autoComplete="name"
                    />
                    <FieldError message={errors.name} />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="from_email"
                      placeholder="Enter Your Email"
                      value={formState.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={getInputClasses('email')}
                      autoComplete="email"
                    />
                    <FieldError message={errors.email} />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder="e.g. Project Inquiry / Job Opportunity"
                      value={formState.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      onBlur={() => handleBlur('subject')}
                      className={getInputClasses('subject')}
                    />
                    <FieldError message={errors.subject} />
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="contact-message" className="block text-xs font-bold text-[#333333] uppercase tracking-wider">
                        Message <span className="text-red-400">*</span>
                      </label>
                      {preselectedService && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEE8FF] text-[#6D3FEF] text-[11px] font-bold">
                          <span>Service: {preselectedService.title}</span>
                          {onClearService && (
                            <button
                              type="button"
                              onClick={onClearService}
                              className="hover:text-[#111111] ml-1 text-xs"
                              title="Clear service prefill"
                            >
                              x
                            </button>
                          )}
                        </span>
                      )}
                    </div>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project, timeline, or open role..."
                      value={formState.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      className={`${getInputClasses('message')} resize-none`}
                    />
                    <div className="flex items-start justify-between">
                      <FieldError message={errors.message} />
                      <span className={`text-[10px] ml-auto mt-1 shrink-0 ${formState.message.length < 20 ? 'text-[#AAAAAA]' : 'text-emerald-500'}`}>
                        {formState.message.length} / 20 min
                      </span>
                    </div>
                  </div>

                  {/* Error Banner */}
                  {sendError && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{sendError}</span>
                    </motion.div>
                  )}

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#6D3FEF] hover:bg-[#592BD9] text-white text-sm font-semibold shadow-soft hover:shadow-soft-lg active:scale-95 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
