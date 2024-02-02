import './App.css';

const data = [
	{ name: "Anom", age: 19, gender: "Male" },
	{ name: "Megha", age: 19, gender: "Female" },
	{ name: "Subham", age: 25, gender: "Male" },
]
function App() {
	return (
		<div className="App">
			<div class="header"></div>
			<div class="content">
				<div class="content-left"></div>
				<div class="content-right">
					<table>
						<tr>
							<th>Name</th>
							<th>Gender</th>
							<th>Age</th>
						</tr>
						{data.map((val, key) => {
							return (
								<tr key={key}>
								<td>{val.name}</td>
								<td>{val.age}</td>
								<td>{val.gender}</td>
								</tr>
								)
							})}
					</table>
				</div>
			</div>
			<div class="footer"></div>
			</div>
			);
		}
		
		export default App;
		