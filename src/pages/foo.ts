import { foo } from "../foo";

export const get = async () => {
    return {
        body: JSON.stringify({ foo: await foo() }),
    };
};
