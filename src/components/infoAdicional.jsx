import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/InfoAdicional.scss';


const InfoAdicional = ({lenguage}) =>(
	<div className='infoAdicional'>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores a ipsa, illum harum dolorem optio mollitia ex voluptatum cumque accusantium animi laudantium veritatis in unde dolores aperiam quam, ducimus voluptate.</p> <br/>
		< p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius molestiae minima impedit ipsum similique quasi ex repellat autem nostrum, tempore consequatur quaerat nemo facilis assumenda commodi, ipsa voluptatem officia maiores.</p>
		<button>Descargar CV</button>
	</div>
);

const mapStateToProps = state =>{
	return({
		lenguage: state
	});
};

export default connect(mapStateToProps, null)(InfoAdicional);