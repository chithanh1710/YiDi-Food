import { useStoreContext } from "../../context/StoreContext";

export default function Contact() {
  const context = useStoreContext();
  if (!context) return null;
  const { contactRef } = context;
  return (
    <div ref={contactRef} className="contact-us mt-20 lg:p-24 p-12 rounded-2xl">
      <div className="h-full lg:p-12 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-[40%]">
            <h2 className="text-[max(3.5vw,30px)] text-[tomato] font-bold">
              Contact Us
            </h2>
            <form className="flex flex-col gap-4 my-6">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-[20px]" htmlFor="name">
                  Name
                </label>
                <input
                  className="outline-none text-gray-400"
                  type="text"
                  id="name"
                  placeholder="Chi Thanh"
                />
                <hr />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-[20px]" htmlFor="email">
                  Email
                </label>
                <input
                  className="outline-none text-gray-400"
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                />
                <hr />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-[20px]" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="outline-none text-gray-400"
                  type="tel"
                  id="phone"
                  placeholder="XXX-XXX-XXXX"
                />
                <hr />
              </div>
            </form>
          </div>
          <div className="md:w-[60%] flex flex-col md:border-l-2 border-black md:ml-8 md:pl-8">
            <label className="font-semibold text-[20px]" htmlFor="text">
              Message
            </label>
            <textarea
              className="outline-none text-gray-400 md:h-full"
              name="text"
              id="text"
              style={{ resize: "none" }}
              cols={30}
              rows={5}
              placeholder="Write text here..."
            ></textarea>
            <button className="self-end mt-4 px-8 py-2 text-lg font-medium rounded-md bg-[tomato] text-white transition-all duration-300 hover:bg-red-600">
              Summit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
