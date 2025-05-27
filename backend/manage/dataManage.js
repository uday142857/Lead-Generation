const dataModel = require("../modules/dataModel.js");
const validator = require("validator");
const axios = require("axios");

const getData = async (req,res) => {
  const { fname, lname, email, company, message } = req.body;

  try {
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter valid email" });
    }

    // Check if user already exists
    const existingUser = await dataModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Create new user entry
    const data = await dataModel.create({
      fname:fname,
      lname:lname,
      email:email,
      company:company,
      message:message,
    });
    await axios.post(
      "https://n8n-service-uh7d.onrender.com/webhook/webhook/lead",
      {
        fname: fname,
        lname: lname,
        email: email,
        company: company,
        message: message,
      }
    );
    return res.json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to fetch data" });
  }
};

module.exports = getData;
