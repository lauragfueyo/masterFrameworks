import { actionsEnums } from "../common/actionsEnums";

export interface organizationName {
    organizationName: string;
}

const defaultOrganizationName = (): organizationName => ({
    organizationName: "lemoncode"
});

export const organizationReducer = (
    state: organizationName = defaultOrganizationName(),
    action
) => {
    switch (action.type) {
        case actionsEnums.MEMBER_ORGANIZATION_NAME:
            return handleOrganizatioAction(state, action.payload);
    }
    return state;
};

const handleOrganizatioAction = (
    state: organizationName,
    newOrganizationName: string
): organizationName => {
    return {
        ...state,
        organizationName: newOrganizationName
    };
};