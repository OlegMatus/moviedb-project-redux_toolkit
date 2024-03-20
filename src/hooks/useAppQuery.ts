import {useSearchParams} from "react-router-dom";

const useAppQuery = () => {
    const [query, setQuery] = useSearchParams({page: '1', pageSize: '20'});
    const page = parseInt(query.get('page'));
    const pageSize = +query.get('pageSize');

    return {
        page,
        pageSize,
        setQuery,
        query,
        // prevPage: () => setQuery(prev => {
        //     prev.set('page', (+(prev.get('page')) - 1).toString())
        //     return prev
        // }),
        // nextPage: () => setQuery(prev => {
        //     prev.set('page', (+(prev.get('page')) +1).toString())
        //     return prev
        // })
    }
};

export {
    useAppQuery
}