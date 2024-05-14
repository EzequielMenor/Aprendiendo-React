import { EVENTS } from "../utils/const"
import { Children, useEffect, useState } from 'react'
import { match } from "path-to-regexp"
import { getCurrentPath } from "../utils/getCurrentPath"

export function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routeToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routeToUse.find(({ path }) => {
    if (path === currentPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    routeParams = matched.params
    return true

  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}