import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

import Favicons from "./Favicons";
import { IMeta } from "./meta.interface";
import getOnlyText from "./clearText";

import { mergeTitle, siteName } from "../config/seo.config";

const Meta: FC<IMeta> = ({ title, children, description, image }) => {
  const { asPath } = useRouter();
  const currentUrl = `${process.env.APP_URL}${asPath}`;

  return (
    <>
      <Head>
        <title itemProp="headline">{mergeTitle(title)}</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5.0"
        />
        <link rel="manifest" href="/manifest.json" />
        <Favicons />
        {description ? (
          <>
            <meta
              itemProp="description"
              name="description"
              content={getOnlyText(description, 152)}
            />
            <link rel="canonical" href={currentUrl} />

            <meta itemProp="name" content={mergeTitle(title)} />
            <meta itemProp="image" content="" />

            <meta property="og:locale" content="en" />
            <meta property="og:title" content={mergeTitle(title)} />
            <meta
              property="og:description"
              content={getOnlyText(description, 152)}
            />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={image && image} />
            <meta property="og:site_name" content={siteName} />

            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={mergeTitle(title)} />
            <meta
              name="twitter:description"
              content={getOnlyText(description, 152)}
            />
            <meta name="twitter:image" content="" />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
