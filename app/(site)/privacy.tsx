import { ThemeTint } from '@tamagui/logo'
import { getMDXComponent } from 'mdx-bundler/client'
import { useLoader } from 'one'
import React from 'react'
import { Container } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
import { DocsQuickNav } from '~/features/docs/DocsQuickNav'
import { MDXProvider } from '~/features/docs/MDXProvider'
import { MDXTabs } from '~/features/docs/MDXTabs'
import { useIsDocsTinted } from '~/features/docs/docsTint'
import { components } from '~/features/mdx/MDXComponents'

export async function loader() {
  const { getMDXBySlug } = await import('@tamagui/mdx-2')
  const { frontmatter, code } = await getMDXBySlug('data/etc', 'privacy')
  return {
    frontmatter,
    code,
  }
}

export default function DocComponentsPage() {
  const { frontmatter, code } = useLoader(loader)
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  const isTinted = useIsDocsTinted()

  return (
    <>
      <HeadInfo
        title={`${frontmatter.title} | Inner Ascend`}
        description={frontmatter.description}
      />

      <Container py="$10">
        <MDXProvider frontmatter={frontmatter}>
          <ThemeTint disable={!isTinted}>
            <MDXTabs id="type" defaultValue="styled">
              <Component components={components as any} />
            </MDXTabs>
          </ThemeTint>
        </MDXProvider>
      </Container>

      <DocsQuickNav key={frontmatter.slug} />
    </>
  )
}
