const { SyncLoopHook } = require('tapable');

let count = 0;

class HYComplier {
    constructor() {
        // 1.创建hooks
        // loop的特点: 循环执行，return true继续执行，没有返回值就跳出循环
        this.hooks = {
            // 同步钩子
            loopHook: new SyncLoopHook(['name', 'age'])
        }

        // 2.用hooks监听事件（自定义plugin）
        this.hooks.loopHook.tap("event1", (name, age) => {
            console.log("event1事件监听执行了", name, age);
            if (count < 5) {
                count++;
                return "继续执行";
            }
        });

        this.hooks.loopHook.tap("event2", (name, age) => {
            console.log("event2事件监听执行了", name, age);
        });
    }
}

const compiler = new HYComplier();
// 3.触发事件
setTimeout(() => {
    compiler.hooks.loopHook.call("yjm", 22);
}, 2000);