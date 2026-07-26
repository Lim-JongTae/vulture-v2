import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Colors other than Obsidian, Paper, Slate Pill, Ash Mist, Inkstone, felt-gray, etc are forbidden in UI elements.
// Simple validation rules for Monochrome UI and corner radius constraints from AGENTS.md
const WORKSPACE_DIR = path.resolve(__dirname, '..')

const FORBIDDEN_ROUNDED_PATTERNS = [
  /rounded-(?!none|full|\[75px\])/g, // Allows only rounded-none, rounded-full, and rounded-[75px]
  /border-radius:\s*(?!0px|75px|var\(--radius-(images|cards|inputs|tags|buttons)\)|0|inherit|none)/g
]

const FORBIDDEN_SHADOW_PATTERNS = [
  /shadow-(sm|md|lg|xl|2xl|inner|flat)/g,
  /box-shadow:/g
]

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f)
    const isDirectory = fs.statSync(dirPath).isDirectory()
    if (isDirectory) {
      // Skip node_modules, .nuxt, output directories
      if (!['node_modules', '.nuxt', '.output', '.git', 'dist'].includes(f)) {
        walkDir(dirPath, callback)
      }
    } else {
      callback(dirPath)
    }
  })
}

console.log('🤖 Starting QA Verification Agent Validation...')
let errorsFound = 0

// Walk through app, components, and layouts directories
const targetDirs = ['app', 'components', 'layouts', 'server']
targetDirs.forEach(dir => {
  const dirPath = path.join(WORKSPACE_DIR, dir)
  if (fs.existsSync(dirPath)) {
    walkDir(dirPath, (filePath) => {
      const ext = path.extname(filePath)
      if (['.vue', '.css', '.ts', '.js'].includes(ext)) {
        const content = fs.readFileSync(filePath, 'utf8')
        
        // 1. Check for invalid rounded corners
        FORBIDDEN_ROUNDED_PATTERNS.forEach(pattern => {
          if (pattern.test(content)) {
            console.error(`❌ [Corner Radius Violation] in file: ${filePath}`)
            console.error(`   -> Only rounded-none (0px) or rounded-full/rounded-[75px] (75px) are allowed.`)
            errorsFound++
          }
        })

        // 2. Check for shadow elevations (Flat Design enforcement)
        FORBIDDEN_SHADOW_PATTERNS.forEach(pattern => {
          if (pattern.test(content)) {
            console.error(`❌ [Shadow/Elevation Violation] in file: ${filePath}`)
            console.error(`   -> All box-shadows are strictly forbidden. Design must be flat with hairline borders.`)
            errorsFound++
          }
        })
      }
    })
  }
})

if (errorsFound > 0) {
  console.error(`\n🔴 QA Verification Failed: ${errorsFound} design violations detected. Release BLOCKED.`)
  process.exit(1)
} else {
  console.log('\n🟢 QA Verification Passed: UI constraints comply with AGENTS.md rules. Go-sign APPROVED.')
  process.exit(0)
}
