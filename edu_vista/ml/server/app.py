from flask import Flask, request, jsonify
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)

# Load dataset and preprocess
data = pd.read_csv('/Users/praveendesilva/PycharmProjects/eduvista/udemy_courses.csv')
data.fillna(0, inplace=True)
data['level'] = pd.Categorical(data['level']).codes
data['subject'] = pd.Categorical(data['subject']).codes
scaler = StandardScaler()
X_scaled = scaler.fit_transform(data[['level', 'subject', 'num_reviews']])
kmeans = KMeans(n_clusters=4, random_state=42)
kmeans.fit(X_scaled)
data['cluster'] = kmeans.labels_

# Mapping of subject codes to names
subject_map = {
    0: 'Web Development',
    1: 'Graphic Design',
    2: 'Musical Instruments',
    3: 'Business'
}

@app.route('/ask-questions', methods=['POST'])
def ask_questions():
    student_answers = request.json  # Assuming frontend sends JSON data
    return jsonify(student_answers)  # Just echoing back for now

@app.route('/recommend-courses', methods=['POST'])
def recommend_courses():
    student_answers = request.json
    student_courses = pd.DataFrame([student_answers], columns=['level', 'subject', 'num_reviews'])
    student_cluster = kmeans.predict(scaler.transform(student_courses))
    subject_courses = data[data['subject'] == student_answers['subject']]
    if student_answers['num_reviews'] == 2:
        subject_courses = subject_courses.sort_values(by='num_reviews', ascending=False)
    recommended_courses = subject_courses[subject_courses['cluster'] == student_cluster[0]]
    return recommended_courses.to_dict('records')

if __name__ == '__main__':
    # Run the Flask app on port 5001
    app.run(debug=True, port=5001)
