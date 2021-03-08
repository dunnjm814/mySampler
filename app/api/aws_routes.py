from flask import Blueprint, jsonify, session, request
from flask_login import login_required
import boto3
import botocore
import json
from app.config import Config
from app.helpers import *
from datetime import datetime
from app.models import db, Sampler



aws_routes = Blueprint('/aws', __name__)


@aws_routes.route('/sampler/<int:samplerId>', methods=['PUT'])
@login_required
def set_sampler(samplerId):
  sampler = Sampler.query.filter_by(id=samplerId).first()
  print('hey its my sampler id!', samplerId)
  audioFile = request.files["sampleFile"]
  print('hey its my audioFile', audioFile)
  print("hey its my request data?", request.form.get('sampleKey'))
  sampleKey = request.form.get('sampleKey')
  strSampleKey = str(sampleKey)
  print('hey its my sample key', sampleKey)
  if audioFile and sampler:
    audio_url = upload_file_to_s3(audioFile, Config.S3_BUCKET)
    print('hey its my aws url', audio_url)
    print('hey its my sampler,to_dict', sampler.to_dict())
    sampler[f"{sampleKey}"] = audio_url
    # sampler.sampleOne = audio_url this works for some reason
    # print('hey its my sampler[sampleKey] after', sampler.sampleKey)
    print('hey its my sampler,to_dict again', sampler.to_dict())
    db.session.add(sampler)
    db.session.commit()
    return sampler.to_dict()
  else:
    return {'error': 'something went wrong :('}
