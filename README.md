# Repro

1. Run `gatsby develop`
2. Visit `http://localhost:8000/about` (no trailing slash here). Note that the About link gets the `activeStyle`.
3. Visit `http://localhost:8000/about/` (now there is a trailing slash!). I expect the About link to get the `activeStyle` in this case as well, but it's not.
