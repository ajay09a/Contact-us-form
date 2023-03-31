function App() {
  const [user, setuser] = useState({
    name: '',
    email: '',
    message: '',
  })
  function getUserData(e){
    setuser(e.target.value)
  }
  const postData = (e)=>{
    console.log(user);
  }
  return (
    <div className="App">
      <header><center><h1>Contact Us</h1></center></header>
      <form>
        <labal>Your Name:</labal>
        <input type='text' name="name" value={user.name} onClick={getUserData} placeholder="Enter Your Name" autoComplete="off" required /><br />
        <labal>Your Email:</labal>
        <input type='email' name="email" value={user.email} onClick={getUserData} placeholder="Enter Your Email" autoComplete="off" required /><br />
        <labal>Your Message:</labal>
        <input type='text' name="message" value={user.message} onClick={getUserData} placeholder="Enter Your Message" autoComplete="off" required /><br />
        <button onClick={postData}>Submit</button>
      </form>
    </div>
  );
}

export default App;
