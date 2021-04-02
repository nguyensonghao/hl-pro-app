import OneSignal from 'react-native-onesignal';

import { ONE_SIGNAL_ID } from '../Shared/Constants/Config';

export const registerNoti = () => {
  OneSignal.init(ONE_SIGNAL_ID);
}