from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# MongoDB Atlas connection URI
mongo_uri = "mongodb+srv://Thewmika:eduvista@courses.hkeu3rj.mongodb.net/?retryWrites=true&w=majority&appName=Courses"

# Create a MongoClient instance
client = MongoClient(mongo_uri)

# Access your MongoDB Atlas database
db = client.get_database('eduvista')  # Database named 'Courses'

# Access your collection
collection = db['Courses']  # Collection named 'Courses'

# Read operation - Fetch documents from MongoDB
@app.route('/api/read', methods=['GET'])
def read_documents():
    documents = list(collection.find())  # Retrieve all documents from collection
    return jsonify({'documents': documents}), 200

# Retrieve all documents route
from bson import ObjectId

@app.route('/api/data', methods=['GET'])
def get_all_data():
    documents = list(collection.find())  # Retrieve all documents from collection
    # Convert ObjectId to string for each document
    for doc in documents:
        doc['_id'] = str(doc['_id'])
    return jsonify({'documents': documents}), 200

# Root URL route
@app.route('/')
def index():
    return 'Welcome to the CRUD API!'

if __name__ == '__main__':
    app.run(debug=True, port=5005)