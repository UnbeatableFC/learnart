import mongoose from "mongoose";

const mongoConnectUri = process.env.MONGO_URI;

export const connectDB = async () => {
  await mongoose.connect(mongoConnectUri).then(() => {
    try {
      console.log("DB Connected");
    } catch (error) {
      console.error(error);
    }
  });
};
