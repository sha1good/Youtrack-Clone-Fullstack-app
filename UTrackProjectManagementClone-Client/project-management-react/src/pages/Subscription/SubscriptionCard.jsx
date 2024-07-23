/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { createPayment } from "@/redux/payment/Action";
import { CheckCircledIcon } from "@radix-ui/react-icons";

import { useDispatch } from "react-redux";

const SubscriptionCard = ({ data }) => {
   
 const dispatch = useDispatch();

 const handleUpgrade = () =>{
      dispatch(createPayment({subType: data.subType}))
 }

 
  return (
    <div
      className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b]
          shadow-2xl card p-5 space-y-5 w-[18rem]"
    >
      <p> {data.planName}</p>
      <p>
        <span className="text-xl font-semibold">CAD {data.price}/</span>
        <span>{data.subType}</span>
      </p>
      {data.subType === "ANNUALLY" && (
        <p className="text-green-500">30% off</p>
      )}
      <Button className="w-full" onClick={handleUpgrade}>{data.buttonName}</Button>
      <div>
        {data.feature.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircledIcon />
            <p> {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCard;
