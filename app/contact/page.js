import React from "react";

export default function page() {
  return (
    <div className=" flex flex-col items-center  bg-[#F9F8FB]">
      <span className="text-4xl font-semibold text-[#04155f] mt-8 mb-3 tracking-wider">
        Precision Care starts with a conversation
      </span>
      <span>
        Connect with our world-class medical specialists, clinical researchers,
        and support staff to begin your journey toward personalized clinical
        excellence.
      </span>

      <div className=" w-[90%] mt-16 flex flex-wrap gap-20 justify-center mb-24">
        <div className=" flex flex-col w-1/3 py-6 px-6 rounded-2xl shadow-[1px_1px_30px_#87967533]">
          <span className="font-semibold tracking-wide mb-2.5">
            Patient Inquiry
          </span>
          <span className="text-sm font-light">
            Fill out the secure form below and a representative will respond
            within 2 business hours.
          </span>

          <form className="my-6 flex flex-col gap-3">
            <span className="flex flex-col gap-1.5">
              <lable>Full Name</lable>
              <input
                type="text"
                placeholder="Dr Rajesh Sharma"
                className="bg-gray-200 px-3 py-2 rounded-lg outline-0"
              />
            </span>
            <span className="flex flex-col gap-1.5">
              <lable>Email</lable>
              <input
                type="text"
                placeholder="info@carehospital.com"
                className="bg-gray-200 px-3 py-2 rounded-lg outline-0"
              />
            </span>
            <span className="flex flex-col gap-1.5">
              <lable>Detailed Message</lable>
              <textarea
                type="text"
                placeholder="How can we help you"
                className="bg-gray-200 px-3 py-2 rounded-lg outline-0"
              />
            </span>
          </form>
          <button className="font-semibold text-sm flex gap-1 items-center border border-black p-2 rounded-3xl justify-center">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
