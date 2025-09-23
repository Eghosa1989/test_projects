async function fetchaData(url) {
    try {
        const response = await fetch(url);
    } catch (error) {
        throw new Error('there was a networking error: ${error}');
        
    }
}  

module.exports = {fetchaData};