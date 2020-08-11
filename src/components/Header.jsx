import React from "react";
import { connect } from 'react-redux';
import Profile from './Profile';
import Hero from './Hero';
import '../assets/styles/Header.scss'



const Header = ({lenguage}) => {
	console.log(lenguage)
	return(
	<header>
		< Hero lenguage={lenguage}/>
		< Profile lenguage={lenguage}/>
	</header>
);}

const mapStateToProps = state =>{
	return({
		lenguage: state
	});
};

export default connect(mapStateToProps, null)(Header);