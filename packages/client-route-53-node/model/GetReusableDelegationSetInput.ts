import {Structure as _Structure_} from '@aws-sdk/types';

export const GetReusableDelegationSetInput: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Id',
        },
    },
};