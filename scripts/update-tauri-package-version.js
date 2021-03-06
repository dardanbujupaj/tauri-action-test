const { execSync } = require('child_process')

// const version = process.argv[2]
const version = process.env['npm_package_version']

const tauriConf = 'src-tauri/tauri.conf.json'

console.log(`Update tauri package version to ${version}`)

// Update tauri app
execSync(`json -I -f ${tauriConf} -e "this.package.version='${version}'"`)

// stage file
execSync(`git add ${tauriConf}`)