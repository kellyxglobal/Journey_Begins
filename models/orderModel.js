const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
    {


        cartId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cart',
            required: true,
          },
          gigId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Gig',
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          orderPrice: {
            type: Number,
            required: true,
          },
          sellerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
          },
          buyerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
          },
          gigPackageId: {
            type: String,
            required: true,
          },
          gigPackageType: {
            type: String,
            required: true,
          },
          gigPackageWordCount: {
            type: Number,
            required: false,
          },
          gigDeliveryTime: {
            type: Number,
            required: true,
          },
          gigRevisions: {
            type: Number,
            required: true,
          },
          gigPackageQuantity: {
            type: Number,
            required: false,
            default: 1,
          },
          reviewPeriod: {
            type: Number,
            required: false,
          },
          gigPackagePrice: {
            type: Number,
            required: true,
          },
          services: {
            type: [String],
            required: false,
          },
          gigExtras: [
            {
              extrasId: {
                type: String,
              },
      
              extrasQuantity: {
                type: Number,
              },
      
              extrasWordCount: {
                type: Number,
              },
      
              extrasDeliveryTime: {
                type: Number,
              },
      
              extrasPrice: {
                type: Number,
              },
            },
          ],
          serviceFee: {
            type: Number,
          },
      
          vatFee: {
            type: Number,
          },
      
          totalPrice: {
            type: Number,
            default: 0,
          },
      
          checkOutPrice: {
            type: Number,
          },
          orderStatus: {
            type: String,
            default: 'In Review',
            enum: [
              'Active',
              'Completed',
              'Cancelled',
              'Late',
              'Delivered',
              'In Progress',
              'In Review',
            ],
          },
          isCompleted: {
            type: Boolean,
            default: false,
          },
          isPrioritized: {
            type: Boolean,
            default: false,
          },
          isActive: {
            type: Boolean,
            default: false,
          },
          isLate: {
            type: Boolean,
            default: false,
          },
          isDelivered: {
            type: Boolean,
            default: false,
          },
          isCancelled: {
            type: Boolean,
            default: false,
          },
          isStarred: {
            type: Boolean,
            default: false,
          },
          orderedAt: {
            type: Date,
            required: true,
            default: Date.now(),
          },
          orderSKU: {
            type: String,
            required: true,
          },
          payment_intent: {
            type: String,
            required: true,
          },
        },
        {
          timestamps: true,
        });

const Order = mongoose("Order", orderSchema);

module.exports = Order;