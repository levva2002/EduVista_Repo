@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Check if the email exists in the database
    user = User_collection.find_one({'email': email})

    if user:
        # If the user exists, check if the password matches
        if check_password_hash(user['password'], password):
            # Password matches, user is authenticated
            session['user_id'] = str(user['_id'])  # Store user ID in session
            session['user_type'] = user['user_type']  # Store user type in session
            session['logged_in'] = True  # Set logged_in to True indicating the user is logged in
            session['user_is_logged_in'] = True  # Set user_is_logged_in to True indicating the user is logged in

            return jsonify({
                'success': True,
                'message': 'Login successful'
            }), 200
        else:
            # Password does not match
            return jsonify({'success': False, 'message': 'Incorrect password'}), 401
    else:
        # Email not found in the database
        return jsonify({'success': False, 'message': 'Email not registered'}), 404



    

@app.route('/user-is-logged-in', methods=['GET'])
def user_is_logged_in():
    return jsonify({'user_is_logged_in': session.get('user_is_logged_in', False)}), 200


@app.route('/logout')
def logout():
    # Clear session variables to log out the user
    session.pop('user_id', None)
    session.pop('user_type', None)
    session['logged_in'] = False  # Set logged_in to False indicating the user is logged out
    session['user_is_logged_in'] = False  # Reset user_is_logged_in to False on logout
    return jsonify({'success': True, 'message': 'Logged out successfully'}), 200

def get_current_user_id():
    """Get the ID of the currently logged-in user."""
    return session.get('user_id')


@app.route('/get-allusers', methods=['GET'])
def get_all_users():
    users = list(User_collection.find({}, {"password": 0}))  # Exclude password field
    # Convert ObjectId to string for each user
    for user in users:
        user['_id'] = str(user['_id'])
    return jsonify(users), 200
# Read operation for Users (Get user by ID)
@app.route('/get-user/<user_id>', methods=['GET'])
def get_user(user_id):
    user = User_collection.find_one({"_id": ObjectId(user_id)}, {"password": 0})  # Exclude password field
    if user:
        return jsonify(user), 200
    else:
        return jsonify({"message": "User not found"}), 404

# Update operation for Users
@app.route('/update-user/<user_id>', methods=['PUT'])
def update_user(user_id):
    updated_data = request.json
    if 'password' in updated_data:
        updated_data['password'] = generate_password_hash(updated_data['password'])  # Hash password before saving
    result = User_collection.update_one({"_id": ObjectId(user_id)}, {"$set": updated_data})
    if result.modified_count:
        return jsonify({"message": "User updated successfully"}), 200
    else:
        return jsonify({"message": "User not found"}), 404

# Delete operation for Users
@app.route('/delete-user/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    result = User_collection.delete_one({"_id": ObjectId(user_id)})
    if result.deleted_count:
        return jsonify({"message": "User deleted successfully"}), 200
    else:
        return jsonify({"message": "User not found"}), 404

# Create operation for Courses
@app.route('/create-course', methods=['POST'])
def create_course():
    course_data = request.json

    required_fields = ['title', 'description', 'tutor', 'grade', 'subject', 'medium', 'month', 'short_description', 'notes']
    for field in required_fields:
        if field not in course_data:
            return jsonify({"message": f"Missing required field: {field}"}), 400

    # Assuming 'tutor' field is the ObjectId of the tutor
    tutor_id = course_data.get('tutor')
    if not User_collection.find_one({"_id": ObjectId(tutor_id)}):
        return jsonify({"message": "Tutor not found"}), 404

    result = Course_collection.insert_one(course_data)
    return jsonify({"message": "Course created successfully", "id": str(result.inserted_id)}), 201



# Read operation for Courses (Get all courses)
@app.route('/get-allcourses', methods=['GET'])
def getallcourses():
    # Use the Course_collection to retrieve all documents from the Courses collection
    documents = list(Course_collection.find())  # Retrieve all documents from Course_collection
    # Convert ObjectId to string for each document
    for doc in documents:
        doc['_id'] = str(doc['_id'])
    return jsonify({'courses': documents}), 200



# Read operation for Courses (Get course by ID)
@app.route('/get-course/<course_id>', methods=['GET'])
def get_course(course_id):
    course = Course_collection.find_one({"_id": ObjectId(course_id)})
    if course:
        return jsonify(course), 200
    else:
        return jsonify({"message": "Course not found"}), 404

# Update operation for Courses
@app.route('/update-course/<course_id>', methods=['PUT'])
def update_course(course_id):
    updated_data = request.json
    result = Course_collection.update_one({"_id": ObjectId(course_id)}, {"$set": updated_data})
    if result.modified_count:
        return jsonify({"message": "Course updated successfully"}), 200
    else:
        return jsonify({"message": "Course not found"}), 404

# Delete operation for Courses
@app.route('/delete-course/<course_id>', methods=['DELETE'])
def delete_course(course_id):
    result = Course_collection.delete_one({"_id": ObjectId(course_id)})
    if result.deleted_count:
        return jsonify({"message": "Course deleted successfully"}), 200
    else:
        return jsonify({"message": "Course not found"}), 404
    
    
    
