import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";

interface AuthHOCProps {
  // Define any additional props needed
}

const AuthHOC = <P extends AuthHOCProps>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  const WithAuth: React.FC<P> = (props) => {
    const user = useSelector((state: RootState) => state.auth.user);

    if (!user) {
      return <Navigate to="/" />;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default AuthHOC;
