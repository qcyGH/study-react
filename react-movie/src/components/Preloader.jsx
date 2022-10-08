import { ChakraProvider, Skeleton } from '@chakra-ui/react'

export function Preloader(props) {
    return (
        <ChakraProvider>
            <Skeleton height='489px' width='300px' isLoaded={!props.isLoading} fadeDuration={1}/>
            <Skeleton height='489px' width='300px' isLoaded={!props.isLoading} fadeDuration={1}/>
            <Skeleton height='489px' width='300px' isLoaded={!props.isLoading} fadeDuration={1}/>
            <Skeleton height='489px' width='300px' isLoaded={!props.isLoading} fadeDuration={1}/>
            <Skeleton height='489px' width='300px' isLoaded={!props.isLoading} fadeDuration={1}/>
            <Skeleton height='489px' width='300px' isLoaded={!props.isLoading} fadeDuration={1}/>
            <Skeleton height='489px' width='300px' isLoaded={!props.isLoading} fadeDuration={1}/>
            <Skeleton height='489px' width='300px' isLoaded={!props.isLoading} fadeDuration={1}/>
        </ChakraProvider>
    )
}