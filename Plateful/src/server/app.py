from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/pantries_info')
def pantries_info():

    response = {
		"name": "Cabell Library",
		"facility": "Cabell Library",
		"pantry_exterior_url": "CabellLibrary_exterior.png",
		"latest_contents_url": "filler_image.png",
		"campus": "Monroe Park Campus",
		"floor": "2nd",
		"hours": "7:30am - 2:00am",
		"directions": "Next to the steps",
		"date_last_opened": "2023-11-12",
		"time_last_opened": "11:36:21 EST",
		"public_key": "0"
	        }

    return [response ]


if __name__ == '__main__':
    app.run(debug=True)
