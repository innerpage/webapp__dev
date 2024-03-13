## Build ./frontend
cd frontend
npm run build --prerender
rsync -av --delete www/ ../../prod

## Init git in ./prod
cd ..
cd ..
cd prod
git init
git remote add origin git@github.com-{username}:{username}/{repo_name}-prod.git

## Push prod 
git add --all
git commit -m "Deploy build `date`"
git push origin main --force

# Reset
cd ..
cd dev

