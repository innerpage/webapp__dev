## Clone repo

- `git clone git@github.com-projckt:projckt/starter_webapp-dev.git dev`
- `cd dev`

## Edit remote of cloned repo

- Change to `git remote set-url origin git@github.com-{username}:{username}/{repo_name}__dev.git`

## Install dependencies

- `./init.sh`

## Edit ./build.sh

- Change production repo to `git@github.com-{username}:{username}/{repo_name}__prod.git`

## Edit ./frontend/package.json

- Change `name`
- Change `description`

## Edit ./frontend/src/index.html

- Change `<meta name="description">`
- Change `<title></title>`
- Change `/add/link/to/icon.png`
- Change `/add/link/to/favicon.ico`

## Edit ./frontend/src/manifest.json

- Change `name`
- Change `short_name`
- Change `icons.src`

## Edit ./frontend/stencil.config.ts

- Change `baseUrl` in `outputTargets`

## Edit ./frontend/src/global/script/vars/Var.ts

- Change `Var.api.url` for production
- Change `Var.keys.oauth.google.clientId`
