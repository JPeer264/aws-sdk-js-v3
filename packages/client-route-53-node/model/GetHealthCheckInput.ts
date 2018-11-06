import {Structure as _Structure_} from '@aws-sdk/types';

export const GetHealthCheckInput: _Structure_ = {
    type: 'structure',
    required: [
        'HealthCheckId',
    ],
    members: {
        HealthCheckId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'HealthCheckId',
        },
    },
};