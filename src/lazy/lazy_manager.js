import _ from 'lodash';

let eventBus = {};

const LazyManager = {
    add(key, callback){
        eventBus[key] = (eventBus[key] || []).concat(callback);
    },
    remove(key, callback){
        if (eventBus[key]) {
            if (callback) {
                const i = eventBus[key].indexOf(callback);
                if (i > -1) {
                    eventBus[key].splice(i, 1);
                }
            } else {
                delete eventBus[key];
            }
        }
    },
    trigger(key) {
        if (eventBus[key]) {
            const args = [...arguments];

            _.each(eventBus[key], cb => {
                if (typeof cb === 'function') {
                    cb.apply(null, args.slice(1));
                }
            });
        }
    },
    clear(){
        eventBus = {};
    }
};

export default LazyManager;