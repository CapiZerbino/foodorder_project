import axiosClient from './axiosClient';

// api/productApi.js
class VoucherApi {
    getAll = (params) => {
    const url = '/voucher/';
    return axiosClient.get(url + params);
    };
    }
    const voucherApi = new VoucherApi();
    export default voucherApi;