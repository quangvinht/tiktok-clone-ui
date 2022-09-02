import * as httpRequest from '~/utils/httpRequest';

export const getAnUser = async ({ nickname }) => {
    try {
        const res = await httpRequest.get(`users`, {
            params: {
                nickname,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
