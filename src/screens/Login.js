import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import card from "./utils/Images/loginCard.webp";
import "./Login.css";
import { API_REGISTER } from "./redux/Urls";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUserAction } from "./redux/action/LoginAction";
import { Alert } from "@mui/material";
import TextField from "@mui/material/TextField";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [fullName, setFullName] = useState(null);
  const { registerUser } = useSelector((store) => store.LoginReducers);

  useEffect(() => {
    if (registerUser) {
      console.log("registerUser", registerUser);
    }
  }, [registerUser]);

  function buttonLoginAndRegister() {
    if (isRegister) {
      let url = API_REGISTER;
      if (!fullName) {
        return alert("Please enter Full Name");
      }
      if (!email) {
        return alert("Please enter Email");
      }
      if (!phoneNumber) {
        return alert("Please enter Phone Number");
      }
      if (phoneNumber.length < 10) {
        return alert("Please enter Proper Phone Number");
      }
      if (password !== confirmPassword) {
        return alert("Password Does not match");
      }
      let params = {
        email: email,
        phone: phoneNumber,
        full_name: fullName,
        password: password,
      };
      dispatch(RegisterUserAction(url, params));
    }
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  function handleChangePhone(e) {
    if (e.target.value.length == 11) {
      return null;
    }
    setPhoneNumber(e.target.value);
  }
  function handleChangeConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }
  function handleChangeName(e) {
    setFullName(e.target.value);
  }

  return (
    <div style={{ backgroundColor: "#fdf0e6", minHeight: "100vh" }}>
      <div style={{ position: "absolute" }}>
        {/* <Alert severity="success">
          Here is a gentle confirmation that your action was successful.
        </Alert> */}
      </div>
      <div style={{ flex: 1 }}>
        <Navbar />
      </div>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          //   padding: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "25%",
            margin: "25px",
          }}
        >
          <img src={card} style={{ width: "100%" }} />

          <div style={{ padding: "30px" }}>
            <div
              style={{
                // marginTop: "10px",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <text
                  style={{ color: "#434453", fontWeight: 700, fontSize: 20 }}
                >
                  Login{" "}
                  <text
                    style={{ color: "#888c97", fontWeight: 100, fontSize: 16 }}
                  >
                    Or
                  </text>{" "}
                  Signup
                </text>
              </div>
              <div
                style={{
                  marginTop: "10px",

                  width: "100%",
                }}
              >
                {isRegister ? (
                  <div
                    style={{ justifyContent: "flex-start", display: "flex" }}
                  >
                    <TextField
                      // id="outlined-basic"
                      label="Full Name"
                      variant="outlined"
                      size="small"
                      value={fullName}
                      onChange={handleChangeName}
                      style={{ width: "100%" }}
                    />
                  </div>
                ) : null}

                <div
                  style={{
                    justifyContent: "flex-start",
                    display: "flex",
                    marginTop: isRegister ? "8px" : null,
                  }}
                >
                  <TextField
                    // id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="small"
                    value={email}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  />
                </div>
                {isRegister ? (
                  <>
                    {/* <div className="input-container" style={{ marginTop: "8px" }}>
                    <input
                      value={phoneNumber}
                      onChange={handleChangePhone}
                      type="number"
                      inputMode="numeric"
                      maxLength={10}
                    />
                    <label className={phoneNumber && "filled"}>{"Phone"}</label>
                  </div> */}
                    <div
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        marginTop: "8px",
                      }}
                    >
                      <TextField
                        // id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                        size="small"
                        value={phoneNumber}
                        onChange={handleChangePhone}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </>
                ) : null}

                <div
                  style={{
                    justifyContent: "flex-start",
                    display: "flex",
                    marginTop: "8px",
                  }}
                >
                  <TextField
                    // id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    size="small"
                    value={password}
                    onChange={handleChangePassword}
                    style={{ width: "100%" }}
                  />
                </div>
                {isRegister ? (
                  <div
                    style={{
                      justifyContent: "flex-start",
                      display: "flex",
                      marginTop: "8px",
                    }}
                  >
                    <TextField
                      // id="outlined-basic"
                      label="Confirm Password"
                      variant="outlined"
                      size="small"
                      value={confirmPassword}
                      onChange={handleChangeConfirmPassword}
                      style={{ width: "100%" }}
                    />
                  </div>
                ) : null}
                <div
                  style={{
                    backgroundColor: "#fe3f6d",
                    marginTop: "25px",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() => buttonLoginAndRegister()}
                >
                  {isRegister ? "Register" : "Login"}
                </div>

                <div
                  style={{ marginTop: "8px", cursor: "pointer" }}
                  onClick={() => setIsRegister(!isRegister)}
                >
                  {!isRegister ? (
                    <text style={{ color: "black" }}>
                      Dont have an Account?
                      <text style={{ color: "#fe3f6d" }}>Sign Up</text>
                    </text>
                  ) : (
                    <text style={{ color: "black" }}>
                      Have an Account?
                      <text style={{ color: "#fe3f6d" }}>Login</text>
                    </text>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
