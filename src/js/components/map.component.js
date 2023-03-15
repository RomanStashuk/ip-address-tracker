import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import mapMarkerIconFile from '../../img/icon-location.svg';

import Component from '../core/component';

class MapComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.map = L.map(this.$el, {
      zoom: 10,
      zoomControl: false,
    });

    this.markerIcon = L.icon({
      iconUrl: mapMarkerIconFile,
      iconSize: [26, 30],
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
  }

  setView(latitude, longitude) {
    this.map.setView([latitude, longitude]);
  }

  setMarker(latitude, longitude) {
    L.marker([latitude, longitude], { icon: this.markerIcon }).addTo(this.map);
  }

  addOffset(xProportion, yProportion) {
    const offsetX = this.map.getSize().x * -xProportion;
    const offsetY = this.map.getSize().y * -yProportion;

    this.map.panBy([offsetX, offsetY], {
      animate: false,
    });
  }
}

export default MapComponent;
