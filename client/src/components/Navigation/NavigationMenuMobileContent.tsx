const NavigationMenuMobileContent: React.FC = () => {
  return (
    <div id="app-mobilenav" className="app-mobilenav">
      <div className="position-relative width-full height-full">
        <div className="app-mobilenav-content">
          <ul className="app-mobilenav-list">
            <li className="app-mobilenav-list-item-elevated">
              <a href="/" className="app-mobilenav-link">
                Check
              </a>
            </li>
            <li className="app-mobilenav-list-item-elevated">
              <a href="/" className="app-mobilenav-link">
                Account
              </a>
            </li>
          </ul>
        </div>
        <div className="app-mobilenav-menutrigger">
          <label
            htmlFor="app-nav-menustate"
            className="app-mobilenav-menutrigger-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenuMobileContent;
