import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen text-white px-24 pt-2 pb-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
          <p className="text-gray-400 mt-4 max-w-3xl text-lg">
            Interested in working together, consulting, or discussing a technical
            leadership opportunity? Let’s connect.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* CONTACT INFO */}
          <div className="space-y-10">

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Get in Touch</h2>
              <p className="text-gray-400 leading-relaxed">
                I’m open to full-time roles, consulting engagements, and
                long-term collaborations involving enterprise systems,
                microservices, and cloud-native solutions.
              </p>
            </div>

            <div className="space-y-6">
              <ContactItem
                icon={<Mail size={22} />}
                label="Email"
                value="shivamdave@example.com"
              />

              <ContactItem
                icon={<Phone size={22} />}
                label="Phone"
                value="+91 9580208231"
              />

              <ContactItem
                icon={<MapPin size={22} />}
                label="Location"
                value="India (Open to Remote & Hybrid)"
              />
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-8">Send a Message</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
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
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800 border border-gray-700 text-blue-400">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

export default Contact;
