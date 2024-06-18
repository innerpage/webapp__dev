## Delete old prod & ./server/dest
rm -rf ../prod server/dest
mkdir ../prod

## Build ./server
npm run --prefix server build
rsync -av --delete server/dest/ ../prod
cp server/{.gitignore,package.json,.env} ../prod

## Build ./frontend
npm run --prefix frontend build 
rsync -av --delete frontend/www/ ../prod/www

## Init ../prod
npm --prefix ../prod install

## Init git in ../prod
git init ../prod
git -C ../prod remote add origin git@github.com-innerpage:innerpage/webapp__prod.git

## Push ../prod 
git -C ../prod add --all
git -C ../prod commit -m "Deploy build `date`"
git -C ../prod push origin main --force




