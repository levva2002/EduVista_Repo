from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score
from sklearn.impute import SimpleImputer
from pymongo import MongoClient

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

# Mapping of subjects to numerical codes
subject_map_reverse = {
    'Web Development': 0,
    'Graphic Design': 1,
    'Musical Instruments': 2,
    'Business Finance': 3
}

# Reverse mapping of subject codes to names
subject_map = {v: k for k, v in subject_map_reverse.items()}

# Mapping of level codes to names
level_map = {
    0: 'Beginner Level',
    1: 'Intermediate Level',
    2: 'Expert Level',
    3: 'All Levels'
}

# Step 1: Data Preprocessing
# Fetch data from MongoDB collection
data = list(collection.find({}))

# Convert fetched data to DataFrame
data = pd.DataFrame(data)

# Handle missing values if any
data.fillna(0, inplace=True)  # Replace NaNs with 0 for simplicity

# Map subjects to numerical codes
data['subject'] = data['subject'].map(subject_map_reverse)

# Encode categorical variables
data['level'] = pd.Categorical(data['level']).codes

# Step 2: Feature Selection
features = ['level', 'subject', 'num_reviews', 'num_subscribers']  # Include 'num_subscribers' for popularity
X = data[features]

# Define an imputer to replace NaN values with the mean
imputer = SimpleImputer(strategy='mean')

# Convert categorical variables to one-hot encoding
X_encoded = pd.get_dummies(X, columns=['level'])

# Apply imputation to your data
X_imputed = imputer.fit_transform(X_encoded)

# Normalize numerical features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_imputed)

# Step 3: Clustering
# Determine the optimal number of clusters
# Example using the elbow method
scores = []
for k in range(2, 11):
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X_scaled)
    scores.append(silhouette_score(X_scaled, kmeans.labels_))
optimal_k = scores.index(max(scores)) + 2
# Apply K-Means clustering with the optimal number of clusters
kmeans = KMeans(n_clusters=optimal_k, random_state=42)
kmeans.fit(X_scaled)
data['cluster'] = kmeans.labels_

# Step 4: Recommendation
@app.route('/recommend_courses', methods=['POST'])
def get_recommendations():
    student_answers = request.json  # Assuming JSON payload
    # Set a default value for 'num_subscribers'
    student_answers['num_subscribers'] = 0  # or any default value you prefer
    # Convert student's answers into DataFrame
    student_courses = pd.DataFrame([student_answers], columns=['level', 'subject', 'num_reviews', 'num_subscribers'])
    # Prepare the data for transformation
    student_courses_encoded = pd.get_dummies(student_courses, columns=['level'])
    # Reindex the DataFrame to ensure that all feature names are present
    student_courses_encoded = student_courses_encoded.reindex(columns=X_encoded.columns, fill_value=0)
    # Apply imputation to your data
    student_courses_imputed = imputer.transform(student_courses_encoded)
    # Normalize numerical features
    student_courses_scaled = scaler.transform(student_courses_imputed)
    # Predict cluster for student's preferences
    student_cluster = kmeans.predict(student_courses_scaled.reshape(1, -1))
    # Filter courses based on subject and level
    subject_courses = data[data['subject'] == student_answers['subject']]
    level_courses = subject_courses[subject_courses['level'] == student_answers['level']]
    # Get recommended courses within the same cluster, subject, and level, sorted by popularity
    recommended_courses = level_courses[level_courses['cluster'] == student_cluster[0]].sort_values(by='num_subscribers', ascending=False)
    
    # Map subject codes to subject names
    recommended_courses['subject'] = recommended_courses['subject'].map(subject_map)
    
    # Optionally, fine-tune recommendations based on quiz marks or other factors
    recommended_courses['level'] = recommended_courses['level'].map(level_map)
    
    return jsonify(recommended_courses[['course_title', 'num_reviews', 'num_subscribers', 'subject', 'level']].to_dict(orient='records')), 200

if __name__ == '__main__':
    app.run(debug=True, port=5002)
