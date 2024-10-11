import React from 'react';
import ContactInfo from '../components/contact/ContactInfo';

function Contact() {
  return (
    <>
      {/* Main Container */}
      <div className="min-h-screen mx-auto p-4 justify-center items-center flex flex-col">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4">Contact</h1>

        {/* Working Hours */}
        <p className="text-center text-lg font-semibold mb-6">
          WORKING HOURS: Monday to Saturday from 9 AM to 1 PM and 4 PM to 8 PM
        </p>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center my-8">
          {/* WhatsApp */}
          <ContactInfo title="WhatsApp" info="+91 1234567890" />

          {/* Phone */}
          <ContactInfo title="Phone" info="+91 1234567890" />

          {/* Email */}
          <ContactInfo title="Email" info="@example.com" />
          

          {/* Address */}
          <ContactInfo
            title="Address"
            info="123, Example Street, City, State, Country - 123456" />
        </div>

      </div>
    </>
  );
}

export default Contact;
