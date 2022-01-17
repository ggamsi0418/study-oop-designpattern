import {IDisplayElement, IObserver, ISubject} from '../interfaces';

export class CurrentConditionsDisplay implements IObserver, IDisplayElement {
  private temperature = 0;
  private humidity = 0;
  private weatherData: ISubject;

  constructor(weatherData: ISubject) {
    this.weatherData = weatherData; // 추후에 구독 해제를 하기 위해 주제 객체에 대한 정보를 저장
    weatherData.registerObserver(this); // CurrentConditionsDisplay 인스턴스 생성과 함께 Observer로 등록
  }

  /*
   * weatherData(subject)로부터 전달 받은 데이터로 업데이트 하는 메소드
   */
  update(temperature: number, humidity: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display(); // 업데이트된 데이터를 디스플레이로 출력
  }

  /*
   * observer의 이름을 전달하는 메소드
   */
  getName(): string {
    return CurrentConditionsDisplay.name;
  }

  /*
   * 새롭게 업데이트된 데이터를 디스플레이에 출력하는 메소드
   */
  display(): void {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`
    );
  }
}
