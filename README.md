# 🤖 Robot Arm Control Panel

This project is a web-based **Robot Arm Control Panel** that allows users to control 6 motors using sliders, save motor poses to a MySQL database, load saved poses, and run them using a user-friendly interface.

---

## 📦 Features

- 🎛️ 6 sliders for motor control (Motor 1 to Motor 6)
- 💾 Save motor positions ("poses") to a database
- 📋 View all saved poses in a table
- 🔄 Load a saved pose to re-apply it
- ❌ Delete poses from the database
- ▶️ Load most recent pose using "Run" button
- 🔁 Reset button to restore default values (90 degrees each)

---

## 🛠️ Technologies Used

- **HTML/CSS** – Interface design
- **JavaScript** – Interactivity (slider updates, AJAX requests)
- **PHP** – Server-side scripting
- **MySQL** – Database to store poses
- **XAMPP** – Local development server (Apache + MySQL)

---

## 🗂️ Project Structure
robot-arm/
├── index.html # Main control panel interface
├── style.css # Page styling
├── script.js # JavaScript interactivity
├── db.php # Database connection
├── save_pose.php # Save pose to database
├── load_poses.php # Load all saved poses (AJAX)
├── get_pose_by_id.php # Load specific pose for "Load" button
├── get_run_pose.php # Get latest pose for "Run" button
├── delete_pose.php # Delete a pose
└── database.sql # SQL script to create table



---

## 📋 Database Setup

1. Start **XAMPP**, and enable:
   - Apache
   - MySQL

2. Open **phpMyAdmin**:  
   http://localhost/phpmyadmin

3. Create a new database named: robot_arm

4. Execute the following SQL to create the `poses` table:

#sql
CREATE TABLE poses (
id INT AUTO_INCREMENT PRIMARY KEY,
motor1 INT,
motor2 INT,
motor3 INT,
motor4 INT,
motor5 INT,
motor6 INT,
status TINYINT DEFAULT 1
);


🚀 How to Run the Project Locally
1. Copy the project folder robot-arm/ into: C:\xampp\htdocs\
2. Start Apache and MySQL via XAMPP Control Panel.
3. Visit the app in your browser: http://localhost/robot-arm/index.html


🧪 Functionality Demo
- Move sliders to select motor angles.

- Click Save Pose to save current values.

- Table below shows all saved poses.

- Click Load to fill sliders with a previous pose.

- Click Remove to delete a pose.

- Click Run to apply the most recent pose.

- Click Reset to restore all sliders to 90.



  📌 Notes
- The system uses fetch() to perform AJAX calls to the backend PHP scripts.

- Poses are stored with 6 motor values (integers between 0 and 180).

- No login/authentication is implemented — for simplicity.




## OUTPUT :

<img width="807" height="695" alt="Screenshot 2025-07-22 221739" src="https://github.com/user-attachments/assets/82eebcca-e445-4f47-8af3-8f0010506309" />

