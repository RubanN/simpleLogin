import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="container">
      <button className='btn btn-primary'>Sign Up</button>
      <form onSubmit={(e) => login(e)}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input style={{ width: "49%" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input style={{ width: "49%" }} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
function login(e) {
  e.preventDefault();
  let resquest = {
    email: document.getElementById('exampleInputEmail1').value,
    password: document.getElementById('exampleInputPassword1').value
  }
  axios.post('http://localhost:3000/login', resquest)
    .then(resp => {
      alert(resp.data.message)
    })
    .catch(err => {
      console.log(err);
    })
}
export default App;
