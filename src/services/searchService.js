import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get(`users/search`, {
            params: {
                q,
                type: 'less',
            },
        });

        // .then((response) => response.json())
        // .then((res) => {
        // setSearchResult(res.data);
        // //     //Khi đã có kết quả thì dừng loading...
        // setLoading(false);
        // })
        // .catch((err) => {
        //nếu có lỗi thì cũng dừng loading...
        //     setLoading(false);
        // });
        return res.data;
    } catch (error) {
        // setLoading(false);
        console.log(error);
    }
};
