// const filteredArray = useMemo(() => {
//     return songs.filter(song => song.name.toLowerCase().includes(searchQuery.toLowerCase()))
//     .sort((a, b) => new Date(b[filter]) - new Date(a[filter]))
//   }, [searchQuery, filter, songs]);

import { useMemo } from "react";

export const useSongs = (songs, searchQuery, filter) => {
    return useMemo(() => {
        return songs.filter((song) => song.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => new Date(b[filter]) - new Date(a[filter]));
    }, [searchQuery, filter, songs]);
};
