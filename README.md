# telegram-action-starter
Telegram actions starter

Basic app to run telegram-actions. I use pm2 to manage multiple node proccess.

```
git clone git@github.com:silvelo/telegram-action-starter.git
cd  telegram-action-starter
npm install
```

Install pm2 and dependencies
```
npm install -g pm2 typescript ts-node

pm2 install typescript ts-node
```

Generate pm2 file:
```
pm2 ecosystem
```

Configure ecosystem file:

```
module.exports = {
  apps : [{
    name   : "telegram-bot",
    script : "./index.ts",
    cwd: "/home/silvelo/telegram-action-starter/",
    env: {
        "TOKEN": "YOUR_BOT_TOKEN",
        "TRANSMISSION_PATH": "/home/silvelo/telegram-action-starter/config.json"
    }
  }]
}
```

Start app
```
pm2 start ecosytem
```
