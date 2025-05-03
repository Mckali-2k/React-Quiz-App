import { useState } from 'react';
import './App.css';

function App() {
  return (
    <Form />
  );
}

export default App;

function Form() {

  const [bill, setBill] = useState(0);
  const [yourReview, setYourReview] = useState(0);
  const [friendsReview, setFriendsReview] = useState(0);

  function resetForm(e) {
    setBill(0);
    setYourReview(0);
    setFriendsReview(0);
  }

  return(
    <div className='container'>
     <form>
      <label>How much was the bill? </label>
      <input type="Number" value={bill} onChange={(e)=> setBill(e.target.value)}></input> <br></br>

      <label>How did you like the service? </label>
      <select value={yourReview} onChange={(e) => {
        setYourReview(e.target.value)
      }}>
        <option value='0'>it was bad 0%</option>
        <option value='10'>it was good 10%</option>
        <option value='15'>it was very good 15%</option>
        <option value='25'>it was excellent 25%</option>
      </select> <br></br>

      <label>How did your friend find the service? </label>
      <select value={friendsReview} onChange={(e) => {
        setFriendsReview(e.target.value)
      }}>
        <option value='0'>it was bad 0%</option>
        <option value='10'>it was good 10%</option>
        <option value='15'>it was very good 15%</option>
        <option value='25'>it was excellent 25%</option>
      </select> <br></br>

      <Payment bill={bill} yourReview={yourReview} friendsReview={friendsReview}/>
      <Button resetForm={resetForm} />
    </form>
    </div>
  )
}

function Payment({bill, yourReview, friendsReview}) {
  const tipPercentage = (Number(yourReview) + Number(friendsReview)) / 2; 
  const tip = Number(bill) * Number(tipPercentage / 100); 
  const totalBill = Number(bill) + Number(tip);

  return (
   <p>You pay ${totalBill} (${bill} + ${tip} tip)</p>
  );
}

function Button({resetForm}){
  return(
    <button onClick={resetForm}>Reset</button>
  )  
}