if [ -z $1 ]; then
  echo hi
fi
git add .
git commit -m "$1"
yarn deploy
git checkout gh-pages
git pull origin gh-pages
git checkout master
git merge gh-pages
git push origin master
git checkout dev
