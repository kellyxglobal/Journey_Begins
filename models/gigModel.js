const mongoose = require('mongoose')

const gigSchema = mongoose.Schema(
    {
        userId: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
          minlength: 31,
          maxlength: 60,
        },
        desc: {
          type: String,
          required: false,
          minlength: 0,
          maxlength: 2000,
        },
        totalStars: {
          type: Number,
          default: 0,
        },
        adminGigSortID: {
          type: Number,
          default: 0,
        },
        cat: {
          type: String,
          required: true,
        },
        subCat: {
          type: [String],
          required: true,
        },
        tags: {
          type: [String],
          required: true,
        },
        services: {
          type: [String],
          required: false,
        },
        sales: {
          type: Number,
          default: 0,
        },
        gigStatus: {
          type: String,
          default: 'Draft',
          enum: ['Active', 'Paused', 'Draft', 'Published'],
        },
        gigState: {
          type: String,
          default: 'Pending',
          enum: ['Pending', 'Denied', 'Modifying', 'Approved'],
        },
        style: {
          type: [String],
        },
        niche: {
          type: [String],
        },
        genre: {
          genreService: {
            type: String,
            required: true,
          },
          genreType: {
            type: String,
            required: true,
          },
          subGenre: {
            type: [String],
            required: true,
          },
        },
        impressions: {
          type: Number,
          default: 0,
        },
        clicks: {
          type: Number,
          default: 0,
        },
        chatRequest: {
          type: Number,
          default: 0,
        },
      },
      {
        timestamps: true,
        versionKey: 'version', // Add this line
      }
    );

    const Gig = mongoose.model('Gig', gigSchema)

    module.exports = Gig;