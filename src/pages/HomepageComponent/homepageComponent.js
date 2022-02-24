import DirectoryComponent from "../../components/directory/directoyComponent";

import HomePageContainer from "./homePageStyles";

import "./homepageComponent.scss";

const Homepage = () => {
  return (
    <HomePageContainer>
      <DirectoryComponent />
    </HomePageContainer>
  );
};

export default Homepage;
