import React, {useState} from 'react'
import { Modal } from "../../context/Modal";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineSearch } from 'react-icons/ai'
import './search.css'


function Search() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('')
  const [userMatch, setUserMatch] = useState([])
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;

  const searchUsers = async (search) => {
    const res = await fetch('/api/users/')

    if (res.ok) {
      const {users} = await res.json()
      
      let searchResults = users.map((user) => {
        return user.username.replace(/[[\]']+/g, "").replaceAll("\\", "");
      }
      );

      // let searchParse = searchResults.replace(/[[\]']+/g, "");
      // searchParse = searchResults;
      let userSearchMatch = users.filter((user, i) => {
        const regex = new RegExp(`${searchResults[i]}`, "gi")
        if (user.id !== userId) {
        return (
          user.username.match(regex)
          )
        }
      })
      if (search.length === 0) {
        userSearchMatch = []
      }
      setUserMatch([...userSearchMatch])
      setShowModal(true)
    }
  }

  return (
    <div id="search">
      <input
        id="search-input"
        type="search"
        name="search"
        placeholder="Search for friends"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        type="search"
        onClick={() => {
          searchUsers(search);
        }}
      >
        <AiOutlineSearch />
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div id="search-result-container">
            <div id="search-result">
              {userMatch &&
                userMatch.map((user, i) => (
                  <NavLink
                    key={i}
                    to={`/profile/${user.id}`}
                    className="profile-link"
                  >
                    {user.username}
                  </NavLink>
                ))}
              {!userMatch && <h1>{`No users found :(`}</h1>}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
export default Search
