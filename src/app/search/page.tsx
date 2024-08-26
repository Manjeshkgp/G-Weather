import React from "react";
import Search from "@/components/Search";
import { ConfusedEmojiIcon, WindIcon } from "@/components/svgs";
import { notFound } from "next/navigation";
import {
  getHumidityDescription,
  getRainDescription,
  getTemperatureDescription,
  getWeatherIcon,
  getWindDirection,
  getWindSpeedDescription,
  isDaytimeInIndia,
} from "@/lib/helpers";

type APIResponse = {
  status: number;
  message: string;
  device_type: number;
  locality_weather_data: {
    temperature: number;
    humidity: number;
    wind_speed: number;
    wind_direction: number;
    rain_intensity: number;
    rain_accumulation: number;
  };
};

interface Props {
  params: {};
  searchParams: { q?: string; lat?: string; long?: string };
}

export default async function page({ searchParams }: Props) {
  const noRequiredQuery =
    !searchParams.lat || !searchParams.long || !searchParams.q;
  if (noRequiredQuery)
    return (
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 pb-6">
        <div className="w-full lg:w-1/2 aspect-square max-w-md flex justify-center items-center">
          <ConfusedEmojiIcon className="w-[90%] max-h-[28rem] max-w-md" />
        </div>
        <div className="flex flex-col items-center lg:items-start gap-4">
          <p className="text-3xl lg:text-5xl text-primary-800 dark:text-primary-100 font-bold">
            Not Found
          </p>
          <p className="text-base text-primary-800 dark:text-primary-100 font-medium">
            Latitude, Longitude or Query is not given
          </p>
        </div>
      </div>
    );

  let response: APIResponse | undefined;

  try {
    const res = await fetch(
      `${process.env.WEATHER_API_URL}get_weather_data?latitude=${searchParams.lat}&longitude=${searchParams.long}`,
      {
        headers: {
          "X-Zomato-Api-Key": process.env.WEATHER_API_KEY ?? "",
        },
      }
    );
    if (res.ok) {
      response = await res.json();
    }
  } catch (error) {
    console.log({ error });
    notFound();
  }

  if (!response) {
    notFound();
  }
  const data = response.locality_weather_data;
  const windDirection = getWindDirection(data.wind_direction);
  const rainDescription = getRainDescription(data.rain_accumulation);
  const temperatureDescription = getTemperatureDescription(data.temperature);
  const humidityDescription = getHumidityDescription(data.humidity);
  const windSpeedDescription = getWindSpeedDescription(data.wind_speed);
  const isDaytime = isDaytimeInIndia();

  const WeatherIcon = getWeatherIcon(
    rainDescription,
    temperatureDescription,
    humidityDescription,
    isDaytime
  );

  return (
    <div className="flex flex-col w-full mt-14 gap-6 mx-auto max-w-screen-2xl">
      <div className="hidden xl:block" />
      <Search pageSearchQuery={searchParams.q} />

      <div className="w-[90vw] sm:w-[70vw] mx-auto max-w-6xl flex flex-col lg:flex-row justify-center items-center gap-6 pb-6">
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6 p-3 rounded-xl bg-gradient-to-br dark:from-blue-950 dark:via-blue-800 dark:to-blue-900 from-blue-300 to-transparent min-h-80">
          <WeatherIcon className="w-1/3 aspect-square h-full self-center" />
          <div className="relative self-center">
            <p className="absolute -top-2 lg:-top-3 right-0">°C</p>
            <p className="text-7xl lg:text-[7rem]">
              {Math.round(data.temperature??"N/A")}
            </p>
          </div>
          <p>{searchParams.q}</p>
          <p>
            Humidity: {data.humidity??"N/A"}% ({humidityDescription})
          </p>
          <p>Rain intensity: {data.rain_intensity??"N/A"} mm/min </p>
          <p>
            Rain Accumulation: {data.rain_accumulation??"N/A"} mm/h ({rainDescription})
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 min-h-80 gap-3 p-3 items-center">
          <WindIcon className="w-2/3 aspect-square h-full" />
          <p className="text-2xl lg:text-4xl text-center text-primary-900 dark:text-primary-100 font-bold">
            {data.wind_speed??"N/A"} km/h <br /> {windDirection}
          </p>
          <p className="text-xl lg:text-2xl text-center text-primary-900 dark:text-primary-100">
            {windSpeedDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
