## Clone repo

- `git clone git@github.com-projckt:projckt/starter_website-dev.git dev`
- `cd dev`

## Edit remote

- `git remote set-url origin git@github.com-{username}:{username}/{repo_name}-dev.git`

## Install dependencies

- `./init.sh`

## Edit ./build.sh

- Change production repo to `git@github.com-{username}:{username}/{repo_name}-prod.git`

## Edit ./frontend/package.json

- Change `name`
- Change `description`

## Edit `<meta>` and `<title>`

- Change `<meta name="description">` in ./frontend/src/index.html
- Change `<title></title>`

## Edit ./frontend/src/manifest.json

- Change `name`
- Change `short_name`
- Change `font-family` (Optional)

## Edit ./frontend/stencil.config.ts

- Change `baseUrl` in `outputTargets`

## Edit ./frontend/src/global/script/vars/vars.ts

- Change `api.url` for production

## Edit ./frontend/src/global/script/store/store.ts

- Change `googleClientId`

## Edit ./server/package.json

- Change `name`
- Change `description`

## Edit ./server/index.ts

- Change server `PORT`
