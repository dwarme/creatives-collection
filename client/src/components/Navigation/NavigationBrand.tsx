import { assets } from "../../utils/constants";

const NavigationBrand: React.FC = () => {
  return (
    <div className="app-nav-brand">
      <div className="app-nav-brand__logo">
        <img alt="App Logo" src={assets.logo.app} />
      </div>
      <div className="app-nav-brand__name">
        <a href="/">App</a>
      </div>
    </div>
  );
};

export default NavigationBrand;
