import SearchComponent from './js/components/search.component';

new SearchComponent('form');

// const searchForm = document.querySelector('#form');
// const searchInput = searchForm.querySelector('#ip-address-input');

// const ipOutput = document.querySelector('#ip');
// const locationOutput = document.querySelector('#location');
// const timezoneOutput = document.querySelector('#timezone');
// const ispOutput = document.querySelector('#isp');

// function setInfo(data) {
//   ipOutput.innerText = data.ip;
//   locationOutput.innerText = `${data.country_name}, ${data.city}`;
//   timezoneOutput.innerText = `UTC ${
//     String(data.time_zone?.offset).startsWith('-')
//       ? data.time_zone?.offset
//       : `+${data.time_zone?.offset}`
//   }`;
//   ispOutput.innerText = data.isp;
//   console.log(data);

//   map.setView(data.latitude, data.longitude);
//   map.setMarker(data.latitude, data.longitude);

//   if (matchMedia('(max-width: 768px)').matches) {
//     map.addOffset(0, 0.12);
//   }
// }

// function searchFormSubmitHandler(evt) {
//   evt.preventDefault();
//   ipgeolocationService.getData(searchInput.value).then(setInfo);
// }

// searchForm.addEventListener('submit', searchFormSubmitHandler);

// document.addEventListener('DOMContentLoaded', () => {
//   ipgeolocationService.getData().then(setInfo);
// });
