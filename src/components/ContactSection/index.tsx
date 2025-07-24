import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-background-secondary via-gray-800 to-background min-h-screen py-24 px-4 relative"
    >
      <div className="container max-w-5xl mx-auto">
        <ContactHeader />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;