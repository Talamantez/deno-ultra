import{jsx as _jsx}from"react/jsx-runtime";import{dehydrate}from"@tanstack/react-query";import useServerInsertedHTML from"ultra/hooks/use-server-inserted-html.js";export function useDehydrateReactQuery(queryClient){useServerInsertedHTML(()=>{/**
     * Dehydrate the state from queryClient
     */const dehydratedState=dehydrate(queryClient);return /*#__PURE__*/_jsx("script",{dangerouslySetInnerHTML:{__html:"window.__REACT_QUERY_DEHYDRATED_STATE = "+JSON.stringify(dehydratedState)}});});}// Note: There are known limitations to 'dehydrate', more info here.
// https://github.com/TanStack/query/blob/main/docs/reference/hydration.md#limitations
