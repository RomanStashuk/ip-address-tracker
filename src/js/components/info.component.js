import Component from '../core/component';
import MapComponent from './map.component';

import { ipgeolocationService } from '../services/ipgeolocation.service';

class InfoComponent extends Component {
  constructor(id) {
    super(id);
    this.ip = this.$el.querySelector('#ip');
    this.location = this.$el.querySelector('#location');
    this.timezone = this.$el.querySelector('#timezone');
    this.isp = this.$el.querySelector('#isp');
    this.map = new MapComponent('map');
  }

  init() {
    this.setInfo();
  }

  async setInfo(ip) {
    const data = await ipgeolocationService.getData(ip);
    this.ip.innerText = data.ip;
    this.location.innerText = `${data.country_name}, ${data.city}`;
    this.timezone.innerText = `UTC ${
      String(data.time_zone?.offset).startsWith('-')
        ? data.time_zone?.offset
        : `+${data.time_zone?.offset}`
    }`;
    this.isp.innerText = data.isp;

    this.map.setView(data.latitude, data.longitude);
    this.map.setMarker(data.latitude, data.longitude);

    if (matchMedia('(max-width: 768px)').matches) {
      this.map.addOffset(0, 0.12);
    }
    console.log(data);
  }
}

export default InfoComponent;
