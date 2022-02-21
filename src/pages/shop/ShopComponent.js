import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collectionsOverview/collectionsOverview";
import CollectionPage from "../collection/collectionComponent";

const ShopComponent = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopComponent;
