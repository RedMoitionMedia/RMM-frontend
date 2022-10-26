import React, { useState } from "react";
import axios from "axios";

function Unsubscribe() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post(
        "https://www.redryder.at:5001/api/redryder/newsletter/unsubscribe",
        { email }
      );
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };
  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] m-auto px-2 py-[200px] w-full h-full ">
        <div className="grid place-items-center">
          <div className=" w-full h-full shadow-xl shadow-gray-400 rounded-xl p-0 py-5 sm:p-8">
            <form>
              <div className="h-full grid place-items-center gap-5">
                <div className="h-full grid place-items-center gap-5 text-center max-w-2xl">
                  <h3>You want to unsubscribe from the newsletter!</h3>
                </div>
                <div className="w-full grid place-items-center">
                  <div className="flex items-center justify-center gap-4">
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300 sm:w-[425px]"
                      type="text"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      className={`p-4 text-gray-100 sm:px-8 ${
                        state === "LOADING" ? "button-gradient-loading" : ""
                      }`}
                      disabled={state === "LOADING"}
                      onClick={subscribe}
                    >
                      Unsubscribe
                    </button>
                  </div>
                  {state === "ERROR" && (
                    <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
                  )}
                  {state === "SUCCESS" && (
                    <p className="w-1/2 mt-2 text-green-600">Success!</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unsubscribe;
