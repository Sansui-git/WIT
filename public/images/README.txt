PUT YOUR PHOTOS IN THIS FOLDER
==============================

Already here:
  logo.png              -> "Edmonton Walk-In Bath Experts" wordmark (transparent background)
  hero.jpg              -> Main hero photo (woman opening the walk-in tub door)
  tub-illustration.png  -> Line drawing of an open-door walk-in tub

Still wanted (the site shows a branded illustration panel until you add them):
  for-seniors.jpg    -> Senior relaxing in the tub          (siteImages.forSeniors)
  tub-overhead.jpg   -> Overhead product photo, jets running (siteImages.tubOverhead)
  tub-installed.jpg  -> Tub installed in a real bathroom     (siteImages.tubInstalled)
  Before/after photos of your own installs                  (siteImages.install1Before ...)

How to add one:
  1. Save the image with the exact name above (all lowercase, ONE ".jpg" --
     watch out for "photo.jpg.jpg", which Windows can hide).
  2. Copy it into this folder (WIT/public/images/).
  3. Open lib/site.ts, find siteImages, and set the matching entry, e.g.
       forSeniors: "/images/for-seniors.jpg",
  4. In GitHub Desktop: Commit to main -> Push origin.

The before/after gallery on the home page appears automatically once a
project has BOTH a before and an after photo set.

Tip: photos around 1600px wide are plenty. Resize huge (4000px+) photos first
so the site loads quickly on phones.
