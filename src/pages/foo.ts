export const get = async () => {
    return {
        body: JSON.stringify({
            foo: "import.meta.env.FOO",
        }),
    };
};
