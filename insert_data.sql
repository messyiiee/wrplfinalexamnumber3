-- Insert Events
-- Insert Events
INSERT INTO events (event_name, event_description, event_date, event_time, event_picture) VALUES
('Yoga Workshop', 'A relaxing yoga session for all levels.', '2024-07-01', '10:00 AM', 'images/yogaworkshop.jpg'),
('Pilates Class', 'A beginner-friendly pilates class.', '2024-07-02', '12:00 PM', 'images/pilatesclass.jpg'),
('Aerobics Session', 'An energetic aerobics session to boost your fitness.', '2024-07-03', '06:00 PM', 'images/aerobicssession.png'),
('Meditation Workshop', 'Learn various meditation techniques for relaxation and focus.', '2024-07-04', '09:00 AM', 'images/meditationworkshop.png'),
('Zumba Fitness Party', 'A fun and lively Zumba session with upbeat music.', '2024-07-05', '07:30 PM', 'images/zumbafitnessparty.jpg'),
('Outdoor Bootcamp', 'Intense outdoor workout focusing on strength and cardio.', '2024-07-06', '06:30 AM', 'images/outdoorbootcamp.jpeg'),
('Dance Fusion Class', 'Blend of different dance styles for a dynamic workout.', '2024-07-07', '11:00 AM', 'images/dancefusionclass.jpg'),
('Spin Cycling Class', 'High-energy indoor cycling workout with motivating instructors.', '2024-07-08', '05:00 PM', 'images/spincycleclass.jpg');

-- Insert Packages
INSERT INTO packages (event_id, package_name, package_price) VALUES
(1, 'Single Session', 50000),
(1, 'Monthly Pass', 500000),
(2, 'Single Session', 55000),
(2, 'Monthly Pass', 350000),
(3, 'Single Session', 55000),
(3, 'Monthly Pass', 500000),
(4, 'Single Session', 40000),
(4, 'Monthly Pass', 500000),
(5, 'Single Session', 55000),
(5, 'Monthly Pass', 550000),
(6, 'Single Session', 40000),
(6, 'Monthly Pass', 500000),
(7, 'Single Session', 55000),
(7, 'Monthly Pass', 430000),
(8, 'Single Session', 55000),
(8, 'Monthly Pass', 500000);

-- Insert Users
INSERT INTO users (user_name, user_email, user_password) VALUES
('John Doe', 'john@example.com', 'password123'),
('Jane Smith', 'jane@example.com', 'password123');