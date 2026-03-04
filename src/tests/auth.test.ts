import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

const headers = {
    "authorization": "ApiKey 12345"
}


describe("Get API key", () => {
    test("Fail no authorization header ", () => {
        const result = getAPIKey({});
        expect(result).toBeNull();
    });

    test("Fail only send one word ", () => {
        const result = getAPIKey({ "authorization": "hello" });
        expect(result).toBeNull();
    });

    test("Success return 12345", () => {
        const result = getAPIKey(headers);
        expect(result).toEqual("12345")
    });
});