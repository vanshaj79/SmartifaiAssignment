import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import Loader from "./Loader";
import Slider from "react-slick";

const WeatherData = () => {
  //States
  const [WeatherData, setweatherData] = useState({});
  const [loading, setloading] = useState(false);
  const [airQuality,setairQuality] = useState({});

  //Fetch function
  const fetchData = async (countryName) => {
    try {
      setloading(true);
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d7177c4764ed4e36a00192654240806&q=${countryName}&aqi=yes`);
      const finalData = await response.json();
      setloading(false);
      setweatherData({ ...finalData });
      setairQuality(finalData?.current?.air_quality);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  console.log(WeatherData,"weather")

  console.log(airQuality,"airquality")

  const state = {
    options: {
      chart: {
        type: 'donut'
      },
      labels: ["co", "gb-defra-index", "no2", "o3", "pm2_5", "pm10", "so2", "us-epa-index"],
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        itemMargin: {
          horizontal: 5,
          vertical: 5
        }
      }
    },
    series: Object.values(airQuality),
  };

  // for Carousel
  const settings = {
    className:"myslider",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
  };

  useEffect(() => {
    fetchData("India");
  }, []);

  return (
    <div className="sm:ms-[200px] ms-[100px] transition-all ease-in-out">
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-[20px]">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4  rounded-md focus:bg-slate-500"
            onClick={() => fetchData("India")}
          >
            India
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-md focus:bg-slate-500"
            onClick={() => fetchData("London")}
          >
            London
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-md focus:bg-slate-500"
            onClick={() => fetchData("Russia")}
          >
            Russia
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-md focus:bg-slate-500"
            onClick={() => fetchData("France")}
          >
            France
          </button>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {/*  metrices */}
          <div className="col-span-12 sm:col-span-6">
            <div className="grid grid-cols-12 gap-4 p-2">
              <div className="bg-gray-300 h-[140px] col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 rounded-2xl">
                <h4 className="ms-2 mt-1 font-semibold">Condition</h4>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={WeatherData?.current?.condition?.icon}
                    className=" h-[80px]"
                    alt="icon.png"
                  ></img>
                  <p>{WeatherData?.current?.condition?.text}</p>
                </div>
              </div>
              <div className="bg-gray-300 h-[140px] col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 rounded-2xl">
                <h4 className="ms-2 mt-1 font-semibold">Humidity</h4>
                <div className="flex flex-col gap-5 mt-4 justify-center items-center">
                  <i className="fa-solid fa-droplet text-3xl"></i>
                  <p>{WeatherData?.current?.humidity}</p>
                </div>
              </div>
              <div className="bg-gray-300 h-[140px] col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 rounded-2xl">
                <h4 className="ms-2 mt-1 font-semibold">Temperature</h4>
                <div className="flex flex-col gap-5 mt-4 justify-center items-center">
                  <i className="fa-solid fa-temperature-low text-3xl"></i>
                  <p>{WeatherData?.current?.temp_c}</p>
                </div>
              </div>
              <div className="bg-gray-300 h-[140px] col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 rounded-2xl">
                <h4 className="ms-2 mt-1 font-semibold">Precipitation</h4>
                <div className="flex flex-col gap-5 mt-4 justify-center items-center">
                  <i className="fa-solid fa-cloud-showers-heavy text-3xl"></i>
                  <p>{WeatherData?.current?.precip_mm}</p>
                </div>
              </div>
              <div className="bg-gray-300 h-[140px] col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 rounded-2xl">
                <h4 className="ms-2 mt-1 font-semibold">Wind</h4>
                <div className="flex flex-col gap-5 mt-4 justify-center items-center">
                  <i className="fa-solid fa-wind text-3xl"></i>
                  <p>{WeatherData?.current?.wind_kph}</p>
                </div>
              </div>
              <div className="bg-gray-300 h-[140px] col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 rounded-2xl">
                <h4 className="ms-2 mt-1 font-semibold">AQI</h4>
                <div className="flex flex-col gap-5 mt-4 justify-center items-center">
                  <i className="fa-brands fa-airbnb text-3xl"></i>
                  <p>{WeatherData?.current?.wind_kph}</p>
                </div>
              </div>
            </div>
          </div>
          {/* carousel */}
          <div className="col-span-12 mx-4 rounded-2xl bg-gray-500 sm:col-span-6 ">
            <Slider {...settings}>
              <div className="bg-gray-500 h-[312px] col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 rounded-2xl">
                <h4 className="ms-2 mt-1 text-center sm:text-3xl text-xl font-bold">
                  Condition
                </h4>
                <div className="flex flex-col gap-10 justify-center items-center">
                  <img
                    src={WeatherData?.current?.condition?.icon}
                    className=" h-[150px]"
                    alt="icon.png"
                  ></img>
                  <p className="font-semibold text-2xl ">
                    {WeatherData?.current?.condition?.text}
                  </p>
                </div>
              </div>
              <div className="bg-gray-500 h-[312px] col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 rounded-2xl">
                <h4 className="ms-2 mt-1 text-center sm:text-3xl text-xl font-bold">
                  Humidity
                </h4>
                <div className="flex flex-col gap-14 mt-12 justify-center items-center">
                  <i className="fa-solid fa-droplet text-7xl"></i>
                  <p className="font-semibold text-2xl ">
                    {WeatherData?.current?.humidity}
                  </p>
                </div>
              </div>
              <div className="bg-gray-500 h-[312px] col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 rounded-2xl">
                <h4 className="ms-2 mt-1 text-center sm:text-3xl text-xl font-bold">
                  Temperature
                </h4>
                <div className="flex flex-col gap-14 mt-12 justify-center items-center">
                  <i className="fa-solid fa-temperature-low text-7xl"></i>
                  <p className="font-semibold text-2xl ">
                    {WeatherData?.current?.temp_c}
                  </p>
                </div>
              </div>
              <div className="bg-gray-500 h-[312px] col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 rounded-2xl">
                <h4 className="ms-2 mt-1 text-center sm:text-3xl text-xl font-bold">
                  Precipitation
                </h4>
                <div className="flex flex-col gap-14 mt-12 justify-center items-center">
                  <i className="fa-solid fa-cloud-showers-heavy text-7xl"></i>
                  <p className="font-semibold text-2xl ">
                    {WeatherData?.current?.precip_mm}
                  </p>
                </div>
              </div>
              <div className="bg-gray-500 h-[312px] col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 rounded-2xl">
                <h4 className="ms-2 mt-1 text-center sm:text-3xl text-xl font-bold">
                  Wind
                </h4>
                <div className="flex flex-col gap-14 mt-12 justify-center items-center">
                  <i className="fa-solid fa-wind text-7xl"></i>
                  <p className="font-semibold text-2xl ">
                    {WeatherData?.current?.wind_kph}
                  </p>
                </div>
              </div>
              <div className="bg-gray-500 h-[312px] col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 rounded-2xl">
                <h4 className="ms-2 mt-1 text-center sm:text-3xl text-xl font-bold">
                  AQI
                </h4>
                <div className="flex flex-col gap-14 mt-12 justify-center items-center">
                  <i className="fa-brands fa-airbnb text-7xl"></i>
                  <p className="font-semibold text-2xl ">
                    {WeatherData?.current?.wind_kph}
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="grid grid-cols-12 pt-4">
          <div className="lg:col-span-6 md:col-span-8 col-span-12 bg-gray-300 rounded-md">
            <div className="flex">=
            <Chart
              options={state.options}
              series={state.series}
              labels={state.labels}
              type="donut"
              width="380"
            />
            </div>
          </div>
        </div>
      </div>

      {loading && <Loader />}
    </div>
  );
};

export default WeatherData;
