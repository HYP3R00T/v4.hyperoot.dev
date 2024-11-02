// For HeadSEO.astro
export interface HeadSEOProps {
    title: string,
    description?: string,
    ogImage?: string
}

// For BaseLayout.astro
export interface BaseLayoutProps extends HeadSEOProps { }
