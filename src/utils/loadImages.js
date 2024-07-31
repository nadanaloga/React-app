// src/utils/loadImages.js

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assets/img/gallery', false, /\.(png|jpg|jpeg|JPG)$/));
  
  export default images;
  