// import mongoose from 'mongoose';

export default async (req, res) => {
  // await mongoose.connect(process.env.DB_LINK, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})

  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
