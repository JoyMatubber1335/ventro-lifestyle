import mongoose from "mongoose";

const ventroBoxSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
  },
  company: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  secondaryEmail: {
    type: String,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  phoneNumber: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{10,15}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  secondaryPhoneNumber: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{10,15}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  website: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  linkedInProfile: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/.test(v);
      },
      message: (props) => `${props.value} is not a valid LinkedIn profile URL!`,
    },
  },
  facebook: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^(https?:\/\/)?(www\.)?facebook\.com\/.*$/.test(v);
      },
      message: (props) => `${props.value} is not a valid Facebook profile URL!`,
    },
  },
  instagram: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^(https?:\/\/)?(www\.)?instagram\.com\/.*$/.test(v);
      },
      message: (props) => `${props.value} is not a valid Instagram profile URL!`,
    },
  },
  tiktok: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^(https?:\/\/)?(www\.)?tiktok\.com\/.*$/.test(v);
      },
      message: (props) => `${props.value} is not a valid TikTok profile URL!`,
    },
  },
});

const VentroBox = mongoose.model("VentroBox", ventroBoxSchema);

export default VentroBox; // Export the model directly
