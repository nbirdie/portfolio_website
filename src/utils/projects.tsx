import { PortfolioProject } from "../interface";
import weatherApp from "../images/weather_app.png"
import youtubeClone from "../images/youtube_clone.png"

export const projects: PortfolioProject[] = [
    {
        name: "Weather App",
        heading: "Weather App with hourly and daily forecast",
        paragraphs: ["Project for getting temperature, max, min, humidity, real feel, sunrise, sunset, hourly, and daily forecast with fetching data from OpenWeather endpoints.",],
        tech: ["JavaScript", "React", "Tailwind", "luxon", "unicons", "react-toastify"],
        source: "https://github.com/nbirdie/weather_app",
        image: weatherApp,
    },
    {
        name: "Youtube Clone",
        heading: "Youtube clone design with hooks and functional components",
        paragraphs: ["Video uploading app design using React and Styled Components.", "The main purpose of this project is to learn about React hooks and theme change feature."],
        tech: ["React", "Styled-components", "React Router"],
        source: "https://github.com/nbirdie/youtube_clone",
        image: youtubeClone,
    },
]