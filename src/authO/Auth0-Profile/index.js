import React from 'react';

export const Profile = user => {
  const { firstName, lastName, email, age } = user;

  return (
    <>
      <div className="profileCard">
        <div className="card-container">
          <span className="pro">PRO</span>
          <img
            className="round"
            src="https://ih1.redbubble.net/image.219560033.4600/st,small,507x507-pad,600x600,f8f8f8.u6.jpg"
            alt="user"
            height={'150'}
            width={'150'}
          />
          <h3>First Name {firstName}</h3>
          <h3>Last Name {lastName}</h3>
          <h6>Email.... {email}</h6>
          <h6>Age {age}</h6>

          <div className="skills">
            <h4>Example Skills</h4>
            <ul>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
