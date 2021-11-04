import {Link} from 'react-router-dom'
const Success = () => {
  return(
     <>
      <div class="card" style={{"height":"100vh","display":"flex","alignItems":"center","justifyContent":"space-around"}}>
        <h1 style={{"color":"green"}}>Success</h1> 
        <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
        <Link to="/"><h3>Go to Home</h3></Link>
      </div>
    </>
  )
}

export default Success;