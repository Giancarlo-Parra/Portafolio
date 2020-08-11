import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Habilidades.scss';


const Habilidades = ({lenguage}) =>(
	<div className='habilidades'>
		< p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius molestiae minima impedit ipsum similique quasi ex repellat autem nostrum, tempore consequatur quaerat nemo facilis assumenda commodi, ipsa voluptatem officia maiores.</p>
	</div>
);
const mapStateToProps = state =>{
	return({
		lenguage: state
	});
};
export default connect(mapStateToProps, null)(Habilidades);