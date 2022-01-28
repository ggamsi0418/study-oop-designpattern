import {IObserver, ISubject} from '../interfaces';

export class WeatherData implements ISubject {
  private observers: IObserver[] = [];
  private temperature = 0;
  private humidity = 0;
  private pressure = 0;

  /*
   * observer 신규 등록 메소드
   */
  registerObserver(o: IObserver): void {
    this.observers.push(o);
  }

  /*
   * observer의 구독 해지 메소드
   */
  removeObserver(o: IObserver): void {
    console.log('\n구독해지 before: ', this.observers);

    this.observers.forEach((observer, index) => {
      if (observer.getName() === o.getName()) {
        console.log(`\n해지를 요청한 observer(${o.getName()})를 찾았습니다!!`);
        this.observers.splice(index, 1);
      }
    });

    console.log('\n구독해지 after: ', this.observers);
  }

  /*
   * 등록된 observer들에게 데이터를 전달하는 메소드
   */
  notifyObservers(): void {
    if (this.observers.length === 0) {
      console.log('\n구독중인 display가 없습니다!');
    } else {
      this.observers.map(observer => {
        observer.update(this.temperature, this.humidity, this.pressure);
      });
    }
  }

  /*
   * 데이터 갱신을 감지하는 메소드
   */
  measurementsChanged(): void {
    this.notifyObservers();
  }

  /*
   * 측정된 기상 데이터가 들어오는 메소드
   */
  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged(); // 데이터 갱신을 감지
  }

  // 기타 메소드
}
