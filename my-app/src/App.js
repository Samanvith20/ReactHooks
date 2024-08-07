
import './App.css';
import Usestate from './hooks/Usestate/Usestate';
import Usereducer from './hooks/Usereducer/Usereducer';
import Useeffect from './hooks/Useeffect/UseEffect';
import Useref from './hooks/Useref/Useref';
import Uselayouteffect from './hooks/UseLayoutEffect/Uselayouteffect';
import Usecontext from './hooks/usecontext/Usecontext';
import Usememo from './hooks/Usememo/Usememo';


function App() {
  return (
    <div className="App">
      <Usestate/>
      <Usereducer/>
      <Useeffect/>
      <Useref/>
      <Uselayouteffect/>
      <Usecontext/>
      <Usememo/>
    </div>
  );
}

export default App;
