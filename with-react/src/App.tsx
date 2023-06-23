import { useEffect, useState } from 'react';
import './App.css'
import { TeamCard } from './components/TeamCard'

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const response = await fetch('http://localhost:3000/members');
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    }

    fetchMembers();
  }, []);

  console.log('members:', members);

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
