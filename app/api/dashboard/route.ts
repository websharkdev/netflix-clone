import movies from './movies.json'

export const dynamic = 'force-static'

export async function GET() {
    const data = JSON.parse(JSON.stringify(movies))

    return Response.json({ data })
}