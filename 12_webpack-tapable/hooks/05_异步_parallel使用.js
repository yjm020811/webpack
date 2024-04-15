const { AsyncParallelHook } = require('tapable');

class HYComplier {
    constructor() {
        // 1.创建hooks
        this.hooks = {
            // 同步钩子
            parallelHook: new AsyncParallelHook(['name', 'age'])
        }

        // 2.用hooks监听事件（自定义plugin）
        this.hooks.parallelHook.tapAsync("event1", (name, age) => {
            setTimeout(() => {
                console.log('event1事件监听执行了', name, age);
            }, 3000);
        });

        this.hooks.parallelHook.tapAsync("event2", (name, age) => {
            setTimeout(() => {
                console.log('event2事件监听执行了', name, age);
            }, 3000);
        });
    }
}

const compiler = new HYComplier();
// 3.触发事件
setTimeout(() => {
    compiler.hooks.parallelHook.callAsync("yjm", 22);
}, 0);