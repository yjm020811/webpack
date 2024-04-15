const { SyncBailHook } = require('tapable');

class HYComplier {
    constructor() {
        // 1.创建hooks
        // bail的特点：当事件监听执行时，遇到return不为null的值，则停止执行
        this.hooks = {
            // 同步钩子
            bailHook: new SyncBailHook(['name', 'age'])
        }

        // 2.用hooks监听事件（自定义plugin）
        this.hooks.bailHook.tap("event1", (name, age) => {
            console.log("event1事件监听执行了", name, age);
            // 使用bailHook，当事件监听执行时，遇到return不为null的值，则停止执行
            return 'event1事件监听执行了，停止执行'
        });

        this.hooks.bailHook.tap("event2", (name, age) => {
            console.log("event2事件监听执行了", name, age);
        });
    }
}

const compiler = new HYComplier();
// 3.触发事件
setTimeout(() => {
    compiler.hooks.bailHook.call("yjm", 22);
}, 2000);