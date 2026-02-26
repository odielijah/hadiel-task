import { personalDetails } from "../data/enrolmentForm";
import { FileImage } from "../assets/icons/FileImage";
import { ArrowDown } from "../assets/icons/ArrowDown";
import { useState, useRef } from "react";

export default function Enrolment() {
  const fileInputRef = useRef(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const [activeButton, setActiveButton] = useState("individual");
  const [values, setValues] = useState({
    photo: null,
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    dob: "",
    gender: "",
    plan: "",
    address: "",
  });

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log(values);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 4000);
  };

  // Functions for the image input
  const handleBoxClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValues({ ...values, photo: file });
      console.log("File selected:", file.name);
    }
  };

  return (
    <section className="lg:p-8 p-4 overflow-y-auto lato-regular">
      {/* Notification */}
      {isSuccess && (
        <div className="fixed lato-regular top-8 md:top-10 left-1/2 -translate-x-1/2 z-50 w-full mx-auto max-w-[270px]">
          <div className="bg-[#2D767F] text-white px-4 py-4 rounded-2xl shadow-2xl flex justify-center lg:justify-start items-center gap-4 border border-white/20 backdrop-blur-md">
            <div className="text-[14px]">
              <p>We have received your form.</p>
              <p>Check your details in the console.</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 min-h-[500px]">
        <div className="flex text-sm gap-3 mb-5">
          {["individual", "group"].map((id) => {
            const isActive = activeButton === id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveButton(id)}
                style={{
                  backgroundColor: isActive ? "#2d767f" : "white",
                  color: isActive ? "white" : "black",
                }}
                className="py-2 px-4 rounded-lg cursor-pointer border border-gray-100 transition-colors duration-200"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            );
          })}
        </div>
        {activeButton === "individual" ? (
          <div>
            <h2 className="text-xl font-bold text-gray-700 mb-6">
              Personal Details
            </h2>
            <hr className="mb-8 border-gray-300" />

            <div>
              <form
                className="mt-8"
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="mb-8">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Profile Photo
                  </p>

                  {/* 1. Hidden Real Input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*"
                  />

                  {/* 2. Visual Box */}
                  <div
                    onClick={handleBoxClick}
                    className="w-full max-w-md border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50/50 cursor-pointer hover:border-[#2D767F] transition-colors group"
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center text-gray-400 group-hover:text-[#2D767F]">
                      <FileImage />
                    </div>
                    <p className="text-sm text-gray-500">
                      <span className="font-bold text-gray-700">
                        {values.photo ? values.photo.name : "Click to upload"}
                      </span>{" "}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                  {personalDetails.map((detail) => (
                    <div key={detail.id} className="flex flex-col gap-2">
                      <label
                        className="text-sm font-semibold text-gray-700 capitalize"
                        htmlFor={detail.id}
                      >
                        {detail.label}
                      </label>

                      {detail.type === "select" ? (
                        <div className="relative flex flex-col justify-center">
                          <select
                            id={detail.id}
                            name={detail.id}
                            value={values[detail.id]}
                            onChange={handleChange}
                            className={`border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#2D767F] text-gray-400 text-sm appearance-none w-full cursor-pointer 
                        ${values[detail.id] ? "text-gray-800" : "text-gray-400"}`}
                            required
                          >
                            <option value="" disabled>
                              {detail.placeholder}
                            </option>
                            {detail.options.map((option, i) => (
                              <option
                                key={i}
                                value={option}
                                className="text-gray-800"
                              >
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-4 pointer-events-none text-gray-500">
                            <ArrowDown className="w-5 h-5" />
                          </div>
                        </div>
                      ) : (
                        <input
                          type={detail.type}
                          required
                          placeholder={detail.placeholder}
                          name={detail.id}
                          id={detail.id}
                          pattern={detail.pattern}
                          minLength={detail.minLength}
                          onChange={handleChange}
                          className={`border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#2D767F] placeholder:text-gray-400 transition-all text-sm`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className="mt-10 bg-[#2D767F] text-white px-8 py-3 rounded-lg font-bold text-sm hover:brightness-110 transition-all duration-300"
                >
                  Submit Details
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold text-gray-700 mb-6">
              Group Details
            </h2>
            <hr className="mb-8 border-gray-300" />
          </div>
        )}
      </div>
    </section>
  );
}
