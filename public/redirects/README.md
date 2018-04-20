# Redirect Pages

Many websites use the Open Graph Protocol to populate information about about websites. For example, LinkedIn scrapes OGP tags to provide website information on profile links.

OGP works with `meta` tags in the `head` of an HTML document. Since this is an SPA with routing implemented using 404 redirection, I cannot populate those `meta` tags for the appropriate pages beforehand.

Instead I'm populating the correct meta tags on these static HTML pages which redirect to the desired React page after one second.