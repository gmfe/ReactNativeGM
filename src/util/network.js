import {NetInfo} from 'react-native';
import Toast from '../toast';

let isInit = false;

const afterGetReach = (reach) => {
    if (reach === 'none') {
        Toast.info('设备处于离线状态');
    } else if (reach === 'unknown') {
        Toast.info('发生错误，网络状况不可知');
    }
};

const init = () => {
    if (isInit) {
        return;
    }
    NetInfo.fetch().done(afterGetReach);
    NetInfo.addEventListener('change', afterGetReach);
};

const Network = {
    turnOnAutoNetworkToast(){
        init();
    }
};

export default Network;