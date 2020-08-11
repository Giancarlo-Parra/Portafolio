import React from 'react';
import '../assets/styles/components/Profile.scss';

const Profile = ({lenguage}) => (
	<section className='profile'>
		<h1>{lenguage.perfil_profecional.title}</h1>
		<p>{lenguage.perfil_profecional.content}</p>
	</section>
);

export default Profile;