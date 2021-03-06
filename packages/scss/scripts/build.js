const Fs = require('fs')
const Path = require('path')
const Sass = require('node-sass')

const LIB_PATH = Path.resolve('lib')

const getComponents = () => {
  let allComponents = []
  const types = ['atoms', 'molecules']

  types.forEach(type => {
    const allFilesFromDir = Fs.readdirSync(`src/${type}`).map(file => ({
      input: `src/${type}/${file}`,
      output: `lib/${file.slice(0, -4) + 'css'}`
    }))

    allComponents = [
      ...allComponents,
      ...allFilesFromDir,
    ]
  })

  return allComponents
}

const compile = (path, fileName) => {
  const result = Sass.renderSync({
    data: Fs.readFileSync(Path.resolve(path)).toString(),
    outputStyle: 'expanded',
    outFile: 'global.css',
    includePaths: [Path.resolve('src')]
  })

  Fs.writeFileSync(
    Path.resolve(fileName),
    result.css.toString()
  )
}

if (!Fs.existsSync(LIB_PATH)) {
  Fs.mkdirSync(LIB_PATH)
}


compile('src/global.scss', 'lib/global.css')

getComponents().forEach(component => {
  compile(component.input, component.output)
})
