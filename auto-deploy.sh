if [ -z $1 ]; then
  echo You did\'t key in the log comment;
  exit 1;
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
