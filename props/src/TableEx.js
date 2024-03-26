import React, { Component } from "react";

class TableEx extends Component {
	render() {
		let heading = ["S.No.", "Name", "Course", "Fee", "Email","Contact"];
		let body = [
			["1", "Kapil", "FSD", "90,000", "Kapil@gmail.com", "0987654321"],
			["2", "Aakash", "PGA", "1,25,000", "Aakash@gmail.com", "0987654321"],
			["3", "Mani", "Cibop", "80,000", "Mani@gmail.com", "0987654321"],
			["4", "Yash", "FSD", "90,000", "Yash@gmail.com", "0987654321"],
			["5", "Athi", "FSD", "90,000", "Athi@gmail.com", "0987654321"],
		];
		return (
			<div>
            <style>
                .rows{{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                }}

            </style>
            <h1 style={{color:"green", marginBottom:"50px"}}>Imarticus Learning</h1>
				<Table heading={heading} body={body} />
			</div>
		);
	}
}

class Table extends Component {
	render() {
		let heading = this.props.heading;
		let body = this.props.body;
		return (
			<table style={{ margin:100, width: 500, border: "solid 1px" }}>
				<thead>
					<tr>
						{heading.map((head, headID) => (
							<th key={headID}>{head}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{body.map((rowContent, rowID) => (
						<TableRow
							rowContent={rowContent}
							key={rowID}
						/>
					))}
				</tbody>
			</table>
		);
	}
}

class TableRow extends Component {
	render() {
		let row = this.props.rowContent;
		return (
			<tr className="rows">
				{row.map((val, rowID) => (
					<td key={rowID}>{val}</td>
				))}
			</tr>
		)
	}
}

export default TableEx;
