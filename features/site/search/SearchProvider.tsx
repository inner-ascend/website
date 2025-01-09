import { useRouter } from 'one'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Button, Dialog, Input, ScrollView, Text, XStack, YStack } from 'tamagui'
import { Link } from '../../../components/Link'
import { SearchContext } from './SearchContext'
import { useSearch } from './useSearch'

export const SearchProvider = memo(({ children }: any) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { search, results, query } = useSearch()

  const onInput = useCallback(
    (e: any) => {
      setIsOpen(true)
      search(e.key)
    },
    [setIsOpen, search]
  )
  const onOpen = useCallback(() => setIsOpen(true), [setIsOpen])
  const onClose = useCallback(() => setIsOpen(false), [setIsOpen])

  useSearchKeyboard({
    isOpen,
    onOpen,
    onClose,
    onInput,
  })

  const contextValue = useMemo(
    () => ({
      isOpen,
      onOpen,
      onClose,
      onInput,
    }),
    [isOpen, onOpen, onClose, onInput]
  )

  return (
    <>
      <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
      {isOpen &&
        createPortal(
          <Dialog modal open onOpenChange={(open) => !open && onClose()}>
            <Dialog.Portal>
              <Dialog.Overlay
                key="overlay"
                animation="medium"
                opacity={0.5}
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
              />
              <Dialog.Content
                bordered
                elevate
                key="content"
                animation={[
                  'quick',
                  {
                    opacity: {
                      overshootClamping: true,
                    },
                  },
                ]}
                enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
                exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
                x={0}
                scale={1}
                width="90%"
                maxWidth={600}
              >
                <YStack space>
                  <Input
                    size="$4"
                    borderWidth={1}
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => search(e.nativeEvent.text)}
                    autoFocus
                  />
                  <ScrollView maxHeight={400}>
                    <YStack padding="$2" space="$2">
                      {results.map((result) => (
                        <Link 
                          key={result.url} 
                          href={result.url}
                          onPress={() => {
                            onClose()
                            router.push(result.url)
                          }}
                        >
                          <YStack 
                            padding="$2" 
                            hoverStyle={{ backgroundColor: '$backgroundHover' }}
                          >
                            <Text size="$5" fontWeight="bold">{result.title}</Text>
                            <Text size="$3" theme="alt2">{result.content}</Text>
                          </YStack>
                        </Link>
                      ))}
                      {query && results.length === 0 && (
                        <Text theme="alt2">No results found</Text>
                      )}
                    </YStack>
                  </ScrollView>
                </YStack>

                <XStack marginTop="$4" justifyContent="flex-end">
                  <Button onPress={onClose}>Close</Button>
                </XStack>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog>,
          document.body
        )}
    </>
  )
})

const useSearchKeyboard = ({ isOpen, onOpen, onClose }: any) => {
  useEffect(() => {
    const onKeyDown = (event: any) => {
      function open() {
        if (!document.body.classList.contains('DocSearch--active')) {
          onOpen()
        }
      }
      if (
        (isOpen && event.keyCode === 27) ||
        (event.key === 'k' && (event.metaKey || event.ctrlKey)) ||
        (!isFocusedSomewhere(event) && event.key === '/' && !isOpen)
      ) {
        event.preventDefault()

        if (isOpen) {
          onClose()
        } else if (!document.body.classList.contains('DocSearch--active')) {
          open()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onOpen, onClose])
}

const isFocusedSomewhere = (event: any) => {
  const element = event.target
  const tagName = element.tagName
  return (
    element.isContentEditable ||
    tagName === 'INPUT' ||
    tagName === 'SELECT' ||
    tagName === 'TEXTAREA'
  )
}
