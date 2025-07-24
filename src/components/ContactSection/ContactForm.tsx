import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xrblpdbw');
  const formRef = useRef<HTMLFormElement>(null);

  const validateFields = (form: HTMLFormElement) => {
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value.trim();

    if (!name || !email || !message) {
      toast.error('Please fill in all the fields.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!validateFields(form)) return;

    const promise = handleSubmit(e);
    toast.promise(promise, {
      loading: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Something went wrong. Please try again.',
    });

    promise.then(() => {
      if (formRef.current) formRef.current.reset();
    });
  };

  return (
    <>
      <Toaster position="top-right" />
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col gap-6 max-w-xl w-full mx-auto items-start text-left"
      >
        <label htmlFor="name" className="text-white text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ovett Mora"
          required
          className="w-full border-b border-white/20 bg-transparent text-white placeholder-white/60 py-3 px-1 focus:outline-none focus:border-primary focus:ring-0 transition-all"
        />
        <label htmlFor="email" className="text-white text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@mail.com"
          required
          className="w-full border-b border-white/20 bg-transparent text-white placeholder-white/60 py-3 px-1 focus:outline-none focus:border-primary focus:ring-0 transition-all"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />
        <label htmlFor="message" className="text-white text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Leave your message here"
          rows={4}
          required
          className="w-full border border-white/20 bg-transparent text-white placeholder-white/60 py-3 px-2 resize-none focus:outline-none focus:border-primary focus:ring-0 transition-all"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />

        <button
          type="submit"
          disabled={state.submitting}
          className={cn(
            "bg-gradient-to-r from-primary to-secondary w-full text-white py-3 px-6 rounded-md hover:scale-105 transition-transform duration-300 disabled:opacity-50  cursor-pointer",
            state.submitting && "cursor-not-allowed"
          )}
        >
          {state.submitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </>
  );
};

export default ContactForm;