## Getting Started
To get started, first install all the necessary dependencies.
````bash
$ npm install
````
Start the development server
````bash
$ node app.js
````
To view your project, go to: http://localhost:3000

#### API
- **[GET]** /api/?id=GOOGLE_DRIVE_ID

**Response**
```json
{
	"code": 200,
	"message": "Success",
	"data": {
		"disposition": "SCAN_CLEAN",
		"downloadUrl": "https://doc-00-bc-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/hpqdcctmhbre0dlcnvr3dubada4spuj9/1549267200000/05618864326713362374/*/1xYz-q0SjnllflBmzaWjkqg04OmiinxXxX?e=download",
		"fileName": "Filename.zip",
		"scanResult": "OK",
		"sizeBytes": 14491620
	}
}
```

![demo](./screenshot.png)