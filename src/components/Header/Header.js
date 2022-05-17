import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from "../../assets/logo-small.png"
import facebook from "../../assets/icons8-facebook-48.png"
import twitter from "../../assets/logo-twitter.png"
import "./Header.css"

const Header = () => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const handleChange = (e) => setSearch(e.target.value)

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/browse/${search}`)
      setSearch("")
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="headerItemOut">
          <div className="">
            <Link to="/">
              <img src={logo} alt="logo"/>
            </Link>
          </div>
          <div>
            <div className="headerItem">
              <Link to="/"><span className="itemInner">Home</span></Link>
              <Link to="https://www.themealdb.com//api.php"><span className="headerItemInner">Api</span></Link>
              <Link to="https://forum.kodi.tv/showthread.php?tid=282387"><span className="headerItemInner">Forum</span></Link>
              <Link to="https://www.facebook.com"><img className="logoHeader" src={facebook} alt="facebook"/></Link>
              <Link to="https://twitter.com"><img className="logoHeader" src={twitter} alt="twitter"/></Link>
              <input className="itemInput"
                     value={search}
                     onChange={handleChange}
                     onKeyPress={handleSearch}
                     autoComplete="on"
                     placeholder="Search"
                     type="text"
                     name="s"/>
              {/*<Link to={`/browse/${search}`}>search</Link>*/}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;