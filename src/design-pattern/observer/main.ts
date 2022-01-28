import {CurrentConditionsDisplay, WeatherData} from './components';

class WeatherStation {
  static main(): void {
    const weatherData: WeatherData = new WeatherData(); // subject 생성

    const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData); // display 컴포넌트 생성 후 weatherData의 observer로 등록

    weatherData.setMeasurements(80, 65, 30.4); // 데이터 갱신 (1)
    weatherData.setMeasurements(82, 70, 29.2); // 데이터 갱신 (2)
    weatherData.setMeasurements(78, 90, 29.2); // 데이터 갱신 (3)

    weatherData.removeObserver(currentConditionsDisplay); // currentConditionsDisplay의 구독해지

    weatherData.setMeasurements(76, 93, 31.3); // 데이터 갱신 (4)
  }
}

WeatherStation.main();
