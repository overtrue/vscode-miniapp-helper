const fs = require('fs')
const path = require('path')
const xmlParser = require('fast-xml-parser')
const sourceSnippetPath = './src/snippets/'
const targetSnippetPath = './snippets/'

const groups = ['js', 'json', 'wxml']

const compile = group => {
  fs.readdir(path.join(sourceSnippetPath, group), function(err, files) {
    let snippets = {}

    files.forEach(function(file) {
      console.log(`parse snippet ${group}/${file} to json...`)
      let snippet = xmlParser.parse(fs.readFileSync(path.join(sourceSnippetPath, group, file), 'utf8')).snippet
      if (snippet.body.indexOf('\n    ') === 0) {
        snippet.body = snippet.body.substring(5)
      }
      snippets[file.replace(/.xml$/, '')] = snippet
    })
    updateReadme(group, snippets)
    fs.writeFileSync(path.join(targetSnippetPath, `${group}.json`), JSON.stringify(snippets, null, 4), 'utf8')
  })
}

const updateReadme = (group, snippets) => {
  let readme = fs.readFileSync('README.md', 'utf8')

  let tableContent = ''

  for (const snippet in snippets) {
    tableContent += `\n| \`${snippets[snippet].prefix}\` | ${snippets[snippet].description} |`
  }

  fs.writeFileSync(
    'README.md',
    readme.replace(
      new RegExp(`(#{3}\\s+${group})\\n[\\s\\S]*?\\n-{3}`),
      `$1\n| 前缀 | 描述 |\n| :-- | :-- |${tableContent}\n---`
    ),
    'utf8'
  )
}

const snippetToXml = group => {
  console.log(`parse snippet ${group}...`)
  fs.readFile(path.join(targetSnippetPath, `${group}.json`), 'utf8', function(err, content) {
    let snippets = JSON.parse(content)
    console.log(path.join(targetSnippetPath, `${group}.json`))
    for (const snippet in snippets) {
      console.log(`parse snippet ${group}/${snippet} to xml...`)
      let body = snippets[snippet].body
      body = body.join('\n')
      fs.writeFileSync(
        path.join(sourceSnippetPath, group, `${snippet}.xml`),
        `<snippet>
  <prefix>${snippets[snippet].prefix}</prefix>
  <description><![CDATA[${snippets[snippet].description}]]></description>
  <body><![CDATA[
    ${body}
  ]]></body>
</snippet>`,
        'utf8'
      )
    }
  })
}

groups.map(compile)
