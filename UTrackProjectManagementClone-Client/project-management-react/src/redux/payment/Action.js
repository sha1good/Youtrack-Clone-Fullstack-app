import api from "@/config/api";

export const createPayment = async ({ subType }) => {
  try {
    const { data } = api.post(`/api/payment/${subType}`,subType);
    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
  } catch (error) {
    console.log(error);
  }
};
