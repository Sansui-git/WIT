PUT YOUR PHOTOS IN THIS FOLDER
==============================

The site expects these exact filenames (all lowercase):

  logo.png           -> Your "Edmonton Walk-In Bath Experts" wordmark
                        (the transparent-background PNG)
  hero.jpg           -> Main hero photo (woman opening the walk-in tub door)
  for-seniors.jpg    -> Photo of the gentleman relaxing in the tub
  tub-overhead.jpg   -> Overhead product photo (tub filled, jets running)
  tub-installed.jpg  -> Tub installed in a real bathroom

How to add them:
  1. Save each image with the exact name above.
  2. Copy them into this folder (WIT/public/images/).
  3. In GitHub Desktop: Commit to main -> Push origin.

OPTIONAL - favicon (browser tab icon):
  Save the illustrated tub drawing as icon.png and place it in the
  WIT/app/ folder (not this folder). The site will automatically use it
  as the browser tab icon.

Tip: photos around 1600px wide are plenty. If a photo is huge (4000px+),
resizing it smaller first will make the site load faster.

To change which photo goes where, edit lib/site.ts -> siteImages.
