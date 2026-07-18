import { copyFile, mkdir, open } from 'node:fs/promises'
import { extname, resolve } from 'node:path'
import process from 'node:process'

const sourceArgument = process.argv[2]

if (!sourceArgument) {
  console.error('Usage: npm run update-resume -- "/path/to/resume.pdf"')
  process.exit(1)
}

const source = resolve(sourceArgument)
const destinationDirectory = resolve('public')
const destination = resolve(destinationDirectory, 'Sravya-Aravapalli-Resume.pdf')

if (extname(source).toLowerCase() !== '.pdf') {
  console.error('The resume must be a PDF file.')
  process.exit(1)
}

let file
try {
  file = await open(source, 'r')
  const header = Buffer.alloc(5)
  await file.read(header, 0, header.length, 0)
  if (header.toString() !== '%PDF-') throw new Error('The selected file is not a valid PDF.')
} catch (error) {
  console.error(`Unable to update resume: ${error.message}`)
  process.exit(1)
} finally {
  await file?.close()
}

await mkdir(destinationDirectory, { recursive: true })
await copyFile(source, destination)
console.log(`Resume updated: ${destination}`)
