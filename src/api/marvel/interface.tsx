interface Url {
type: string
url: string
}
interface Image {
path: string
extension: string
}
interface ComicSummary {
resourceURI: string
name: string
}
interface ComicList {
available: number
returned: number
collectionURI: string
items: ComicSummary[]
}
interface StorySummary {
resourceURI: string
name: string
type: string
}
interface StoryList {
available: number
returned: number
collectionURI: string
items: StorySummary[]
}
interface EventSummary {
resourceURI: string
name: string
}
interface EventList {
available: number
returned: number
collectionURI: string
items: EventSummary[]
}
interface SeriesSummary {
resourceURI: string
name: string
}
interface SeriesList {
available: number
returned: number
collectionURI: string
items: SeriesSummary[]
}

interface Character {
  id: number
  name: string
  description: string
  modified: Date
  resourceURI: string
  urls: Url[]
  thumbnail: Image
  comics: ComicList
  stories: StoryList
  events: EventList
  series: SeriesList
  }
interface CharacterDataContainer {
  offset: number
  limit: number
  total: number
  count: number
  results: Character[]
}
export interface CharacterDataWrapper {
code: number
status: string
copyright: string
attributionText: string
attributionHTML: string
data: CharacterDataContainer
etag: string
}
