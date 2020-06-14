import React from "react";

const WorkItem = props => {
	return (
		<li className="workItem">
			<img src="" alt="" />
			<h3 className="workItem-category">{props.category}</h3>
			<h3 className="workItem-title">{props.title}</h3>
		</li>
	);
};

export default WorkItem;
