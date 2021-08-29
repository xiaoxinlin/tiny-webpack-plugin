const Fs = require('fs');
// 要确保文件存在，否则会报错
let fileName = 'test-log.json';
// 同步写入文件到设置的地址中
/* let arr = ['aaassss.jpg', 'b.png', 'cccc.jpg'];
Fs.writeFileSync(fileName, JSON.stringify(arr), 'utf-8'); */
Fs.readFile(fileName, 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(JSON.parse(data)[0]);
});
