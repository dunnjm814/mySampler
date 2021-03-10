from .db import db
from flask_login import UserMixin

class Profile(db.Model, UserMixin):
  __tablename__ = 'profile'

  id = db.Column(db.Integer, primary_key=True)
  bio = db.Column(db.String(500))
  name = db.Column(db.String(40))
  location = db.Column(db.String(200))
  website = db.Column(db.String)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

  user = db.relationship("User", back_populates="profile")

  def to_dict(self):
    return {
      "id": self.id,
      "bio": self.bio,
      "name": self.name,
      "location": self.location,
      "website": self.website,
      "user_id": self.user_id,
    }
