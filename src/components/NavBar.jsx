
import { Link } from 'react-router-dom'
import logo from '../assets/diyassistv10.png'

export default function NavBar() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', background: '#1e88e5' }}>
      <Link to="/">
        <img src={logo} alt="DIY Assist Logo" style={{ height: '50px' }} />
      </Link>
      <div style={{ marginLeft: 'auto' }}>
        <Link to="/client" style={{ margin: '0 15px', color: '#fff' }}>Clients</Link>
        <Link to="/provider" style={{ margin: '0 15px', color: '#fff' }}>Providers</Link>
      </div>
    </nav>
  )
}
