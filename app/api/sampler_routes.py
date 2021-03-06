from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from datetime import datetime
import json
from app.config import Config
from app.models import db, Sampler
from app.forms import SamplerForm


sampler_routes = Blueprint('/sampler', __name__)


@sampler_routes.route('/<int:samplerId>')
def get_one_sampler(samplerId):
  sampler = Sampler.query.filter_by(id=samplerId).first()
  print(sampler)
  if sampler:
    print("hey Im in the GETONESAMPLER")
    return sampler.to_dict()
  else:
    return {'errors': 'Sampler not found :('}

@sampler_routes.route('/new', methods=['POST'])
@login_required
def new_sampler():
  form = SamplerForm()
  form['csrf_token'].data = request.cookies['csrf_token']
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
      createdAt=datetime.now(),
    )
    db.session.add(sampler)
    db.session.commit()
    return sampler.to_dict()
  else:
    return {'error': "Something went wrong, please try again."}

@sampler_routes.route('/delete/<int:samplerId>', methods=["DELETE"])
def delete_sampler(samplerId):
  sampler = Sampler.query.filter_by(id=samplerId).first()
  if sampler:
    db.session.delete(sampler)
    db.session.commit()
    return sampler.to_dict()
  else:
    return {'errors': 'something went wrong :('}
