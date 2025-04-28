import { MapPin, Phone, Mail, PhoneCall } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-12 px-1 md:px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

      <div className="bg-[#e9f1f7] rounded-xl p-4 md:p-10 lg:p-20 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">

        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-around gap-6 mb-6">
            {/* Address */}
            <div className="flex items-center gap-2">
              <MapPin className="text-black w-8 h-8" />
              <div>
                <p className="font-semibold">NO 312 Sea Street, Colombo - 11</p>
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  Open in map
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className="text-black w-8 h-8" />
              <div>
                <p className="font-semibold">+94 774 725 978</p>
                <a href="tel:+94774725978" className="text-blue-500 text-sm hover:underline">
                  Call now
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-around gap-6 mb-6">
            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="text-black w-8 h-8" />
              <div>
                <p className="font-semibold">commani187@gmail.com</p>
                <a href="mailto:commani187@gmail.com" className="text-blue-500 text-sm hover:underline">
                  Send mail
                </a>
              </div>
            </div>

            {/* Landline Phone */}
            <div className="flex items-center gap-2">
              <PhoneCall className="text-black w-8 h-8" />
              <div>
                <p className="font-semibold">011 239 144 6</p>
                <a href="tel:0112391446" className="text-blue-500 text-sm hover:underline">
                  Call now
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-lg mt-6">
            <iframe
              src="https://maps.google.com/maps?q=Colombo%2011&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="120%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-2xl font-bold mb-2">SEND US MESSAGE</h3>
          <p className="text-gray-700 mb-6 text-md">
            Sample text. Click to select the text box. Click again or double click to start editing the text.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="px-4 py-3 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="px-4 py-3 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Enter your message"
              rows="8"
              className="px-4 py-3 rounded-3xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-8 py-2 text-black border border-black rounded-full hover:bg-black hover:text-white transition font-semibold text-sm self-start"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
