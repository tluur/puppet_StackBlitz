const puppeteer = require('puppeteer');

const startBrowser = async(() => {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      executablePath: 'C:Program Files/Google/Chrome/Application/chrome',
    });
  } catch (e) {
    console.log('Selline error ', e);
  }
  return browser;
});
module.exports(startBrowser);
