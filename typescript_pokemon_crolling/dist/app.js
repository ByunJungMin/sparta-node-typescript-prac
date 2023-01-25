// 크롤링하기위한 puppeteer 모듈 불러오기
import puppeteer from "puppeteer";
// 데이터를 저장하기위해 fs 모듈 불러오기
import fs from "fs";
async function scrape() {
    try {
        const browser = await puppeteer.launch(); // 크로미움으로 브라우저를 연다.
        const page = await browser.newPage(); // 페이지 열기
        await page.goto("http://127.0.0.1:5500"); // 링크 이동
        await page.waitForFunction(() => {
            const cardId = document.querySelector(".card:last-child .card--id");
            return cardId && cardId.textContent === "#100";
        }, { timeout: 5000 });
        const cards = await page.$$(".card"); // cards에 모든 카드정보 배열로 저장
        console.log(cards.length);
        const data = [];
        for (const card of cards) { // cards 를 돌면서 필요한 데이터 수집하여 data 배열에 등록
            const id = await card.$eval(".card--id", (el) => el.textContent);
            const image = await card.$eval(".card--name", (el) => el.getAttribute("src"));
            const name = await card.$eval(".card--name", (el) => el.textContent);
            const details = await card.$eval(".card--details", (el) => el.textContent);
            if (id && image && name && details) {
                data.push({ id, image, name, details });
            }
            else {
                console.log("아이디나 이미지나 이름이나 디테일이 없습니다.");
                return [];
            }
        }
        await page.close(); // page 종료
        await browser.close(); // browser 종료
        return data; // data 리턴 => 리턴한 데이터를 받아서 파일로 쓰기 위함
    }
    catch (error) {
        console.log(error);
        return [];
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
