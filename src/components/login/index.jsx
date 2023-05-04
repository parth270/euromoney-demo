import React, { useState } from "react";

const Login = ({ children }) => {
  const [input, setInput] = useState("");
  const [login, setLogin] = useState(false);

  React.useEffect(() => {
    const item = localStorage.getItem("logg");
    console.log(item);
    if(item){
        setLogin(true);
    }
  }, []);

  return (
    <>
      {!login ? (
        <div
          className="w-[100%] fixed top-0 bg-[#fff] flex items-center flex-col justify-center left-0 h-[100vh]"
          style={{
            zIndex: 999999999999999999,
          }}
        >
          <div className="p-[30px] ">
            <img
              src="/logo-1.png"
              className="bg-[#00000090] rounded-xl p-[30px]"
              alt=""
            />
            <p className="text-[16px] mt-[20px] font-bold font-mono">
              Password:
            </p>
            <input
              className="w-[100%] mt-[4px] px-[10px] font-medium text-[#000] border-[2px] rounded-sm h-[40px] border-[#000] outline-none"
              type="password"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              name=""
              id=""
            />
            <button
              className="w-[100%] h-[50px] rounded-sm bg-[#000] font-medium text-[#fff] mt-[20px]"
              onClick={() => {
                if(input==="#Molotov74"){
                    localStorage.setItem("logg",true);
                    setLogin(true);
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Login;
