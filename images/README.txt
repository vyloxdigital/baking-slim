BakingSlim — images folder
==========================

Drop your nine image files into this folder using these exact filenames.
The page references these and nothing else.

File                                   Used where                      Rendered box      Suggested source size
-------------------------------------  ------------------------------  ----------------  ---------------------
bakingslim-hero.webp                   Hero frame (LCP image)          1120 x 840 (4:3)  2240 x 1680
bakingslim-2-bottles-guarantee.webp    Price table, two-bottle column   300 x 300 (1:1)    800 x 800
bakingslim-6-bottles-guarantee.webp    Price table, centre column       300 x 300 (1:1)    800 x 800
bakingslim-3-bottles-guarantee.webp    Price table, three-bottle column 300 x 300 (1:1)    800 x 800
bakingslim-review-1.webp               Photographs, first plate         560 x 420 (4:3)   1120 x 840
bakingslim-review-2.webp               Photographs, second plate        560 x 420 (4:3)   1120 x 840
bakingslim-review-3.webp               Photographs, third plate         560 x 420 (4:3)   1120 x 840
bakingslim-guarantee.webp              Guarantee section seal           300 x 300 (1:1)    800 x 800
favicon.png                            Browser tab + app icon           any                512 x 512

Notes
-----

1. Every image slot uses a fixed CSS aspect-ratio with object-fit: contain.
   Your real files do NOT have to match the ratios above exactly: nothing is
   stretched or cropped, and the layout will not shift while images load
   (cumulative layout shift stays at zero). Matching the ratio only makes the
   box sit more tightly around the artwork.

2. The three package images sit inside the comparison table, in the order
   two / six / three across the columns, with the six-bottle column
   highlighted because it carries the lowest cost per day. On a phone the
   table scrolls sideways rather than stacking, so the columns stay aligned
   with their headings. If you would rather the columns read 2 / 3 / 6 left
   to right, say so and I will reorder them.

3. bakingslim-hero.webp is the Largest Contentful Paint image. It is preloaded
   with fetchpriority="high" and sits in a wide 4:3 frame, so it is the file
   worth compressing hardest — aim for under 80 KB. The other seven are
   lazy-loaded and matter far less to the speed score.

4. bakingslim-review-2.webp is captioned as the certification marks (non-GMO,
   made in USA, GMP certified). If your second photo shows something else,
   swap the FILES around rather than editing the HTML, or tell me and I will
   change the caption.

5. Keep the .webp extension. These filenames appear in index.html, sitemap.xml
   and the Open Graph / Twitter meta tags, so renaming one means editing three
   files.

6. favicon.png should be a square PNG. 512 x 512 covers both the browser tab
   and the Android home-screen icon declared in manifest.json.

7. Export WebP at quality 78-82. Beyond that the file grows without a visible
   gain at these rendered sizes.
