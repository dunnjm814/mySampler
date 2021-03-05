from flask import Blueprint, jsonify, session, request
from flask_login import login_required
import boto3
import botocore
import json
from app.config import Config
from app.helpers import *
from datetime import datetime
from app.models import db, Sampler


aws_routes = Blueprint('aws', __name__)

@aws_routes.route('/sampler/<int:userId>')
@login_required
def find_user_samplers(userId):
  sampler = Sampler.query.filter(userId=userId).findAll()
  if sampler:
    return sampler.to_dict()
  pass

@aws_routes.route('/sampler/<int:userId>', methods=['PUT'])
@login_required
def set_sampler(userId):
  sampler = Sampler.query.filter_by(userId=userId).first()
  if sampler:
    pass
  else:
    file = request.get_json()
    print('####################################', file)
    return(file)
