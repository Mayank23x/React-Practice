import './App.css'
import Card from './components/card.jsx'
import jobOpenings from './components/jobdata.jsx'
function App() {
  return (
    <div className="App">
      <h1>Job Card Application</h1>
      <div className="card-block">
        {
          jobOpenings.map((job,index) => (
            <div key={index}>
              <Card brandlogo={job.brandLogo} companyname={job.companyName} dateposted={job.datePosted} post={job.post} tag1={job.tag1} tag2={job.tag2} pay={job.pay} location={job.location}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
