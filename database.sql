
CREATE TABLE events (
    event_id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_name TEXT,
    event_description TEXT,
    event_date TEXT,
    event_time TEXT,
    event_picture TEXT 
);

CREATE TABLE packages (
    package_id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER,
    package_name TEXT,
    package_price REAL,
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);


-- User Information
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT,
    user_email TEXT,
    user_password TEXT
);

-- Transaction Records
CREATE TABLE transactions (
    transaction_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    package_id INTEGER,
    transaction_date TEXT,
    transaction_amount REAL,
    payment_status TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (package_id) REFERENCES packages(package_id)
);