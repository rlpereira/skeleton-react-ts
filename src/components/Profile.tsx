import React from 'react'

export interface ProfileProps {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
}

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  const {
    id,
    avatar,
    firstName,
    lastName,
    email
  } = props

  return (
    <li key={id} className='item'>
      <div>
        <img className='img' src={avatar} alt='Profile' />
      </div>
      <div className='info'>
        <p>
          <strong>
            {firstName} {lastName}
          </strong>
        </p>
        <p>{email}</p>
      </div>
    </li>
  )
}

export default Profile
