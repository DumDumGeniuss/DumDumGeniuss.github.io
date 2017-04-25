git add .
git commit -m "make my website great again"
yarn deploy
git checkout gh-pages
git pull origin gh-pages
git checkout master
git merge gh-pages
git push origin master
git checkout dev
