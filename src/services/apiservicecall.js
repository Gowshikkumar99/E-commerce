class ApiServiceCall {

    fetchProduct() {
        return fetch('/data/products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response is not okay');
                }
                return response.json();  
            })
            .catch(error => {
                console.error('There was a problem in API:', error);
                throw error;
            });
    }

    loginUser () {
        console.log('loging user');
    }

}

export default ApiServiceCall;
