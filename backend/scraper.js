import axios from "axios";
import * as cheerio from "cheerio";

const scrapeMagicBricks = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $(".mb-ldp__dtls__title--text1").text().trim();
    const price = $("div.mb-ldp__more-dtl__list--value").eq(0).text().trim();

    let location = "";
    $("li.mb-ldp__more-dtl__list--item").each((_, el) => {
      const label = $(el).find(".mb-ldp__more-dtl__list--label").text().trim();
      if (label === "Address") {
        location = $(el).find(".mb-ldp__more-dtl__list--value").text().trim();
      }
    });

    const pictures = [];
    $("div.mb-ldp__premium-dtls__photo__fig img").each((_, el) => {
      const src = $(el).attr("src");
      if (src) pictures.push(src);
    });

    $(
      "div.mb-ldp__dtls__photo__fig img, ul.mb-ldp__dtls__photo__thumbnils img"
    ).each((_, el) => {
      const src = $(el).attr("src");
      if (src) pictures.push(src);
    });

    if (pictures.length === 0) pictures.push("");

    return { title, location, price, pictures };
  } catch (error) {
    return null;
  }
};

export { scrapeMagicBricks };
