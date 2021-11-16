import {remark} from "remark";
import remarkHtml from "remark-html";
import fs from "fs";
import plugin from '.'
const doc = fs.readFileSync('src/test.md', 'utf-8')

test('Add target_blank to external links', () => {
  const result = remark()
    .use(plugin)
    .use(remarkHtml)
    .processSync(doc)

  console.log(result.value)

  // expect(result.value).toContain('# BREAKING Hello!')
})