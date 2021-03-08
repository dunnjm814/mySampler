from .db import db
from flask_login import UserMixin
import datetime

class Sampler(db.Model, UserMixin):
  __tablename__ = 'samplers'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String, nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey("users.id"))
  sampleOne = db.Column(db.String)
  sampleTwo = db.Column(db.String)
  sampleThree = db.Column(db.String)
  sampleFour = db.Column(db.String)
  sampleFive = db.Column(db.String)
  sampleSix = db.Column(db.String)
  sampleSeven = db.Column(db.String)
  sampleEight = db.Column(db.String)
  priv = db.Column(db.Boolean, nullable=False, default=False)
  createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)

  user = db.relationship("User", back_populates="sampler")

  def to_dict(self):
    return {
      'id': self.id,
      'userId': self.userId,
      'sampleOne': self.sampleOne,
      'sampleTwo': self.sampleTwo,
      'sampleThree': self.sampleThree,
      'sampleFour': self.sampleFour,
      'sampleFive': self.sampleFive,
      'sampleSix': self.sampleSix,
      'sampleSeven': self.sampleSeven,
      'sampleEight': self.sampleEight,
      'createdAt': self.createdAt,
      'title': self.title,
      'priv': self.priv,
    }

  def set_sample_key(self, sample_num, value):
    self[sample_num] = value
