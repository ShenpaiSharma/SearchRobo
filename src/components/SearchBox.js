import React from 'react';

const SearchBox = ({ searchfield, serachChange }) => {
	return (
		<div className='pa2'>	
			<input 
			className='pa3 ba b--green bg-lightest-blue' 
			type = 'search' 
			placeholder='search robots'
			onChange={serachChange} 
			/>
		</div>			
	);

}

export default SearchBox;