import { Configuration, OpenAIApi } from 'openai'
import { FromLanguage, Language } from '../types'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const configuration = new Configuration({ apiKey })
const openai = new OpenAIApi(Configuration)

export async function translate({
  fromLanguage,
  toLanguage,
  text,
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  const messages = [
    {
      role: ChatCompletionRequestMessageRole.user,
      content:
        'You aree a AI that translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can also recive {{auto}} which means that you have to detect the language. The lenguage you translate to is surrounded by `[[` and `]]`.',
    },
  ]
}
