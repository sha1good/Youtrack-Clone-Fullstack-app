import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getUserSubscription,
  upgradeUserSubscription,
} from "@/redux/subscription/Action";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UpgradeSuccessPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { subscription } = useSelector((store) => store);
  const queryParams = new URLSearchParams(location.search);
  const paymentId = queryParams.get("payment_id");
  const planType = queryParams.get("subType");

  useEffect(() => {
    dispatch(upgradeUserSubscription({planType}));
    dispatch(getUserSubscription());
  }, [dispatch, planType]);

  return (
    <div className="flex justify-center">
      <Card className="flex p-5 flex-col items-center mt-10 space-y-5">
        <div className="flex item-center gap-4">
          <CheckCircledIcon className="h-9 w-9 text-green-500" />
          <p className="text-xl"> Plan Upgraded Successfully</p>
        </div>
        <div className="space-y-3">
          <p className="text-green-500">Start Date: {subscription.userSubscription?.subscriptionStartDate}</p>
          <p className="text-red-500">End Date: {subscription.userSubscription?.subscriptionEndDate}</p>
          <p>Plan Type:{subscription.userSubscription?.subType} </p>
        </div>

        <Button onClick={() => navigate("/")}>Go Home</Button>
      </Card>
    </div>
  );
};

export default UpgradeSuccessPage;
