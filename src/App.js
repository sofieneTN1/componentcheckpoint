import './App.css';
import Myname from './myname';
import Myaddress from './Component/Profile/myaddress';
import Myphoto from './Component/Profile/myphoto';

function App() {
  return (
    <div className="row mt-5">
      <div className="col-md-5"></div>
          <div className="col-md-2 text-white card bg-dark">
         <div className="text-center mt-2"><Myphoto/></div> 
            <div className="card-body">
                  <h2 className="card-title"><Myname name="sofiene fliss"/></h2>
                  <div className="card-text text-center"><Myaddress name="Area:39 Street:832 Building:15"/></div>
            </div>
          </div> 
      <div className="col-md-5"></div>

</div>
);
}

export default App;
