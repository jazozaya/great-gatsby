import React from "react";
import { collections as c } from "components/store/constants";
import Collection from "components/store/collection";
import StoreHero from "components/store/utils/storeHero";

import Layout from "components/layout";

export default props => (
  <Layout pathname={props.location.pathname}>
    <StoreHero />
    <Collection collectionId={c.drilling.id} />
  </Layout>
);
