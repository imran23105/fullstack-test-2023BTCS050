import Form from "../Modules/Form.js";
import {sendContactMail} from './Nodemail.js'

const setform = async (req, res) => {
  const { name, email, dis } = req.body;
  if (!name || !email || !dis) {
    return res.status(400).json({
      message: "all field is require",
    });
  }

  try {
    const form = new Form({
      name,
      email,
      dis,
    });
    await form.save();
    await sendContactMail(form);
    res.status(200).json({
      message: "form added",
      form,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error creating card",
      error: err.message,
    });
  }
};

export { setform };