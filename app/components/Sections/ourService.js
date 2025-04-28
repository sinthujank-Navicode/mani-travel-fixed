export default function Services() {
    const services = [
      {
        title: "Visa Consulting",
        description:
          "Get expert visa advice, document preparation, interview guidance, and professional assistance for success.",
      },
      {
        title: "All Online Appointments",
        description:
          "Book visa, passport, medical, and travel appointments easily with online scheduling.",
      },
      {
        title: "Airport Transportation",
        description:
          "Book visa, passport, medical, and travel appointments easily with online scheduling.",
      },
      {
        title: "Travel Insurance And Itinerary",
        description:
          "Get travel insurance for health, cancellations, and baggage loss, and personalized itineraries.",
      },
      {
        title: "Translation ( English, Dutch )",
        description:
          "Get professional translation for travel documents, visas, and communications in English, Dutch.",
      },
      {
        title: "Legal Document Support",
        description:
          "Assistance with legal documents related to immigration, travel, and consular services.",
      },
      {
        title: "Embassy Appointment Booking",
        description:
          "Get help booking embassy appointments and understanding visa application procedures.",
      },
      {
        title: "Document Courier Service",
        description:
          "Fast and secure document pickup and delivery service for visa or legal documents.",
      },
    ];
  
    return (
      <section className="bg-white py-10 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Our Services
        </h2>
  
        {/* Scrollable Row with Hidden Scrollbars */}
        <div className="overflow-x-auto overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] no-scrollbar mb-4 mt-4 inset-0">
          <div className="flex gap-4 w-[2000px]">
            {services.map((service, index) => (
              <div
                key={index} // Add a key prop here
                className="bg-[#d8e6ef] w-[250px] rounded-3xl shadow-xl flex-shrink-0 transform transition-transform duration-200 "
              >
                <div className="bg-[#739bc2] p-6 text-white flex flex-col items-center justify-center min-h-[160px] rounded-t-3xl">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="font-semibold text-center">{service.title}</h3>
                </div>
                <div className="p-4 text-sm text-gray-700 min-h-[120px] rounded-b-3xl">
                  {service.description}
                </div>
                <div className="p-4">
                  <button className="w-full border border-black rounded-full py-1 hover:bg-black hover:text-white transition-all duration-200">
                    Get in Touch
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }