This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Working example: https://dev.d20pjp0kel93in.amplifyapp.com/

## Running locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Get your OpenWeatherMapApi key

https://home.openweathermap.org/ > API > Current Weather Data > Subscribe > Free Plan

In config.json replace:
```
"apiKey: "your_api_key"
```
Save, and try it out http://localhost:3000

This app was created as an example project in the US, so by default the params are set to imperial units & US Zip codes. Replace the params as needed.

## AWS

1. Simple as.. creating an AWS account.
2. Pushing your repo to github
3. Connect your github repo to AWS Amplify console.
4. Change 
```
build:
      commands:
        - npm run build
```
to
```
build:
      commands:
        - npm run export
```
in the buildsettings file.
(This aligns with "export": "npm run build && next export" in the package.json file of this project)
5. Add your api key to environment variables in AWS Amplify console in the same step 
6. Save & deploy!
