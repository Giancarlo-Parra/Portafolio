import React from 'react';




const Item = ({data}) =>{

	return(
		<>
			{data.proyects.map(element =>(
				<div key={element.id} >
					<h1>{element.Title}</h1>
					<img src="" alt=""/>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nesciunt voluptate natus harum. Cupiditate recusandae non asperiores placeat a pariatur amet modi saepe impedit? Voluptate numquam soluta culpa officia maiores!</p><br/>
					<p>{element.tecnologias}</p><br/>
					<p>{element.fecha}</p><button>ver repositorio</button>
				</div>
			))}
		</>
	)
}


export default Item;