const Mongoose = require('mongoose')
const logger = require('../scripts/logger/Employee')

const EmployeeSchema = new Mongoose.Schema(
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
    status: {
      type: String,
      reqqired: true,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    phone: [
      {
        type: String,
        required: true,
      },
    ],
    address: {
      street: String,
      city: String,
      state: String,
      zip: Number,
    },
    salaries: [
      {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Salary',
      },
    ],
    admin: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  { versionKey: false, timestamps: true }
)

// Create a virtual field totalSalary to calculate the total salary of an employee
// We are in the EmployeeSchema but this field is calling values from the SalarySchema.
// EmployeeSchema.virtual('totalSalary').get(function () {
//   return this.salaries.reduce((total, salary) => {
//     return total + salary.salary
//   }, 0)
// })

// ***Trigger*** before save
EmployeeSchema.pre('save', function (next) {
  var new_doc = this
  this.constructor.findById(this.id, function (err, original) {
    logger.log({
      level: 'info',
      message: new_doc,
    })
    next()
  })
})

EmployeeSchema.set('toObject', { virtuals: true })
EmployeeSchema.set('toJSON', { virtuals: true })

module.exports = Mongoose.model('Employee', EmployeeSchema)
