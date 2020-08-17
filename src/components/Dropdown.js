import React from "react";

const Dropdown = (props) => {
	const list = props.options.map((option) => {
		return (
			<div
				key={option.value}
				className='item'
				onClick={() => props.onSelectedChange(option)}>
				{option.label}
			</div>
		);
	});

	return (
		<div className='ui form'>
			<div className='field'>
				<label>Select a Color</label>
				<div className='ui selection dropdown visible active'>
					<i className='dropdown icon'></i>
					<div className='text'>{props.selected.label}</div>
					<div className='menu visible transition'>{list}</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
