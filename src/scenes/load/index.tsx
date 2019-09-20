import React from "react";

interface AppLoadingProps {
  error?: string;
}

const AppLoading = ({ error }: AppLoadingProps) => {
  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body has-text-centered">
        <div className="container has-text-centered">
          {!error ? (
            <img
              width="100px"
              src={`${process.env.PUBLIC_URL}/assets/FTW-animated-logo.svg`}
              alt="FTW logo"
            />
          ) : (
            <>
              <h1 className="title is-1 is-spaced">FTW</h1>
              <p className="subtitle">{error}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppLoading;
