import React from 'react';
import { connect } from 'react-redux';
import { changeLenguageToEnglish } from '../actions/changeLenguageTo';
import '../assets/styles/components/NavBar.scss';

const NavBar = (props) => {
	const handleChangeLenguageTo = ()=>{
		props.changeLenguageToEnglish();
	
	}
	
	return(
	<nav>
		
	</nav>
);
	}

const mapDispatchToProps = {
	changeLenguageToEnglish,
}

export default connect(null,mapDispatchToProps)(NavBar);