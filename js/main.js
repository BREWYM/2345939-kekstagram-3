import './data.js';
import './util.js';
import './form.js';
import './validation.js';
import './scale.js';
import './effects.js';
import { drawPhotos } from './draw.js';
import { getPhotos } from './data.js';
import { generatePhotosArray} from './random-data.js';
import { showDownloadAlert } from './alerts.js';


const DESCRIPTIONS_NUMBER = 25;

const drawPhoto = () =>
  getPhotos(
    (data) => drawPhotos(data.slice(0, DESCRIPTIONS_NUMBER)),
    () => {
      showDownloadAlert();
      drawPhotos(generatePhotosArray(DESCRIPTIONS_NUMBER));
    }
  );

drawPhoto();
