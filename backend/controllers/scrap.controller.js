import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { PrismaClient } from "@prisma/client";
import { scrapeMagicBricks } from "../scraper.js";

const Prisma = new PrismaClient();

const scrapData = asyncHandler(async (req, res) => {
  let scrapStatus;
  const { url } = req.body;

  try {
    if (!url || url.trim() === "") throw new ApiError(400, "url is required");

    scrapStatus = await Prisma.Scrape.create({
      data: { url },
    });

    if (!scrapStatus) throw new ApiError(400, "Invalid URL");

    const scrapedData = await scrapeMagicBricks(url);
    if (!scrapedData) throw new ApiError(500, "Failed to scrape data");

    const updateStatus = await Prisma.Scrape.update({
      where: {
        id: scrapStatus?.id,
      },
      data: {
        ...scrapedData,
        status: "Completed",
      },
    });

    if (!updateStatus)
      throw new ApiError(500, "something went wrong while updating details");

    if (updateStatus?.status !== "Completed") {
      await Prisma.Scrape.update({
        where: {
          id: scrapStatus?.id,
        },
        data: {
          status: "Failed",
        },
      });
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "data scraped successfully", scrapedData));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

export { scrapData };
