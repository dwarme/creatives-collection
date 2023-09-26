import React, { ReactNode } from "react";

const FallbaksSuspensePages: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="overlay" style={{ background: "#fff" }}>
      <div className="width-full height-full row justify-content-center align-items-center">
        {children ? children : <p>App Logo Here</p>}
      </div>
    </div>
  );
};

export default FallbaksSuspensePages;
