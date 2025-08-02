import data from "../data.js";

const Login = (req, res) => {
  const { email, password } = req.body;

  const user = data.find((intern) => intern.email === email && intern.password === password);

  if (user) {
    // Hide password before sending response
    const { password, ...safeUser } = user;
    console.log(" Login successful");
    res.status(200).json({ success: true, user: safeUser });
  } else {
    console.log(" Login failed");
    res.status(401).json({ success: false, message: "Invalid email or password" });
  }
};

export default Login;
