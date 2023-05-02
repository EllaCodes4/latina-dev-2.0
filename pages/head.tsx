export const title = "Latina Dev";
export const description =
  "Latina Dev is an open-source directory of Latina software engineers at the student, IC, and leadership levels. Our goal is to increase visibility and access to valuable opportunities.";

export default function Head() {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="img/featured-image.png" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {/* For old IEs */}
      <link rel="shortcut icon" href="img/favicons/favicon.ico" />
      {/* For new browsers - multisize ico  */}
      <link
        rel="icon"
        type="image/x-icon"
        sizes="16x16 32x32"
        href="img/favicons/favicon.ico"
      />
      {/* For iPad with high-resolution Retina display running iOS ≥ 7: */}
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="img/favicons/favicon-152-precomposed.png"
      />
      {/* For iPad with high-resolution Retina display running iOS ≤ 6: */}
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="img/favicons/favicon-144-precomposed.png"
      />
      {/* For iPhone with high-resolution Retina display running iOS ≥ 7: */}
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="img/favicons/favicon-120-precomposed.png"
      />
      {/* For iPhone with high-resolution Retina display running iOS ≤ 6: */}
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="img/favicons/favicon-114-precomposed.png"
      />
      {/* For iPhone 6+ */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="img/favicons/favicon-180-precomposed.png"
      />
      {/* For first- and second-generation iPad: */}
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="img/favicons/favicon-72-precomposed.png"
      />
      {/* For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="img/favicons/favicon-57.png"
      />
      {/* For Old Chrome */}
      <link rel="icon" sizes="32x32" href="img/favicons/favicon-32.png" />
      {/* For IE10 Metro */}
      <meta name="msapplication-TileColor" content="#9e0001" />
      <meta
        name="msapplication-TileImage"
        content="img/favicons/favicon-144.png"
      />
      <meta name="theme-color" content="#9e0001" />
      {/* Chrome for Android */}
      <link rel="manifest" href="manifest.json" />
      <link rel="icon" sizes="192x192" href="img/favicons/favicon-192.png" />
    </>
  );
}