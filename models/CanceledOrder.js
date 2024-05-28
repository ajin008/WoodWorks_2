const mongoose = require("mongoose");

// Define schema
const canceledOrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model if you have one
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // Reference to the Product model if you have one
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    orderTotal: {
      type: Number,
      required: true,
    },
    orderDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    cancelledDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    // Any other fields you want to include
  },
  { timestamps: true }
);

// Create model
const CanceledOrder = mongoose.model("CanceledOrder", canceledOrderSchema);

module.exports = CanceledOrder;
