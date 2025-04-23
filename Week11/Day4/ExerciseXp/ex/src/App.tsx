import './App.css'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import UserList from './components/UserList'

function App() {
 

  return (
    <>
       <div className="App">
      {/* <Greeting name="Alice" messageCount={3} /> */}
      {/* <Counter/> */}
      {/* <UserCard name="bobik" age={30} role={<strong style={{ color: 'green' }}>Gogi</strong>} />
      <UserCard name="Bob" age={25} /> */}
      <UserList />
    </div>
    </>
  )
}

export default App
