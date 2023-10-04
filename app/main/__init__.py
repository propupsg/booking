from flask import Blueprint

# Create a Blueprint for the 'main' module
main = Blueprint('main', __name__)

# Import route functions to be used within the 'main' module
from app.main import routes, forms
