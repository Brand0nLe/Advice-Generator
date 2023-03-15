//Brandon Le
//3-14-23 @ 9PM
//Advice Generator in React
//With the provided assets I rebuilt a react app that uses bootstrap, css, and html. We used ASYNC to access the advice API and this will be hosted on azure.
//Peer Review By Pedro Castaneda - Excellent work getting the divider svg to alternate between mobile and desktop. Also good job on chaging the favicon. One thing I noticed you missed were the quotes, but  overall great work!

import AdviceGenerator from './advicegeneratorcomponent/AdviceGenerator';
import './advicegeneratorcomponent/AdviceGenerator.css';


function App() {
  return (
    <div className="">
      <AdviceGenerator />
    </div>
  );
}

export default App;