const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const domain = "@rycao.me";
const length = 15;

function generateEmail() {
	var email = "";
	for (var a = 0; a < length; a++) {
		email += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	email += domain;
	console.log(email);
	return email;
}

generateEmail()