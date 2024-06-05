## Clone repo

- `git clone git@github.com-projckt:projckt/starter_webapp-dev.git dev`
- `cd dev`

## Edit remote of cloned repo

- `git remote set-url origin git@github.com-{username}:{username}/{repo_name}-dev.git`

## Install dependencies

- `./init.sh`

## Edit ./build.sh

- Change production repo to `git@github.com-{username}:{username}/{repo_name}-prod.git`

## Edit ./frontend/package.json

- Change `name`
- Change `description`

## Edit ./frontend/src/index.html

- Change `<meta name="description">`
- Change `<title></title>`

## Edit ./frontend/src/manifest.json

- Change `name`
- Change `short_name`

## Edit ./frontend/stencil.config.ts

- Change `baseUrl` in `outputTargets`

## Edit ./frontend/src/global/script/vars/ApiVar.ts

- Change `ApiVar.url` for production
- Change `ApiVar.keys.oauth.google.clientId`
