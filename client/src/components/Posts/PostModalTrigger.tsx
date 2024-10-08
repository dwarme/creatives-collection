import { memo } from "react";
import "./PostModalTrigger.css";

interface PostModalTriggerProps {
  onClick?: () => void;
}

const PostModalTrigger: React.FC<PostModalTriggerProps> = ({ onClick }) => {
  return (
    <div className="post-modal-trigger__container">
      <div className="post-modal-trigger">
        <div className="post-modal-trigger__background">
          <button className="pmt-base" onClick={onClick}>
            <span className="pmt-base__text">Select</span>
            <span className="pmt-base__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                <path d="M25.5,16.5l-5.9,0l0-5.9C19.6,9.7,18.9,9,18,9c-0.9,0-1.5,0.7-1.5,1.5l0,5.9l-5.9,0h0 C9.7,16.4,9,17.1,9,18c0,0.9,0.7,1.5,1.5,1.5l5.9,0l0,5.9c0,0.9,0.7,1.5,1.5,1.5c0.9,0,1.5-0.7,1.5-1.5l0-5.9l5.9,0h0 c0.9,0,1.5-0.7,1.5-1.5C27,17.2,26.3,16.5,25.5,16.5L25.5,16.5z"></path>{" "}
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(PostModalTrigger);
