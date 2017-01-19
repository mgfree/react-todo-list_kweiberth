export default function user (state = {}, action) {
    switch (action.type) {
        case 'CREATE_USER_ID':
            return {
                    username: user.username,
                    id: action.id
                }
        default:
            return state;
    }
}