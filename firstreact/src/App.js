import './App.css';

function App() {
  return (
    <div className="App">
    <div class="header"></div>
    <div class="content">
        <div class="content-left"></div>
        <div class="content-right">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Male</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>Sam</td>
                        <td>Male</td>
                        <td>19</td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Female</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Peter</td>
                        <td>Male</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>Lisa</td>
                        <td>Female</td>
                        <td>22</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="footer"></div>
    </div>
  );
}

export default App;
