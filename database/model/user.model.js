const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
	{
		username: { type: String },
		email: { type: String },
		password: { type: String },
	},
	{ timestamp: true }
);
///middleware
userSchema.pre('save', function (next) {
	let user = this;
	if (user.isModified('password')) {//check if user is modified
		return bcrypt.hash(user.password, 12, function (err, hash) {//12 defines the complexity of Hash
			if (err) {
				return next(err);
			}
			user.password = hash;//else hash
			return next();
		});
	} else {
		return next();
	}
});
//to update the password or login Again db psd
userSchema.methods.comparePassword = function (password, next) {
	bcrypt.compare(password, this.password, function (err, match) {//Pass entered by user Actual Pass and err &match
		if (err) {
			return next(err, false);
		}

		return next(null, match);
	});
};

const User = mongoose.model('User', userSchema);
module.exports = User;