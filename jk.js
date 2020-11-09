const puppeteer = require('puppeteer')

async function start () {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--proxy-server=20.43.156.27']
  })
  const page = await browser.newPage()
  await page.goto('https://whatismyipaddress.com/')
}
start()
