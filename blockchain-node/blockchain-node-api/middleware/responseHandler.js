const responseHandler = (responseData, request, response, next) => {
    // console.log(responseData, request, response)
    if(request.body.newAccessToken)responseData.data = {...responseData.data,newAccessToken:request.body.newAccessToken};
    if (responseData.code >=400 ) {
        const responseJSON = {
            status: 0,
            errors: responseData.errors,
            data: responseData.data
        }
        // console.log(responseJSON.toString());
        response.status(responseData.code).json(responseJSON)
    } else {
        const responseJSON = {
            status: 1,
            ...responseData
        }
        // console.log(responseJSON);
        // console.log(responseData);
        response.status(responseData.code).json(responseJSON)
    }
}

module.exports = {responseHandler}