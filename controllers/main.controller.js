'use strict';

const axios = require('axios');
const response = require('../helpers/response');

axios.interceptors.response.use(
	response => response,
	error => {
		const {status} = error.response;
		return Promise.reject(error);
	}
);

exports.index = (req, res) => {
	res.sendFile(public_path+'/index.html');
};
exports.api = async (req, res) => {
	const input = req.query;
	axios.post(`https://drive.google.com/uc?id=${input.id}&authuser=0&export=download`, {}, {
		headers: {'accept-encoding': 'gzip, deflate, br', 'content-length': 0, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', 'origin': 'https://drive.google.com', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36','x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=', 'x-drive-first-party': 'DriveWebUi', 'x-json-requested': 'true,' }
	}).then(data => {
		var result = data.data;
		result = result.slice(4);
		return response.json({
			code:200,
			message:'Success',
			data:JSON.parse(result)
		}, res)
	}).catch(error => {
		return response.json({
			code:500,
			message:'Get link failed'
		}, res)
	})
};