export const schemaUser = {

    summary: 'Uniq user by id',
    description: 'Get uniq user',
    tags: ['User'],
    params: {
        type: 'object',
        properties: {
            id: {
                type: 'number',
                description: ''
            }
        }
    },
    response: {
        200: {
            description: 'Returns User model',
            type: 'object',
            properties: {
                id: {
                    type: 'number',
                    format: 'uuid'
                },
                firstName: {
                    type: 'string'
                },
                lastName: {
                    type: 'string'
                },
                email: {
                    type: 'string',
                    format: 'email'
                }
            }
        },
        404: {
            description: 'User not found',
            type: 'object',
            properties: {
                code: {
                    type: 'string'
                },
                message: {
                    type: 'string'
                }
            }
        }
    }

}