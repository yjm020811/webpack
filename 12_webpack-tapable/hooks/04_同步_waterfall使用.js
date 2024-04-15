const { SyncWaterfallHook } = require('tapable');

class HYComplier {
    constructor() {
        // 1.创建hooks
        // waterfull的特点: 上一个事件监听的返回值会作为下一个事件的参数
        this.hooks = {
            // 同步钩子
            waterfallHook: new SyncWaterfallHook(['name', 'age'])
        }

        // 2.用hooks监听事件（自定义plugin）
        this.hooks.waterfallHook.tap("event1", (name, age) => {
            console.log("event1事件监听执行了", name, age);
            return 'hhhh' //这里的返回值会作为下一个事件的参数
        });

        this.hooks.waterfallHook.tap("event2", (name, age) => {
            console.log("event2事件监听执行了", name, age);
        });
    }
}

const compiler = new HYComplier();
// 3.触发事件
setTimeout(() => {
    compiler.hooks.waterfallHook.call("yjm", 22);
}, 2000);