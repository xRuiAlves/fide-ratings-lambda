export const handler = async(event) => {
    console.info(event);
    const response = {
        statusCode: 200,
        body: JSON.stringify("Hello from Lambda!"),
    };
    return response;
};
