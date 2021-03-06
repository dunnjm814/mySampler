from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField, BooleanField, DateField
from wtforms.validators import DataRequired

class SamplerForm(FlaskForm):
  title = StringField('Title', validators=[DataRequired()])
  priv = BooleanField('Priv', validators=[DataRequired()])
