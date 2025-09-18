import mongoose from "mongoose";

const Formschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dis: {
        type: String,
        required: true
    }
});

const Form = mongoose.model("Formdata", Formschema);

export default Form;