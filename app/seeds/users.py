from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')
    demoTwo = User(username='Demo-Too', email='demo-two@aol.com', password='password2')
    testUser1 = User(username="underbelly" , email='ub-beats@gmail.com', password='!Password1')
    testUser2 = User(username='g-l-killer' , email='gl-slays@gmail.com', password='!Password2')
    testUser3 = User(username='shigeto' , email='shigeto-detroit@gmail.com', password='!Password3')
    testUser4 = User(username='lordquas' , email='konducta@gmail.com', password='!Password4')
    testUser5 = User(username='droptop-golfcart' , email='slowclap@gmail.com', password='!Password5')
    testUser6 = User(username='tbxxcco' , email='concretecactus@gmail.com', password='!Password6')
    testUser7 = User(username='fly-lo' , email='c-murphy@gmail.com', password='!Password7')
    testUser8 = User(username='franky-g' , email='francis@gmail.com', password='!Password8')

    db.session.add(demo)
    db.session.add(demoTwo)
    db.session.add(testUser1)
    db.session.add(testUser2)
    db.session.add(testUser3)
    db.session.add(testUser4)
    db.session.add(testUser5)
    db.session.add(testUser6)
    db.session.add(testUser7)
    db.session.add(testUser8)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
