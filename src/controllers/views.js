const path = require("path");

// render home page function - returns the index.html file

const renderHomePage = (req, res) => {
	try {
		// get file path
		const filePath = path.join(__dirname, "../../public/index.html");

		//  use res.sendFile() - pass in the path of the file you want to send over the server as a response
		return res.sendFile(filePath);
	} catch (error) {
		return res.status(404).json({
			success: false,
			error: "Server error - Failed to load Homepage",
		});
	}
};

// render Films page function - returns the films.html file

const renderFilmsPage = (req, res) => {
	try {
		// get file path
		const filePath = path.join(__dirname, "../../public/films.html");

		//  use res.sendFile() - pass in the path of the file you want to send over the server as a response
		return res.sendFile(filePath);
	} catch (error) {
		return res.status(404).json({
			success: false,
			error: "Server error - Failed to load Homepage",
		});
	}
};

// Export of functions
module.exports = {
	renderHomePage,
	renderFilmsPage,
};
