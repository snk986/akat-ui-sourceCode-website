rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
# git remote add origin git@github.com:snk986/akat-ui-website.git &&
git remote add origin git@gitee.com:snk986/akat-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://snk986.github.io/akat-ui-website/index.html 
# echo https://snk986.gitee.io/akat-ui-website/#/