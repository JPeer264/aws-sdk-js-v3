import {Structure as _Structure_} from '@aws-sdk/types';

export const IdempotentParameterMismatchException: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        message: {
            shape: {
                type: 'string',
            },
        },
        code: {
            shape: {
                type: 'integer',
            },
        },
    },
    exceptionType: 'IdempotentParameterMismatchException',
};