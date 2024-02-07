import {useMediaQuery} from '@react-hook/media-query'

export const isMobile = () => {
    const mediaQuerySize = useMediaQuery('only screen and (max-width: 900px)')

    return mediaQuerySize
}
