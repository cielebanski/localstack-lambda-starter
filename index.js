exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: {
            ok: true,
            foo: 'bar',
        },
    };

    return response;
};  