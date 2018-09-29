const sh = require('shelljs')
const fs = require('fs')
const readline = require('readline')
const _ = require('lodash')

sh.exec('npm i gm-xfont@latest')

sh.exec('cp ./node_modules/gm-xfont/iconfont.css ./src/icon/iconfont.css')

sh.exec('cp ./node_modules/gm-xfont/iconfont.ttf ./fonts/iconfont.ttf')

const name = './src/icon/iconfont.css'
const rl = readline.createInterface({
  input: fs.createReadStream(name)
})

const map = {}

rl.on('line', line => {
  const r = line.match(/.xfont-([\w\W]*):before { content: "\\([\w\W]*)"; }/)
  if (r) {
    map[r[1]] = r[2]
  }
}).on('close', () => {
  console.log(map)

  // arr = _.filter(arr, v => v < 4);
  //
  // const avg = _.sum(arr)/arr.length;
  // console.log(avg);
  // fs.writeFileSync(name + '.txt', avg + '\n' + JSON.stringify(arr))
})