const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const commentSchema = new Schema(
	{
		rating: {
			type: Number,
			min: 1,
			max: 5,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const campsiteSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		elevation: {
			type: Number,
			required: true,
		},
		cost: {
			type: Currency,
			required: true,
			min: 0,
		},
		featured: {
			type: Boolean,
			default: false,
		},

		//let every campsite document contain multiple comments documents stored within an array
		comments: [commentSchema],
	},
	{
		timestamps: true,
	}
);

//capitalize single word for name of collection in first argument, ie: Campsites => Campsite
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;
