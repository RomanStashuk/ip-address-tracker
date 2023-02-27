class IpgeolacationService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  static API_KEY = '7c1f59985c29423c939466d269341b2e';

  async getData(ip = '') {
    try {
      const request = new Request(`${this.url}${ip}`);
      return useRequest(request);
    } catch (err) {
      console.error(err);
    }
  }
}

async function useRequest(request) {
  const response = await fetch(request);
  return await response.json();
}

const ipgeolocationService = new IpgeolacationService(
  `https://api.ipgeolocation.io/ipgeo?apiKey=${IpgeolacationService.API_KEY}&ip=`
);

export { ipgeolocationService };
