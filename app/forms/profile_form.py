from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

class ProfileForm(FlaskForm):
    bio = StringField('Bio')
    name = StringField('Name')
    location = StringField('Location')
    website = StringField('Website')
    submit = SubmitField('Submit')
