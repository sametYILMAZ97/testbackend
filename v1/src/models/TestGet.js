const Mongoose = require('mongoose')

const TestGetSchema = new Mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
)

TestGetSchema.set('toObject', { virtuals: true })
TestGetSchema.set('toJSON', { virtuals: true })

module.exports = Mongoose.model('testGet', TestGetSchema)
