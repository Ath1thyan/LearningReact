// import logo from './logo.svg';
import './App.css';
import Auth from './pages/Auth'

function App() {
  let Model = "A4";

  let cars = {"cars" : [{"Brand" : "Volvo", "Model" : "XC60"}, {"Brand" : "BMW", "Model" : "i7"}, {"Brand" : "Porsche", "Model" : "cayenne"}]}
  return (
    <div className="App">
      <Auth car_brand = "Audi"  car_model = {Model} />
    </div>
  );
}

export default App;
