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

## Edit ./frontend/src/global/script/var/Var.ts

- Change `Var.app.name`
- Change `Var.app.domain`
- Change `Var.app.contact.email`
- Change `Var.app.logo.rectangle.colour`
- Change `Var.app.policy.tos.url`, `Var.app.policy.privacy.url` & `Var.app.policy.cancellationAndRefund.url`
- Change `Var.app.owner.name`, `Var.app.owner.website.url`, `Var.app.owner.contact.address` & `Var.app.owner.contact.email`
- Change `Var.app.url`
- Change `Var.api.url` for production
- Change `Var.keys.oauth.google.clientId`
