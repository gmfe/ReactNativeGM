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

  const newMap = {}
  _.each(_.keys(map).sort(), k => {
    newMap[k] = map[k]
  })

  fs.writeFileSync('./src/icon/glyph_map.js', '/* eslint-disable */\nlet glyph_map = ' + JSON.stringify(newMap, null, 2) + '\n\nexport default glyph_map\n')
})
