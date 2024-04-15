const { AsyncSeriesHook } = require('tapable');

class HYComplier {
    constructor() {
        // 1.创建hooks
        this.hooks = {
            // 同步钩子
            seriesHook: new AsyncSeriesHook(['name', 'age'])
        }

        // 2.用hooks监听事件（自定义plugin）
        this.hooks.seriesHook.tapAsync("event1", (name, age, callback) => {
            setTimeout(() => {
                console.log('event1事件监听执行了', name, age);
                callback();
            }, 3000);
        });

        this.hooks.seriesHook.tapAsync("event2", (name, age, callback) => {
            setTimeout(() => {
                console.log('event2事件监听执行了', name, age);
                callback();
            }, 3000);
        });
    }
}

const compiler = new HYComplier();
// 3.触发事件
setTimeout(() => {
    compiler.hooks.seriesHook.callAsync("yjm", 22, () => {
        console.log('所有的事件监听执行完毕了');
    });
}, 0);