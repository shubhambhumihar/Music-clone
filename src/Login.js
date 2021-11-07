import React from "react";
import "./Login.css";
import { loginUrl } from "./setup-spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://ci6.googleusercontent.com/proxy/zrOmNVNxpVaBZdTYtwhUu4du871PsVlK_LXDRAWO5BsMMHu1-KWQNB6BV8pCmufeM0Y_Y83sDUfBdKP39ToNx753fhRM35THlsLAqthYuf2hoh06xPh2FofxpuSPCvmAqQ=s0-d-e1-ft#http://message-editor.scdn.co/newsletters/b220713a2d4ac7a75ebe1f9ee0c78549.png"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
