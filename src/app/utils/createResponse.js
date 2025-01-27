export const createResponse = (data, code) => {
    return new Response(JSON.stringify(data), {
    status: code,
    headers: { "Content-Type": "application/json" },
    });
};