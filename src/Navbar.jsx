import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <navbar className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
            </div>
        </navbar>
    )
}
export default Navbar;