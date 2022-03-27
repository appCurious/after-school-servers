# After School Server
Is designed for learning about web technolgy and api data
It is specifically for after school programs to help students learn about technology

## Get Started
set up the self signed https certs
```
  npm run setup

```
## Run the server
start the server and local host
```
  npm run-script run
```

## Api List
 display a list of routes 
 ```
 http request https://localhost:15776/afterschool/api/v1/list
 ```

## Linux Setup
I should probably script this 

### change package.json run script
```
"run": "sudo node --experimental-modules server.mjs --port 80"
```

### self signed certs are a problem
I've been running on a raspberry pi and the self signed certs are an issue so i change the server back to http

```
  sudo openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365 -nodes
```