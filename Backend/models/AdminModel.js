import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const adminSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: { 
    type: String, 
    required: true,
    minlength: 6
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
});

// Hash password before saving
adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Generate auth token
adminSchema.methods.generateAuthToken = async function() {
  const admin = this;
  const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  
  admin.tokens = admin.tokens.concat({ token });
  await admin.save();
  
  return token;
};

// Remove sensitive data from JSON response
adminSchema.methods.toJSON = function() {
  const admin = this;
  const adminObject = admin.toObject();

  delete adminObject.password;
  delete adminObject.tokens;
  delete adminObject.__v;

  return adminObject;
};

export default mongoose.model("Admin", adminSchema);