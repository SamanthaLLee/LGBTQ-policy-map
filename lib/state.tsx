import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { stateMappingData } from '/Users/samlee/nextjs-blog/public/data/allStates'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllStateIds() {
  return stateMappingData.map(state => {
    return {
      params: {
        id: state.id
      }
    }
  })
}

export async function getStateData(state: string) {
  const fullPath = path.join(postsDirectory, `${state}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    state,
    contentHtml,
    ...(matterResult.data as { date: string; title: string })
  }
}