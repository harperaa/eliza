import {
    Plugin,
} from "@elizaos/core";
import { codeAssistantAction } from "./actions/codeAssistant";

export const codeAssistantPlugin: Plugin = {
    name: "codeAssistant",
    description: "Development assistance and documentation search",
    actions: [codeAssistantAction],
    evaluators: [],
    providers: [],
};
