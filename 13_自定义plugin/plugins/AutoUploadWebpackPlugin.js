const { NodeSSH } = require('node-ssh')

class AutoUploadWebpackPlugin {
    apply(compiler) {
        console.log('插件被注册');
        //等到assets已经输出到output目录上时，完成自动上传
        compiler.hooks.afterEmit.tapAsync('AutoUploadWebpackPlugin', async (complication, callback) => {
            //1. 获取文件夹路径
            const outputPath = complication.options.output.path;

            // 2.连接远程服务器(SSH)
            await this.connectServer()

            // 3.将文件夹上传到服务器中

            // 完成所有操作调用callback（）
            callback('自动上传');
        })
    }

    async connectServer() {
        const ssh = new NodeSSH();
        await ssh.connect({
            host: 'http://localhost',
            port: 3000,
            username: 'root',
            password: '123456'
        })
        console.log('服务器连接成功');
    }
}

module.exports = AutoUploadWebpackPlugin;
module.exports.AutoUploadWebpackPlugin = AutoUploadWebpackPlugin;