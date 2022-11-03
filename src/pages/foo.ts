import { foo } from "../foo";

export const get = async () => {
    const x = await foo();

    return {
        body: JSON.stringify({
            foo: x,
        }),
    };
};
