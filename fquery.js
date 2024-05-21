const $ = {
    async ajax(url) {
        try {
            const response = await fetch();
            const data = await response.json();
            return data;
        } catch (error) {
            console.log('Error fetching data', error);
        };
        throw error;
    }
};