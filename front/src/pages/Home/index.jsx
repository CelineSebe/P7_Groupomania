import React from 'react';
import DefaultImage from '../../assets/profile.jpg'
import PropTypes from 'prop-types'

function Home() {
  const feed = (
    <div>
      <h1> Fil d'actualités </h1>
    </div>
    );

    return feed
}

const feedProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultImage,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultImage,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultImage,
  }, 
]

function feed() {
  return (
      <div>
          <h1>Utilisateurs 👩‍💻👨‍💻👩‍💻</h1>
          {feedProfiles.map((profile, index) => (
              <Card
                  key={`${profile.name}-${index}`}
                  jobTitle={profile.jobTitle}
                  image={profile.image}
                  description={profile.description}
              />
          ))}
      </div>
  )
}

function Card({ image, description, jobTitle }) {
  return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
          <span>{jobTitle}</span>
          <img src={image} alt="post" height={80} width={80} />
          <span>{description}</span>
      </div>
  )
}

Card.propTypes = {
  jobTitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}


export default Home
