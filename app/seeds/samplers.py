from app.models import db, Sampler, User
from datetime import datetime


def seed_samplers():
  user = User.query.filter_by(username = "Demo").first()

  demo_sampler = Sampler(title='Demo Sampler', user=user,
  sampleOne='https://mysampler.s3-us-west-1.amazonaws.com/2021-03-09-09%3A23%3A00.232665-D_BuzzySub_SP_01.wav',
  sampleTwo='https://mysampler.s3-us-west-1.amazonaws.com/2021-03-09-09%3A18%3A11.600867-D_DMaj7ChordElGuitar_01_577.wav',
  sampleThree='https://mysampler.s3-us-west-1.amazonaws.com/2021-03-09-09%3A19%3A09.284266-Fm_RiffBass_01_577.wav',
  sampleFour='https://mysampler.s3-us-west-1.amazonaws.com/2021-03-09-09%3A18%3A36.403297-F_HiFElGuitar_01_577.wav',
  sampleFive="https://mysampler.s3-us-west-1.amazonaws.com/2021-03-09-09%3A02%3A03.182396-Kick_01_713.wav",
  sampleSix="https://mysampler.s3-us-west-1.amazonaws.com/2021-03-09-09%3A13%3A23.693392-Snare_06_729.wav",
  sampleSeven='https://mysampler.s3-us-west-1.amazonaws.com/2021-03-09-09%3A14%3A33.041043-ClosedHiHat_10_729.wav',
  sampleEight='https://mysampler.s3-us-west-1.amazonaws.com/2021-03-09-09%3A15%3A31.175913-OpenHiHat_01_729.wav',
  priv=False,
  createdAt=datetime.now()
  )

  db.session.add(demo_sampler)
  db.session.commit()


def undo_samplers():
    db.session.execute('TRUNCATE samplers CASCADE;')
    db.session.commit()
