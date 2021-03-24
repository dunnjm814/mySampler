from flask import Blueprint, jsonify, session, request
from flask_login import login_required
import boto3
import botocore
import json
from app.config import Config
from app.helpers import *
from datetime import datetime
from datetime import date
from datetime import time
from app.models import db, Sampler



aws_routes = Blueprint('/aws', __name__)


@aws_routes.route('/sampler/<int:samplerId>', methods=['PUT'])
@login_required
def set_sampler(samplerId):
  audioFile = request.files["sampleFile"]
  sampleKey = request.form.get('sampleKey')
  if audioFile:
    audioFile.filename = f"{date.today()}-{datetime.time(datetime.now())}-{audioFile.filename}"
    audio_url = upload_file_to_s3(audioFile, Config.S3_BUCKET)
    Sampler.query.filter(Sampler.id == samplerId).update({sampleKey: audio_url})
    sampler = Sampler.query.filter_by(id=samplerId).first()
    db.session.commit()
    return sampler.to_dict()
  else:
    return {'error': 'something went wrong :('}
