async function fetchData(url) {

    try{
     const response = await fetch(url);
    if (!response.ok) {
        // tests expect this exact message for negative case
        throw new Error('There was a networking error.');
    }

    const data = await response.json();
    return data;

    } catch(error){
        // tests expect a generic networking error message
        throw new Error('There was a networking error.');
    }

}

module.exports = { fetchData };