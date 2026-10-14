class Server {
    
    async loadResource(className) {
        return await fetch(new URL("./../client/static/resources/${className}/${className}.htm l"))
            .then(response => response.text)
            .then(text => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(text);
                return doc;
            })
    }
}