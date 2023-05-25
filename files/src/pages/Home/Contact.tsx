const ContactPage = () => {
  return (
    <div className="w-full pt-16 p-8 flex flex-col gap-6 items-center">
      <h1 className="text-4xl md:text-6xl text-slate-950 font-bold text-center">
        Contact Us
      </h1>
      <p className="text-center w-full md:w-3/4 text-lg md:text-xl text-slate-600">
        If you have any questions, feedback, or need assistance, we're here to
        help. Please feel free to get in touch with our support team using the
        contact information provided below:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-5/6 md:w-3/4 mt-8 md:mt-12">
        <div className="p-8 bg-slate-100 flex flex-col gap-3 items-center justify-center rounded">
          <h5 className="text-lg md:text-xl text-slate-800 font-semibold">
            Phone
          </h5>
          <p className="text-base text-slate-600">
            support@securefilevault.com
          </p>
        </div>
        <div className="p-8 bg-slate-100 flex flex-col gap-3 items-center justify-center rounded">
          <h5 className="text-lg md:text-xl text-slate-800 font-semibold">
            Phone
          </h5>
          <p className="text-base text-slate-600">+1-123-456-7890</p>
        </div>
        <div className="p-8 bg-slate-100 flex flex-col gap-3 items-center justify-center rounded">
          <h5 className="text-lg md:text-xl text-slate-800 font-semibold">
            Address
          </h5>
          <p className="text-base text-slate-600">
            123 Main Street, City, State, Zip Code
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
