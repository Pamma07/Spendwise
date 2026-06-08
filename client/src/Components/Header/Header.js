import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../../hook/useLogout";
import { useAuthContext } from "../../hook/useAuthContext";
import facIcon from '../../img/pft-icon.png';

const Header = ({ isDarkMode }) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <HeaderStyled isDarkMode={isDarkMode}>
      <div className="content">
        <div className="logo">
          <img src={facIcon} alt="PFT Icon" className="icon" />
          <h1 className={isDarkMode ? "dark-mode-text" : ""}>
            Welcome to the Personal Finance Tracker
          </h1>
        </div>

        <nav>
          <div className="nav-items">
            {user ? (
              <>
                <span className="user-email">{user.email}</span>
                <button onClick={handleClick} className="logout-btn">
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background-color: ${(props) => (props.isDarkMode ? "#222" : "#fff")};
  color: ${(props) => (props.isDarkMode ? "#fff" : "#222")};
  padding: 20px;

  .content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .logo {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .icon {
    width: 32px;
    height: 32px;
  }

  h1 {
    font-size: 20px;
    margin: 0;
  }

  .dark-mode-text {
    color: #fff;
  }

  nav {
    display: flex;
  }

  .nav-items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
  }

  .user-email {
    font-weight: bold;
  }

  .logout-btn {
    background-color: #3b82f6;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #2563eb;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => (props.isDarkMode ? "#90cdf4" : "#1d4ed8")};
    font-weight: 500;

    &:hover {
      color: ${(props) => (props.isDarkMode ? "#fff" : "#dc2626")};
    }
  }

  @media (max-width: 600px) {
    .content {
      flex-direction: column;
      align-items: flex-start;
    }

    .nav-items {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default Header;
