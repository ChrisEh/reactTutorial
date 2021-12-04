import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:40pm',
        reminder: true, 
    },
    {
        id: 2,
        text: 'Meeting Susan',
        day: 'Feb 6th at 1:40pm',
        reminder: true, 
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'Mar 1st at 2:30pm',
        reminder: false,
    },
])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

// Also possible to use classes instead of methods.
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
