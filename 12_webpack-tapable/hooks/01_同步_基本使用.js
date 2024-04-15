const { SyncHook } = require('tapable');

class HYComplier {
    constructor() {
        // 1.创建hooks
        this.hooks = {
            // 同步钩子
            SyncHook: new SyncHook(['name', 'age'])
        }

        // 2.用hooks监听事件（自定义plugin）
        this.hooks.SyncHook.tap("event1", (name, age) => {
            console.log("event1事件监听执行了", name, age);
        });

        this.hooks.SyncHook.tap("event2", (name, age) => {
            console.log("event2事件监听执行了", name, age);
        });
    }
}

const compiler = new HYComplier();
// 3.触发事件
setTimeout(() => {
    compiler.hooks.SyncHook.call("yjm", 22);
}, 2000);