import {
  CloudyHeavyRainIcon,
  CloudyIcon,
  CloudyMoonIcon,
  CloudyMoonLittleRainIcon,
  CloudyMoonModerateRainIcon,
  CloudySunnyIcon,
  CloudySunnyLittleRainIcon,
  CloudySunnyModerateRainIcon,
  FrostIcon,
  FrostyRainIcon,
  IconProps,
  MoonIcon,
  SunnyIcon,
  UnknownWeatherIcon
} from "@/components/svgs";
import { FC } from "react";

export function getWindDirection(degree: number) {
  if (typeof degree !== "number") return "N/A";
  degree = degree % 360;
  if ((degree >= 0 && degree < 22.5) || degree >= 337.5) {
    return "North wind";
  } else if (degree >= 22.5 && degree < 67.5) {
    return "Northeast wind";
  } else if (degree >= 67.5 && degree < 112.5) {
    return "East wind";
  } else if (degree >= 112.5 && degree < 157.5) {
    return "Southeast wind";
  } else if (degree >= 157.5 && degree < 202.5) {
    return "South wind";
  } else if (degree >= 202.5 && degree < 247.5) {
    return "Southwest wind";
  } else if (degree >= 247.5 && degree < 292.5) {
    return "West wind";
  } else if (degree >= 292.5 && degree < 337.5) {
    return "Northwest wind";
  }
}

export function getRainDescription(rainAccumulation: number) {
  if (typeof rainAccumulation !== "number") return "N/A";
  if (rainAccumulation <= 0) {
    return "No rain";
  } else if (rainAccumulation > 0 && rainAccumulation <= 2.5) {
    return "Light rain";
  } else if (rainAccumulation > 2.5 && rainAccumulation <= 7.6) {
    return "Moderate rain";
  } else if (rainAccumulation > 7.6 && rainAccumulation <= 50) {
    return "Heavy rain";
  } else if (rainAccumulation > 50 && rainAccumulation <= 100) {
    return "Very heavy rain";
  } else {
    return "Extreme rain";
  }
}

export function getTemperatureDescription(temperature: number) {
  if (typeof temperature !== "number") return "N/A";
  if (temperature < -10) {
    return "Very Frosty";
  } else if (temperature >= -10 && temperature < 0) {
    return "Freezing";
  } else if (temperature >= 0 && temperature < 10) {
    return "Cold";
  } else if (temperature >= 10 && temperature < 20) {
    return "Cool";
  } else if (temperature >= 20 && temperature < 30) {
    return "Warm";
  } else if (temperature >= 30 && temperature < 40) {
    return "Hot";
  } else if (temperature >= 40 && temperature < 50) {
    return "Very Hot";
  } else {
    return "Extremely hot";
  }
}

export function getHumidityDescription(humidity: number) {
  if (typeof humidity !== "number") return "N/A";
  if (humidity < 30) {
    return "Dry";
  } else if (humidity >= 30 && humidity < 60) {
    return "Comfortable";
  } else if (humidity >= 60 && humidity < 80) {
    return "Humid";
  } else {
    return "Very humid";
  }
}

export function getWindSpeedDescription(windSpeed: number) {
  if (typeof windSpeed !== "number") return "N/A";
  if (windSpeed < 1.5) {
    return "Calm";
  } else if (windSpeed >= 1.5 && windSpeed < 5.5) {
    return "Light breeze";
  } else if (windSpeed >= 5.5 && windSpeed < 10.8) {
    return "Gentle breeze";
  } else if (windSpeed >= 10.8 && windSpeed < 17.2) {
    return "Moderate breeze";
  } else if (windSpeed >= 17.2 && windSpeed < 24.5) {
    return "Strong breeze";
  } else {
    return "High wind";
  }
}

export function isDaytimeInIndia() {
  const currentDate = new Date();
  const utcHours = currentDate.getUTCHours();
  const utcMinutes = currentDate.getUTCMinutes();
  // IST is UTC + 5:30
  const istHours = (utcHours + 5 + Math.floor((utcMinutes + 30) / 60)) % 24;
  // Assuming approximate sunrise at 6:00 AM IST and sunset at 6:00 PM IST
  const sunriseHour = 6;
  const sunsetHour = 18;
  return istHours >= sunriseHour && istHours < sunsetHour;
}

export function getWeatherIcon(
  rainDescription: string,
  temperatureDescription: string,
  humidityDescription: string,
  isDaytime: boolean
): FC<IconProps> {
  if(temperatureDescription==="N/A"&&rainDescription==="N/A"&&humidityDescription==="N/A"){
    return UnknownWeatherIcon
  }
  // Base on the temperature
  if (
    temperatureDescription.includes("Frosty") ||
    temperatureDescription.includes("Freezing")
  ) {
    if (rainDescription !== "No rain") {
      return FrostyRainIcon;
    } else {
      return FrostIcon;
    }
  }
  // Base on the rain description
  if (rainDescription === "Light rain") {
    return isDaytime ? CloudySunnyLittleRainIcon : CloudyMoonLittleRainIcon;
  } else if (rainDescription === "Moderate rain") {
    return isDaytime ? CloudySunnyModerateRainIcon : CloudyMoonModerateRainIcon;
  } else if (
    rainDescription === "Heavy rain" ||
    rainDescription.includes("Very heavy") ||
    rainDescription.includes("Extreme")
  ) {
    return CloudyHeavyRainIcon;
  }
  // Base on the cloudiness (assumed from humidity)
  if (humidityDescription.includes("Dry")) {
    return isDaytime ? SunnyIcon : MoonIcon;
  } else if (humidityDescription.includes("Comfortable")) {
    return isDaytime ? CloudySunnyIcon : CloudyMoonIcon;
  } else {
    return CloudyIcon;
  }
}
