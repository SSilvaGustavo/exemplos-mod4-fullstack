export const Api = {
    baseUrl: "http://localhost:3000",

    // Endpoint - Product

    readAllUrl: () => Api.baseUrl + "/product",

    readByIdUrl: id => Api.baseUrl + "/product/" + id,

    createProductUrl: () => Api.baseUrl + "/product",
    
    udpdateUrl: id => Api.baseUrl + "/product/" + id,
    
    deleteUrl: id => Api.baseUrl + "/product/" + id,

    // GET

    // fetchGet: () => fetch(Api.baseUrl + "/product"), // Forma simplificada

    buildApiGetRequest: url =>
        fetch(url, {
            method: "GET",
        }),

    // POST
    buildApiPostRequest: (url, body) =>
        fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body),
        }),

    // PATCH
    buildApiPatchRequest: (url, body) =>
    fetch(url, {
        method: "PATCH",
        headers: new Headers({
            "Content-type": "application/json",
        }),
        body: JSON.stringify(body),
    }),

    // DELETE
    buildApiDeleteRequest: (url, body) =>
    fetch(url, {
        method: "DELETE",
    })
};