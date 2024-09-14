Website: [https://app.innerpage.org](https://app.innerpage.org)

## Technologies Used

- **Frontend**: [Stencil](https://stenciljs.com/)
- **Server**: [Node](https://nodejs.org/en), [Express](https://expressjs.com/)

<br/>

## Installation

- Clone the repository <br/>

  ```
    git clone https://github.com/innerpage/webapp__dev.git
    cd webapp__dev
  ```

- Install dependencies <br/>
  ```
    ./init.sh
  ```

<br/>

## Build

- Build the code <br/>

  ```
    ./build.sh
  ```

<br/>

## Deployment

- [Configure Nginx as Reverse Proxy for Node](https://www.digitalocean.com/community/tutorials/nginx-reverse-proxy-node-angular)
- Use [PM2](https://pm2.keymetrics.io/) to serve the webapp e.g.
  `pm2 start index.js --name innerpage-webapp --watch`

<br/>

## Contributing

Feel free to contribute by opening pull requests or reporting issues.
