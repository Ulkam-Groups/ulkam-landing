'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import GamosaAccent from '@/components/ui/GamosaAccent';

const commentSchema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Please enter a valid email'),
  comment: z.string().min(10, 'Comment must be at least 10 characters'),
});

type CommentForm = z.infer<typeof commentSchema>;

interface CommentsSectionProps {
  postSlug: string;
}

export default function CommentsSection({ postSlug }: CommentsSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<CommentForm>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = async (data: CommentForm) => {
    setError('');
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, postSlug }),
      });
      if (!res.ok) throw new Error('Failed to submit comment');
      setSubmitted(true);
      reset();
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="mt-16 pt-12 border-t border-[var(--border-subtle)]">
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle size={20} className="text-[var(--gamosa-red)]" />
        <h2 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
          Leave a Comment
        </h2>
      </div>
      <GamosaAccent className="mb-8" />

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-sm"
          >
            <CheckCircle size={20} className="text-[var(--gold)]" />
            <div>
              <p className="font-medium text-[var(--text-primary)]">Thank you for your comment!</p>
              <p className="text-sm text-[var(--text-muted)]">Your comment is under review and will be published soon.</p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                  Name <span className="text-[var(--gamosa-red)]">*</span>
                </label>
                <input
                  {...register('name')}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gamosa-red)] transition-colors"
                />
                {errors.name && <p className="mt-1 text-xs text-[var(--gamosa-red)]">{errors.name.message}</p>}
              </div>
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
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                Comment <span className="text-[var(--gamosa-red)]">*</span>
              </label>
              <textarea
                {...register('comment')}
                rows={4}
                placeholder="Share your thoughts..."
                className="w-full px-4 py-3 bg-[var(--bg-base)] border border-[var(--border-default)] rounded-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gamosa-red)] transition-colors resize-none"
              />
              {errors.comment && <p className="mt-1 text-xs text-[var(--gamosa-red)]">{errors.comment.message}</p>}
            </div>

            {error && <p className="text-sm text-[var(--gamosa-red)]">{error}</p>}

            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting…' : 'Post Comment'}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
}
