'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Send } from 'lucide-react';
import Button from '@/components/ui/Button';

const regions = [
  'Assam',
  'Nagaland',
  'Meghalaya',
  'Manipur',
  'Mizoram',
  'Tripura',
  'Arunachal Pradesh',
  'Other North-East India',
  'Rest of India',
  'International',
];

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  company:  z.string().optional(),
  email:    z.string().email('Please enter a valid email address'),
  phone:    z.string().optional(),
  region:   z.string().min(1, 'Please select your region'),
  message:  z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
      reset();
    } catch {
      setError('Something went wrong. Please try again or email us directly at hello@ulkamgroup.com');
    }
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center gap-4 py-16"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--bg-elevated)] border border-[var(--gold)] flex items-center justify-center">
            <CheckCircle size={28} className="text-[var(--gold)]" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
            Message Received!
          </h3>
          <p className="text-[var(--text-muted)] max-w-md">
            Thank you for reaching out to Ulkam Group. Our team will get back to you within 1–2 business days.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-sm text-[var(--gamosa-red)] underline underline-offset-2 hover:text-ahom-crimson transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                Full Name <span className="text-[var(--gamosa-red)]">*</span>
              </label>
              <input
                {...register('fullName')}
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gamosa-red)] transition-colors"
              />
              {errors.fullName && <p className="mt-1 text-xs text-[var(--gamosa-red)]">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                Company / Organisation
              </label>
              <input
                {...register('company')}
                placeholder="Company name (optional)"
                className="w-full px-4 py-3 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gamosa-red)] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                Email <span className="text-[var(--gamosa-red)]">*</span>
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gamosa-red)] transition-colors"
              />
              {errors.email && <p className="mt-1 text-xs text-[var(--gamosa-red)]">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                Phone
              </label>
              <input
                {...register('phone')}
                type="tel"
                placeholder="+91 98765 43210 (optional)"
                className="w-full px-4 py-3 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gamosa-red)] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
              Region <span className="text-[var(--gamosa-red)]">*</span>
            </label>
            <select
              {...register('region')}
              className="w-full px-4 py-3 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--gamosa-red)] transition-colors"
            >
              <option value="">Select your region</option>
              {regions.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            {errors.region && <p className="mt-1 text-xs text-[var(--gamosa-red)]">{errors.region.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
              Message <span className="text-[var(--gamosa-red)]">*</span>
            </label>
            <textarea
              {...register('message')}
              rows={5}
              placeholder="Tell us about your requirements — bulk order quantities, preferred grades, delivery requirements…"
              className="w-full px-4 py-3 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gamosa-red)] transition-colors resize-none"
            />
            {errors.message && <p className="mt-1 text-xs text-[var(--gamosa-red)]">{errors.message.message}</p>}
          </div>

          {error && (
            <p className="text-sm text-[var(--gamosa-red)] bg-[var(--bg-elevated)] border border-[var(--gamosa-red)]/20 rounded-sm px-4 py-3">
              {error}
            </p>
          )}

          <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full sm:w-auto gap-2">
            <Send size={16} />
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
