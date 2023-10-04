# Flask Booking System

## Overview
A simple booking system built with Flask, utilizing SQLAlchemy for data management and WTForms for form handling. This application allows users to create an account, log in, and make a booking at a chosen date and time.

## Features
- User Registration: New users can create an account.
- User Login: Registered users can log in.
- Booking: Logged-in users can make a booking.
  
## Installation & Setup
### Prerequisites
- Python 3.8+
- pip

### Steps
1. **Clone the Repository:**
    ```shell
    git clone https://github.com/your_username/flask-booking-system.git
    cd flask-booking-system
    ```
   
2. **Install Dependencies:**
    ```shell
    pip install -r requirements.txt
    ```

3. **Set up the Database:**
   Update the `SQLALCHEMY_DATABASE_URI` in `app/config.py` to point to your database.

4. **Run Migrations:**
    ```shell
    flask db upgrade
    ```

5. **Run the Application:**
    ```shell
    python run.py
    ```
    Now, visit `http://127.0.0.1:5000/` in your browser.

## Usage
- **Register**: Navigate to the 'Register' page, fill in the details, and create an account.
- **Login**: Use the credentials to log in to the system.
- **Book**: Choose a date and time, and confirm your booking.

## Future Improvements
- Implement email confirmation upon booking.
- Add user profile management.
- Include admin panel to manage all bookings.

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
