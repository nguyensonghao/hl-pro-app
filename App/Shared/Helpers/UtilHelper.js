import Toast from 'react-native-simple-toast';

export const numberWithCommas = (val) => {
  if (val) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return val;
}

export const showToast = (message) => {
  Toast.showWithGravity(message, Toast.LONG, Toast.BOTTOM);
}