import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 20,
  duration: '40s',
};

export default function () {
  http.get('http://20.83.18.0');
  sleep(1);
}
