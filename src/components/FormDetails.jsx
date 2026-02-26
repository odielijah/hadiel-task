import { Close } from "../assets/icons/Close";
export default function FormDetails({ values, setIsSuccess }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60">
      <div className="bg-white w-full max-w-lg flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-[#2D767F] p-5 sm:p-6 text-white text-center flex-shrink-0 text-md">
          <p>Submission Successful</p>
          <p>Your details:</p>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto">
          <div className="space-y-5">
            {/* Profile Photo Preview */}
            {values.photo && (
              <div className="flex items-center gap-4 p-3 bg-gray-50 border border-gray-100">
                <img
                  src={URL.createObjectURL(values.photo)}
                  alt="Profile"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#2D767F]"
                />
                <div className="min-w-0">
                  {" "}
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                    Profile Photo
                  </p>
                  <p className="text-sm text-gray-700 truncate font-medium">
                    {values.photo.name}
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {Object.entries(values).map(([key, value]) => {
                if (key === "photo" || !value) return null;
                return (
                  <div key={key} className="border-b border-gray-100 pb-2">
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                      {key.replace(/([A-Z])/g, " $1")}
                    </p>
                    <p className="text-sm text-gray-800 font-medium break-words capitalize">
                      {value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-4 flex justify-end sm:justify-start flex-shrink-0">
          <button
            onClick={() => setIsSuccess(false)}
            className="w-full sm:w-auto bg-[#2D767F] text-white px-8 py-2.5 text-sm font-bold hover:bg-[#1f565d] transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
