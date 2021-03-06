from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from datetime import datetime
import json
from app.config import Config
from app.models import db, Sampler
from app.forms import SamplerForm


sampler_routes = Blueprint('/sampler', __name__)


@sampler_routes.route('/new', methods=['POST'])
@login_required
def new_sampler():
  print('*****************************', current_user.id)
  form = SamplerForm()
  print('hello2', form.title)
  # form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    sampler = Sampler(
      title=form.data['title'],
      userId=current_user.id,
      sampleOne='',
      sampleTwo='',
      sampleThree='',
      sampleFour='',
      sampleFive='',
      sampleSix='',
      sampleSeven='',
      sampleEight='',
      priv=form.data['priv'],
      createdAt=datetime.now,
    )
    print('hello')
    db.session.add(sampler)
    db.session.commit()
    print('hello2')
    return sampler.to_dict()
  else:
    print('hello error')
    return {'error': "Something went wrong, please try again."}
