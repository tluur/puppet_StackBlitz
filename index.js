const puppeteer = require('puppeteer');
async (()=>{
try{
  const browser = await puppeteer.launch(headless: false, {executablePath: 'C:\Program Files\Google\Chrome\Application\chrome'})
} catch (e) {
  console.log("Selline viga : ", e)
}
})()
