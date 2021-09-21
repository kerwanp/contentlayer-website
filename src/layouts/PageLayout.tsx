import type { FC } from "react";

import { Layout } from "../components/Layout";
import type * as types from ".contentlayer/types";

export const PageLayout: FC<{ page: types.Page }> = ({ page }) => {
  return (
    <Layout doc={page}>
      <div className="max-w-2xl mx-auto py-8">
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.body.html }} />
      </div>
    </Layout>
  );
};