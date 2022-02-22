import { SpinnerContainer, SpinnerOverlay } from "./withSpinnerStyles";

const WithSpinner =
  (WrapedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapedComponent {...otherProps} />
    );
  };

export default WithSpinner;
