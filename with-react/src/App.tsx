import './App.css'
import { TeamCard } from './components/TeamCard'

function App() {

  return (
    <>
      <div>
      <h1>Team Cards</h1>
      <div className="card-container">
        <TeamCard name="Klever Silveira" title="Software Engineer" imgSrc="/klever-silveira.jpeg" />
        <TeamCard name="Jordan Walke" title="Software Engineer" imgSrc="/jordan-walke.jpg" />
        <TeamCard name="Sophie Alpert" title="Software Engineer" imgSrc="/sophie-alpert.jpeg" />
      </div>
    </div>
    </>
  )
}

export default App
