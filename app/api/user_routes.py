from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Profile, db
from app.forms import ProfileForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/profile/<int:user_id>', methods=['PUT'])
def profile_form_submit(user_id):
    form = ProfileForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        profile = Profile.query.filter_by(user_id=user_id).first()
        if profile:
            profile.bio=form.data['bio'],
            profile.name=form.data['name'],
            profile.location=form.data['location'],
            profile.website = form.data['website']
        else:
            profile = Profile(
                bio=form.data['bio'],
                name=form.data['name'],
                location=form.data['location'],
                website=form.data['website']
            )

        db.session.add(profile)
        db.session.commit()
        return profile.to_dict()
