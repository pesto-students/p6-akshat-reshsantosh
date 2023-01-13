import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { IncAction } from './action';
import { DecAction } from './action';

const App = ({locale_varaiable,IncAction,DecAction})=> {
  return(
    <div>
    <center>
   <h1>{locale_varaiable}</h1> <br/>
   <button onClick={IncAction}>Increment</button>
   <button onClick={DecAction}>Decrement</button>
    </center>
    </div>
)
}
const mapStateToProps = state => ({
locale_varaiable : state
})
export default connect(mapStateToProps, {IncAction, DecAction})(App);
