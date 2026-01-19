import { Mail, Phone, MapPin } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dvwpve7",
        "template_xnh7m55",
        formRef.current,
        "GCZTbsP9-P-gCzqUn"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <div className="min-h-screen text-white px-4 sm:px-8 md:px-16 lg:px-24 pt-6 pb-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <section className="mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Contact</h1>
          <p className="text-gray-400 mt-3 sm:mt-4 max-w-3xl text-base sm:text-lg">
            Interested in working together, consulting, or discussing a technical
            leadership opportunity? Let’s connect.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

          {/* CONTACT INFO */}
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold">Get in Touch</h2>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                I’m open to full-time roles, consulting engagements, and
                long-term collaborations involving enterprise systems,
                microservices, and cloud-native solutions.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <ContactItem icon={<Mail size={20} />} label="Email" value="your@email.com" />
              <ContactItem icon={<Phone size={20} />} label="Phone" value="+91 9580208231" />
              <ContactItem icon={<MapPin size={20} />} label="Location" value="India (Open to Remote & Hybrid)" />
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-5 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 md:mb-8">Send a Message</h2>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm mb-1 sm:mb-2 text-gray-400">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 sm:mb-2 text-gray-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 sm:mb-2 text-gray-400">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gray-800 border border-gray-700 text-blue-400">
      {icon}
    </div>
    <div>
      <p className="text-xs sm:text-sm text-gray-400">{label}</p>
      <p className="text-sm sm:text-base font-medium">{value}</p>
    </div>
  </div>
);

export default Contact;
