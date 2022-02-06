

const urlFetch = async (address) => {
    try {
        let response = await fetch(address);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
          }
        let data = await response.json();
        return data;
        
    } catch (error) {
        console.error('network module error', error.message);
        return{};
    }


};

export default urlFetch;