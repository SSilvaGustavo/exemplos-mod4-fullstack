export const Api = {
    baseUrl: "https://pokeapi.co/api/v2",
    
    readAllUrl: () => Api.baseUrl + "/pokemon",

    buildApiGetRequest: url => 
        fetch(url, {
            method: "GET"
        }),

    fetchGet: () => fetch(Api.baseUrl + "/pokemon"),
}
