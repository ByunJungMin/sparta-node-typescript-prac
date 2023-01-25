// 크롤링하기위한 puppeteer 모듈 불러오기
const puppeteer = require("puppeteer");
// 데이터를 저장하기위해 fs 모듈 불러오기
const fs = require("fs");

async function scrape() {
    try {
        const browser = await puppeteer.launch();   // 크로미움으로 브라우저를 연다.
        const page = await browser.newPage();       // 페이지 열기

        await page.goto("http://127.0.0.1:5500/typescript_pokemon");   // 링크 이동
        await page.waitForFunction(() => {          // .card 엘리먼트중에 값이 #100인 .card--id 엘리먼트가 생길때까지 기다림
            document.querySelector(".card:last-child .card--id").textContent === "#100",
            {timeout: 5000}
        });

        const cards = await page.$$(".card");       // cards에 모든 카드정보 배열로 저장
        console.log(cards.length);
        const data = [];

        for (const card of cards) {                 // cards 를 돌면서 필요한 데이터 수집하여 data 배열에 등록
            const id = await card.$eval(".card--id", (el) => {el.textContent});
            const image = await card.$eval(".card--name", (el) => {el.textContent});
            const name = await card.$eval(".card--name", (el) => el.textContent);
            const details = await card.$eval(".card--details", (el) => {el.textContent});
            data.push({id, image, name, details});
        }

        await page.close();                         // page 종료
        await browser.close();                      // browser 종료

        return data;                                // data 리턴 => 리턴한 데이터를 받아서 파일로 쓰기 위함
    } catch (error) {
        console.log(error);
    }
}

scrape()
  .then((data) => {
    fs.writeFile("pokemon.json", JSON.stringify(data), "utf8", (error) => {
      if (error) {
        console.log("파일 생성 중 에러 발생.");
        return console.log(error);
      }
      console.log("파일 생성 완료!");
    });
  })
  .catch((error) => console.log(error));