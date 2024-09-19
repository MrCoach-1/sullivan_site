#!sh

git add .
git commit -m "Updated site"
git push origin main
npm run deploy
