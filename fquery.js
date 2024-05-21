const $ = {
    async ajax(url, options= {}) {
        try {
            const response = await fetch(url, options);
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log('Fetch error:', error);
        };
        throw error;
    }
};